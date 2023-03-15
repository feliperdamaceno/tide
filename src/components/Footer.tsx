export default function Footer() {
  return (
    <footer className="font-medium text-sm text-center py-6 border-t-2 border-zinc-900 mx-4">
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
