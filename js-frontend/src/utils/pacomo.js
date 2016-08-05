import { withPackageName } from 'react-pacomo'


const {
  decorator: pacomoDecorator,
  transformer: pacomoTransformer,
} = withPackageName('app')


export {pacomoTransformer, pacomoDecorator}
