/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  const { selection } = state

  const range = selection.merge({
    anchorKey: 'b',
    anchorOffset: 0,
    focusKey: 'b',
    focusOffset: 3
  })

  change
    .select(range)
    .splitDescendantsByKey('a', 'b', 2)


  const second = next.document.getTexts().last()

  assert.deepEqual(
    next.selection.toJS(),
    range.merge({
      focusKey: second.key,
      focusOffset: 1
    }).toJS()
  )
}

export const input = (
  <state>
    <document>
      <paragraph>word</paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>wo</paragraph>
      <paragraph>rd</paragraph>
    </document>
  </state>
)
