/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  const texts = document.getTexts()
  const third = texts.get(2)
  const range = selection.merge({
    anchorKey: third.key,
    anchorOffset: 0,
    focusKey: third.key,
    focusOffset: 0
  })

  return state
    .change()
    .splitBlockAtRange(range)
}

export const input = (
  <state>
    <document>
      <paragraph>word
        <emoji></emoji>word
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>word
        <emoji></emoji>
      </paragraph>
      <paragraph>word</paragraph>
    </document>
  </state>
)
