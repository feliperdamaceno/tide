// Components
import TimerSettings from './components/TimerSettings'
import TimerDisplay from './components/TimerDisplay'
import TimerControls from './components/TimerControls'

export default function App() {
  return (
    <main className="flex flex-col items-center justify-between flex-1 gap-20 py-20 mx-2">
      <TimerSettings />
      <TimerDisplay />
      <TimerControls />
    </main>
  )
}
