export function replace(into, item, position) {
  return [
    ...into.slice(0, position),
    item,
    ...into.slice(position + 1)
  ]
}
