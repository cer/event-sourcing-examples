import invariant from 'invariant'


export default function defineActionTypes(obj) {
  const result = {}

  for (let [namespace, value] of Object.entries(obj)) {
    let types = value.trim().split(/\s+/)
    const namespaceTypes = {}

    invariant(
      /^[A-Z][A-Z0-9_]*$/.test(namespace),
      "Namespace names must start with a capital letter, and be composed entirely of capital letters, numbers, and the underscore character."
    )
    invariant(
      (new Set(types)).size == types.length,
      "There must be no repeated action types passed to defineActionTypes"
    )

    for (let type of types) {
      invariant(
        /^[A-Z][A-Z0-9_]*$/.test(type),
        "Types must start with a capital letter, and be composed entirely of capital letters, numbers, and the underscore character."
      )

      namespaceTypes[type] = `@@app/${namespace}/${type}`
    }

    result[namespace] = namespaceTypes
  }

  return result
}
