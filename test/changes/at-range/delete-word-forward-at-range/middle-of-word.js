/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  const texts = document.getTexts()
  const first = texts.first()
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: 1,
    focusKey: first.key,
    focusOffset: 1,
  })

  return state
    .change()
    .deleteWordForwardAtRange(range)
}

export const input = (
  <state>
    <document>
      <paragraph>one two three</paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>o two three</paragraph>
    </document>
  </state>
)
