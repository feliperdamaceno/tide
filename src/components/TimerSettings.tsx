// Components
import Button from './Button'

// Context
import { TimerContext, Modes } from '../context/TimerProvider'

// Hooks
import { useContext } from 'react'

export default function TimerSettings() {
  const { timer, dispatch } = useContext(TimerContext)
  const buttons = [
    { name: 'Focus', mode: Modes.FOCUS },
    { name: 'Short Break', mode: Modes.SHORT },
    { name: 'Long Break', mode: Modes.LONG }
  ]

  return (
    <div className="flex text-sm font-medium border-none rounded-md md:text-lg bg-zinc-900 timer-settings">
      {buttons.map((button, index) => (
        <Button
          key={index}
          render={(styles) => (
            <button
              onClick={() =>
                dispatch({ type: 'MODE', payload: { mode: button.mode } })
              }
              className={`${styles} ${
                button.mode === timer.mode ? 'active' : ''
              }`}
            >
              {button.name}
            </button>
          )}
        />
      ))}
    </div>
  )
}
