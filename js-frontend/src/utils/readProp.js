/**
 * Created by andrew on 11/03/16.
 */
export default function read(src, path = '', defaultVal = null) {
  const [pathItem = null, ...rest] = path.split('.');

  if (pathItem === null ) {
    return src || defaultVal;
  } else if (rest.length === 0) {
    if (!src) { return defaultVal; }
    return src[pathItem] || defaultVal;
  }

  if (!src) { return defaultVal; }
  return read(src[pathItem], rest.join('.'), defaultVal);
}