/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  const texts = document.getTexts()
  const first = texts.get(0)
  const second = texts.get(1)
  const range = selection.merge({
    anchorKey: second.key,
    anchorOffset: second.text.length - 1,
    focusKey: second.key,
    focusOffset: second.text.length
  })

  change
    .select(range)
    .delete()

  const updated = next.document.getTexts().first()

  assert.deepEqual(
    next.selection.toJS(),
    range.merge({
      anchorKey: updated.key,
      anchorOffset: first.text.length,
      focusKey: updated.key,
      focusOffset: first.text.length
    }).toJS()
  )
}

export const input = (
  <state>
    <document>
      <paragraph>one
        <link>a</link>two
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>onetwo</paragraph>
    </document>
  </state>
)
