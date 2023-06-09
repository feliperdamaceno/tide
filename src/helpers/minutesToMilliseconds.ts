export default function minutesToMilliseconds(minutes: number): number {
  const SECONDS = 60
  const MILLISECONDS = 1000
  return minutes * SECONDS * MILLISECONDS
}
