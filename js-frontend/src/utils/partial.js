export default function partial(fn, ...firstArgs) {
  return (...args) => fn(...firstArgs, ...args)
}
