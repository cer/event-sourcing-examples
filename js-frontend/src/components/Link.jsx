import React, {PropTypes} from 'react'
import ROUTES from '../constants/ROUTES'


const Link = ({
  name,
  options,
  children,
  ...props
}) =>
  <a {...props} href={'#'+ROUTES.generate(name, options)}>{children}</a>

Link.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.object,
  children: PropTypes.node.isRequired,
}

export default Link
