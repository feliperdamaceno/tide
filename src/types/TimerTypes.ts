export type TimerState = {
  time: number
  running: boolean
  interval: number | null
  mode: ModeTypes
}

export type TimerActions =
  | { type: 'START' }
  | { type: 'STOP' }
  | { type: 'RESET' }
  | { type: 'MODE'; payload: { mode: ModeTypes } }
  | { type: 'TICK' }
  | { type: 'INTERVAL'; payload: { interval: number | null } }

export type TimerContextType = {
  timer: TimerState
  dispatch: React.Dispatch<TimerActions>
}

export type ModeTypes = 'FOCUS' | 'SHORT' | 'LONG'
