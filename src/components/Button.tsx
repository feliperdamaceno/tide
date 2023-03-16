interface ButtonProps {
  render: (styles: string) => JSX.Element
}

export default function Button({ render }: ButtonProps) {
  const styles =
    'px-6 transition-transform duration-75 border-2 bg-zinc-100 border-zinc-900 py-1.5 translate-y-[-0.2em] active:translate-y-0'

  return render(styles)
}
