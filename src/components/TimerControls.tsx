export default function TimerControls() {
  return (
    <div className="flex rounded-md border-2 border-zinc-900 font-medium">
      <button className="bg-white border-r-2 border-zinc-900 px-6 py-1.5 rounded-l-md">
        Focus
      </button>
      <button className="bg-white px-6 py-1.5">Short Break</button>
      <button className="bg-white border-l-2 border-zinc-900 px-6 py-1.5 rounded-r-md">
        Long Break
      </button>
    </div>
  )
}
