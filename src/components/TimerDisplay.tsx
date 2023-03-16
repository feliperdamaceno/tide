// Context
import { TimerContext } from '../context/TimerProvider'

// Helpers
import timeFormatter from '../helpers/timeFormatter'

// Hooks
import { useContext } from 'react'

export default function TimerDisplay() {
  const { timer } = useContext(TimerContext)

  return (
    <div className="w-full max-w-xs rounded-full bg-zinc-900 aspect-square">
      <div className="grid w-full h-full border-4 rounded-full bg-zinc-100 place-content-center border-zinc-900 translate-y-[-0.3em]">
        <h1 className="font-serif font-medium text-[4rem]">
          {timeFormatter(timer.time)}
        </h1>
      </div>
    </div>
  )
}
