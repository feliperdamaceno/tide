export type TimerState = {
  time: number
  running: boolean
  interval: NodeJS.Timer | null
  mode: ModeTypes
  sound: HTMLAudioElement
}

export type TimerActions =
  | { type: 'START' }
  | { type: 'PAUSE' }
  | { type: 'RESET' }
  | { type: 'MODE'; payload: { mode: ModeTypes } }
  | { type: 'TICK' }
  | { type: 'INTERVAL'; payload: { interval: NodeJS.Timer | null } }

export type TimerContextType = {
  timer: TimerState
  dispatch: React.Dispatch<TimerActions>
}

export type ModeTypes = 'FOCUS' | 'SHORT' | 'LONG'
