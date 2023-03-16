export default function timeFormatter(time: number): string {
  const date = new Date(time)
  const parts = [date.getMinutes(), date.getSeconds()]
  return parts.map((time: number) => String(time).padStart(2, '0')).join(':')
}
