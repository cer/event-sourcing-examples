import invariant from 'invariant'

export const TODO_DEFINE = Symbol('Define property');

export const defineActionType = (obj) => {
  const result = Object.keys(obj).reduce((memo, namespace) => {
    const value = obj[namespace];
    let types = [];
    const namespaceTypes = {};

    if (typeof value == 'string') {
      types = value.trim().split(/\s+/);
    } else {
      types = Object.keys(value)
        .filter((key) => value[key] === TODO_DEFINE);
    }

    invariant(
      /^[A-Z][A-Z0-9_]*$/.test(namespace),
      "Namespace names must start with a capital letter, and be composed entirely of capital letters, numbers, and the underscore character."
    );

    invariant(
      (new Set(types)).size == types.length,
      "There must be no repeated action types passed to defineActionTypes"
    );

    types.forEach(t => {
      invariant(
        /^[A-Z][A-Z0-9_]*$/.test(t),
        "Types must start with a capital letter, and be composed entirely of capital letters, numbers, and the underscore character."
      );
      namespaceTypes[t] = `@@app/${namespace}/${t}`;
    });

    memo[namespace] = namespaceTypes;

    return memo;
  }, {});

  return result;

};

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
