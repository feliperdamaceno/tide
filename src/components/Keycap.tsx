interface KeycapProps {
  keyname: string
}

export default function Keycap({ keyname }: KeycapProps) {
  return (
    <div className="font-mono font-bold rounded-md bg-zinc-900">
      <span className="inline-block px-2 border rounded-md bg-zinc-100 py-0.5 translate-y-[-1px] border-zinc-900">
        {keyname}
      </span>
    </div>
  )
}
