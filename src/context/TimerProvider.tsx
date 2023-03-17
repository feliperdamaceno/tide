// Helpers
import minutesToMilliseconds from '../helpers/minutesToMilliseconds'
import clickSound from '../helpers/clickSound'

// Hooks
import { createContext, useReducer, useEffect, ReactNode } from 'react'

// Types
import { TimerState, TimerActions, TimerContextType } from '../types/TimerTypes'

export enum Modes {
  FOCUS = 'FOCUS',
  SHORT = 'SHORT',
  LONG = 'LONG'
}

enum ModeTimes {
  FOCUS = minutesToMilliseconds(25),
  SHORT = minutesToMilliseconds(0.05),
  LONG = minutesToMilliseconds(15)
}

const initialSettings = {
  time: ModeTimes[Modes.FOCUS],
  running: false,
  interval: null,
  mode: Modes.FOCUS,
  sound: new Audio('/bell.flac')
}

export const TimerContext = createContext<TimerContextType>(null!)

function reducer(state: TimerState, action: TimerActions) {
  switch (action.type) {
    case 'START':
      return { ...state, running: true }
    case 'PAUSE':
      if (state.interval) clearInterval(state.interval)
      return { ...state, running: false }
    case 'RESET':
      if (state.interval) clearInterval(state.interval)
      return {
        ...state,
        running: false,
        time: ModeTimes[state.mode]
      }
    case 'MODE':
      if (state.interval) clearInterval(state.interval)
      return {
        ...state,
        running: false,
        time: ModeTimes[action.payload.mode],
        mode: action.payload.mode
      }
    case 'TICK':
      return { ...state, time: state.time - 1000 }
    case 'INTERVAL':
      return { ...state, interval: action.payload.interval }
    default:
      return state
  }
}

interface TimerProviderProps {
  children: ReactNode
}

export default function TimerProvider({ children }: TimerProviderProps) {
  const [timer, dispatch] = useReducer(reducer, initialSettings)

  function shortcuts(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Escape':
        return dispatch({ type: 'RESET' })
      case ' ':
        if (timer.running) return dispatch({ type: 'PAUSE' })
        return dispatch({ type: 'START' })
      case '1':
        if (timer.mode !== Modes.FOCUS) clickSound()
        return dispatch({ type: 'MODE', payload: { mode: Modes.FOCUS } })
      case '2':
        if (timer.mode !== Modes.SHORT) clickSound()
        return dispatch({ type: 'MODE', payload: { mode: Modes.SHORT } })
      case '3':
        if (timer.mode !== Modes.LONG) clickSound()
        return dispatch({ type: 'MODE', payload: { mode: Modes.LONG } })
    }
  }

  function createNotification(): Notification {
    const settings = {
      body: '',
      icon: '/android-chrome-192x192.png'
    }

    switch (timer.mode) {
      case Modes.FOCUS:
        settings.body = "Let's rest a little!"
        return new Notification('Your focus time has finished!', settings)
      case Modes.SHORT:
        settings.body = 'Keeg going!'
        return new Notification('Short break finished!', settings)
      case Modes.LONG:
        settings.body = "Let's start focusing!"
        return new Notification('Long break finished!', settings)
      default:
        return new Notification('Error')
    }
  }

  function pushNotification(): void {
    if (Notification.permission === 'granted') {
      createNotification()
    }
  }

  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission()
    }
    timer.sound.preload = 'auto'
    window.addEventListener('keyup', shortcuts)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      clearInterval(interval)

      if (timer.time <= 0) {
        pushNotification()
        if (timer.sound) timer.sound.play()
        dispatch({ type: 'RESET' })
        return
      }

      if (timer.running) dispatch({ type: 'TICK' })
    }, 1000)

    dispatch({ type: 'INTERVAL', payload: { interval } })
  }, [timer.time, timer.running])

  return (
    <TimerContext.Provider value={{ timer, dispatch }}>
      {children}
    </TimerContext.Provider>
  )
}
