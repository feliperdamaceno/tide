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
  FOCUS = 60,
  SHORT = 30,
  LONG = 45
}

const initialSettings = {
  time: ModeTimes[Modes.FOCUS],
  running: false,
  interval: null,
  mode: Modes.FOCUS
}

export const TimerContext = createContext<TimerContextType>(null!)

function reducer(state: TimerState, action: TimerActions) {
  switch (action.type) {
    case 'START':
      return { ...state, running: true }
    case 'STOP':
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
      return { ...state, time: state.time - 1 }
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

  useEffect(() => {
    const interval = setInterval(() => {
      clearInterval(interval)

      if (timer.time <= 0) {
        dispatch({ type: 'STOP' })
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
