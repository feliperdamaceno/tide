export default function Footer() {
  return (
    <footer className="py-6 mx-4 text-sm font-medium text-center border-t-2 border-zinc-900">
      <p className="">
        Tide © {new Date().getFullYear()}{' '}
        <a
          href="https://github.com/feliperdamaceno"
          target="_blank"
          rel="author"
        >
          feliperdamaceno
        </a>
      </p>
    </footer>
  )
}
