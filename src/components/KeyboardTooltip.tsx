// Components
import Keycap from './Keycap'

interface KeyboardTooltipProps {
  isOpen: boolean
}

export default function KeyboardTooltip({ isOpen }: KeyboardTooltipProps) {
  const hoverEffect = isOpen ? 'visible opacity-100' : 'invisible opacity-0'

  return (
    <section
      className={`absolute z-50 w-full max-w-xs px-3 py-1 text-sm transition-all duration-200 border-2 rounded-md right-4 top-13 bg-zinc-100 border-zinc-900 ${hoverEffect}`}
      aria-hidden={!isOpen}
    >
      <ul className="font-medium divide-y divide-zinc-900">
        <li className="flex items-center justify-between gap-2 py-2">
          <span>Play | Pause | Resume</span>
          <Keycap text="Space" />
        </li>
        <li className="flex items-center justify-between gap-2 py-2">
          <span>Reset</span>
          <Keycap text="Esc" />
        </li>
        <li className="flex items-center justify-between gap-2 py-2">
          <span>Focus</span>
          <Keycap text="1" />
        </li>
        <li className="flex items-center justify-between gap-2 py-2">
          <span>Short Break</span>
          <Keycap text="2" />
        </li>
        <li className="flex items-center justify-between gap-2 py-2">
          <span>Long Break</span>
          <Keycap text="3" />
        </li>
      </ul>
    </section>
  )
}
