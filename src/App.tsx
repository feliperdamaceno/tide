// Components
import TimerControls from './components/TimerControls'
import TimerDisplay from './components/TimerDisplay'

export default function App() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center gap-4">
      <TimerControls />
      <TimerDisplay />
    </main>
  )
}
