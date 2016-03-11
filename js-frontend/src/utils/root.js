/**
 * Created by andrew on 27/02/16.
 */
// even though this code shouldn't be used server-side, node will throw
// errors if "window" is used
export default Function("return this")() || (42, eval)("this");