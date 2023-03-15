export default function TimerControls() {
  return (
    <div className="flex text-sm font-medium border-none rounded-md md:text-lg bg-zinc-900">
      <button className="px-6 border-2 border-r-2 bg-zinc-100 border-zinc-900 py-1.5 rounded-l-md translate-y-[-0.2em] active:hover:-translate-y-0">
        Focus
      </button>

      <button className="px-6 border-2 bg-zinc-100 border-zinc-900 py-1.5 translate-y-[-0.2em] active:hover:-translate-y-0">
        Short Break
      </button>

      <button className="px-6 border-2 border-r-2 bg-zinc-100 border-zinc-900 py-1.5 rounded-r-md translate-y-[-0.2em] active:hover:-translate-y-0">
        Long Break
      </button>
    </div>
  )
}
