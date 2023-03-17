// Helpers
import minutesToMilliseconds from '../helpers/minutesToMilliseconds'

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
  SHORT = minutesToMilliseconds(5),
  LONG = minutesToMilliseconds(15)
}

const initialSettings = {
  time: ModeTimes[Modes.FOCUS],
  running: false,
  paused: false,
  interval: null,
  mode: Modes.FOCUS,
  sound: new Audio('/bell.flac')
}

export const TimerContext = createContext<TimerContextType>(null!)

function reducer(state: TimerState, action: TimerActions) {
  switch (action.type) {
    case 'START':
      return { ...state, running: true, paused: false }
    case 'PAUSE':
      return { ...state, paused: true }
    case 'RESET':
      return {
        ...state,
        running: false,
        time: ModeTimes[state.mode]
      }
    case 'TOGGLE_START_PAUSE':
      if (state.paused) return { ...state, running: true, paused: false }
      return { ...state, paused: true }
    case 'CHANGE_MODE':
      return {
        ...state,
        running: false,
        time: ModeTimes[action.payload.mode],
        mode: action.payload.mode
      }
    case 'TICK':
      return { ...state, time: state.time - 1000 }
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
        return dispatch({ type: 'TOGGLE_START_PAUSE' })
      case '1':
        return dispatch({ type: 'CHANGE_MODE', payload: { mode: Modes.FOCUS } })
      case '2':
        return dispatch({ type: 'CHANGE_MODE', payload: { mode: Modes.SHORT } })
      case '3':
        return dispatch({ type: 'CHANGE_MODE', payload: { mode: Modes.LONG } })
    }
  }

  function createNotification(): Notification | undefined {
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
        settings.body = "Let's start focusing again!"
        return new Notification('Long break finished!', settings)
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
    window.addEventListener('keydown', shortcuts)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer.time === 0) {
        if (timer.time) timer.sound.play()
        dispatch({ type: 'RESET' })
        pushNotification()
        return
      }

      if (timer.running && !timer.paused) dispatch({ type: 'TICK' })
    }, 1000)

    return () => clearInterval(interval)
  }, [timer.time, timer.running, timer.paused])

  return (
    <TimerContext.Provider value={{ timer, dispatch }}>
      {children}
    </TimerContext.Provider>
  )
}
