'use strict'

export function pick (obj, keys) {
  const r = {}
  keys.forEach((key) => {
    r[key] = obj[key]
  })
  return r
}
