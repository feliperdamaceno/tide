export type TimerState = {
  time: number
  running: boolean
  paused: boolean
  mode: ModeTypes
  sound: HTMLAudioElement
}

export type TimerActions =
  | { type: 'START' }
  | { type: 'PAUSE' }
  | { type: 'RESET' }
  | { type: 'CHANGE_MODE'; payload: { mode: ModeTypes } }
  | { type: 'TICK' }
  | { type: 'TOGGLE_START_PAUSE' }

export type TimerContextType = {
  timer: TimerState
  dispatch: React.Dispatch<TimerActions>
}

export type ModeTypes = 'FOCUS' | 'SHORT' | 'LONG'
