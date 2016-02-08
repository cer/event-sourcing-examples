function uuidReplacer(c) {
  const r = Math.random()*16|0
  const v = c == 'x' ? r : (r&0x3|0x8)
  return v.toString(16)
}


export default function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, uuidReplacer)
}
