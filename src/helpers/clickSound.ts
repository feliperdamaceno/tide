export default function clickSound(): void {
  const click = new Audio('/click.flac')
  click.preload = 'auto'
  click.pause()
  click.currentTime = 0
  click.play()
}
