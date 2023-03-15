// Components
import KeyboardTooltip from './KeyboardTooltip'

// Styles
import { BsKeyboard as InfoIcon } from 'react-icons/bs'

// Hooks
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, toggleIsOpen] = useState(false)

  return (
    <header className="hidden p-4 ml-auto text-center md:block">
      <button
        className="text-3xl transition-opacity cursor-help opacity-60 hover:opacity-100"
        onMouseOver={() => toggleIsOpen(true)}
        onMouseLeave={() => toggleIsOpen(false)}
      >
        <InfoIcon />
      </button>

      <KeyboardTooltip isOpen={isOpen} />
    </header>
  )
}
