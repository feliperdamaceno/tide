export default function clickSound() {
  const click = new Audio('/click.flac')
  click.preload = 'auto'
  click.pause()
  click.currentTime = 0
  click.play()
}
