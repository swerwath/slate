/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  const nodeToBeFocused = document.nodes.first()
  return state
    .change()
    .collapseToEndOf(nodeToBeFocused)
    .deleteBackward()
}

export const input = (
  <state>
    <document>
      <paragraph></paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph></paragraph>
    </document>
  </state>
)
