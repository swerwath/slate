/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  const texts = document.getTexts()
  const second = texts.get(1)
  const fifth = texts.get(4)
  const range = selection.merge({
    anchorKey: second.key,
    anchorOffset: 2,
    focusKey: fifth.key,
    focusOffset: 2
  })

  change
    .select(range)
    .addMark('bold')

  assert.deepEqual(next.selection.toJS(), range.toJS())
}

export const input = (
  <state>
    <document>
      <paragraph>
        <link>word</link>
      </paragraph>
      <paragraph>
        <link>another</link>
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>
        <link>wo
          <b>rd</b>
        </link>
      </paragraph>
      <paragraph>
        <link>
          <b>an</b>other
        </link>
      </paragraph>
    </document>
  </state>
)
