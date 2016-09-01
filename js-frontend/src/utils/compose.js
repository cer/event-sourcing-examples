export default function compose(...funcs) {
  const innerFunc = funcs.pop();
  return (...args) => funcs.reduceRight((composed, f) => f(composed), innerFunc(...args))
}
