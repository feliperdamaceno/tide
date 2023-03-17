// Components
import Button from './Button'

// Helpers
import clickSound from '../helpers/clickSound'

// Context
import { TimerContext } from '../context/TimerProvider'

// Hooks
import { useContext } from 'react'

export default function TimerControls() {
  const { timer, dispatch } = useContext(TimerContext)

  function handleStart() {
    dispatch({ type: 'START' })
    clickSound()
  }

  function handlePause() {
    dispatch({ type: 'PAUSE' })
    clickSound()
  }

  function handleReset() {
    dispatch({ type: 'RESET' })
    clickSound()
  }

  return (
    <div className="flex text-sm font-medium rounded-md md:text-lg bg-zinc-900">
      {timer.running ? (
        <>
          <Button
            render={(styles) => (
              <button
                onClick={handlePause}
                className={`${styles} rounded-l-md hover:translate-y-[-0.3em] active:hover:-translate-y-0`}
              >
                Pause
              </button>
            )}
          />

          <Button
            render={(styles) => (
              <button
                onClick={handleReset}
                className={`${styles} rounded-r-md hover:translate-y-[-0.3em] active:hover:-translate-y-0`}
              >
                Reset
              </button>
            )}
          />
        </>
      ) : (
        <Button
          render={(styles) => (
            <button
              onClick={handleStart}
              className={`${styles} rounded-md hover:translate-y-[-0.3em] active:hover:-translate-y-0`}
            >
              Start Timer
            </button>
          )}
        />
      )}
    </div>
  )
}
