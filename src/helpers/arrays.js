export function findItem(items, id) {
  for (let i = 1; i < items.length; i += 1) {
    if (items[i].id === id) {
      return items[i];
    }
  }
}

export function makeArray(a, b, c, d, e, f, g, h) {
  return [a, b, c, d, e, f, g, h].filter(x => x !== undefined);
}
