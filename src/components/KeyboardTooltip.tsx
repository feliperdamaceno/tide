// Components
import Keycap from './Keycap'

interface KeyboardTooltipProps {
  showing: boolean
}

export default function KeyboardTooltip({ showing }: KeyboardTooltipProps) {
  const hoverEffect = showing ? 'visible opacity-100' : 'invisible opacity-0'

  return (
    <section
      className={`absolute z-50 w-full max-w-xs px-3 py-1 text-sm transition-all duration-200 border-2 rounded-md right-4 top-13 bg-zinc-100 border-zinc-900 ${hoverEffect}`}
      aria-hidden={!showing}
    >
      <ul className="font-medium divide-y-2 divide-zinc-900">
        <li className="flex items-center justify-between gap-2 py-2">
          <span>Start | Pause | Resume</span>
          <Keycap keyname="Space" />
        </li>
        <li className="flex items-center justify-between gap-2 py-2">
          <span>Reset</span>
          <Keycap keyname="Esc" />
        </li>
        <li className="flex items-center justify-between gap-2 py-2">
          <span>Focus</span>
          <Keycap keyname="1" />
        </li>
        <li className="flex items-center justify-between gap-2 py-2">
          <span>Short Break</span>
          <Keycap keyname="2" />
        </li>
        <li className="flex items-center justify-between gap-2 py-2">
          <span>Long Break</span>
          <Keycap keyname="3" />
        </li>
      </ul>
    </section>
  )
}
