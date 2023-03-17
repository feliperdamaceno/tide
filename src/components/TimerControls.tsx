// Components
import Button from './Button'

// Context
import { TimerContext } from '../context/TimerProvider'

// Hooks
import { useContext } from 'react'

export default function TimerControls() {
  const { timer, dispatch } = useContext(TimerContext)

  function handleStart(): void {
    dispatch({ type: 'START' })
  }

  function handlePause(): void {
    dispatch({ type: 'PAUSE' })
  }

  function handleReset(): void {
    dispatch({ type: 'RESET' })
  }

  return (
    <div className="flex text-sm font-medium rounded-md md:text-lg bg-zinc-900">
      {timer.running ? (
        <>
          <Button
            render={(styles) => (
              <button
                onClick={timer.paused ? handleStart : handlePause}
                className={`${styles} rounded-l-md md:hover:translate-y-[-0.3em] active:hover:-translate-y-0`}
              >
                {timer.paused ? 'Resume' : 'Pause'}
              </button>
            )}
          />

          <Button
            render={(styles) => (
              <button
                onClick={handleReset}
                className={`${styles} rounded-r-md md:hover:translate-y-[-0.3em] active:hover:-translate-y-0`}
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
              className={`${styles} rounded-md md:hover:translate-y-[-0.3em] active:hover:-translate-y-0`}
            >
              Start Timer
            </button>
          )}
        />
      )}
    </div>
  )
}
