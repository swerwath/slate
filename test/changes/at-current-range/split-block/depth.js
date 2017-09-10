/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  const texts = document.getTexts()
  const first = texts.first()
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: 2,
    focusKey: first.key,
    focusOffset: 2
  })

  change
    .select(range)
    .splitBlock(Infinity)

  const updated = next.document.getTexts().last()

  assert.deepEqual(
    next.selection.toJS(),
    range.collapseToStartOf(updated).toJS()
  )
}

export const input = (
  <state>
    <document>
      <paragraph>
        <paragraph>
          <paragraph>word</paragraph>
        </paragraph>
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>
        <paragraph>
          <paragraph>wo</paragraph>
        </paragraph>
      </paragraph>
      <paragraph>
        <paragraph>
          <paragraph>rd</paragraph>
        </paragraph>
      </paragraph>
    </document>
  </state>
)
