export function createStampedObject(object) {
  Object.assign(object, { stamped: true });

  return object;
}

export function stampObject(object) {
  return { ...object, stamped: true };
}

export function getOwnProperty(object, property) {
  const value = object[property];
  const proto = Object.getPrototypeOf(object);

  return value === proto[property] ? undefined : value;
}
