import './OneOrTwoColumnLayout.less'

import React, {PropTypes} from 'react'
import { pacomoTransformer } from '../utils/pacomo'


const OneOrTwoColumnLayout = ({
  left,
  right,
}) => 
  <div>
    <div className={{'left': true, 'left-open': left}}>
      {left}
    </div>
    <div className={{'right': true, 'right-open': right}}>
      {right}
    </div>
  </div>

OneOrTwoColumnLayout.propTypes = {
  left: PropTypes.element,
  right: PropTypes.element,
}

export default pacomoTransformer(OneOrTwoColumnLayout)
