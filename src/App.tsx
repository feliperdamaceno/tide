// Components
import TimerControls from './components/TimerControls'
import TimerDisplay from './components/TimerDisplay'

export default function App() {
  return (
    <main className="flex flex-col items-center justify-between flex-1 gap-20 py-20 mx-2">
      <TimerControls />
      <TimerDisplay />

      <div className="text-lg font-medium border-none rounded-md bg-zinc-900">
        <button className="px-6 duration-75 border-2 rounded-md bg-zinc-100 border-zinc-900 py-1.5 translate-y-[-0.2em] hover:translate-y-[-0.3em] active:hover:-translate-y-0">
          Start Timer
        </button>
      </div>
    </main>
  )
}
