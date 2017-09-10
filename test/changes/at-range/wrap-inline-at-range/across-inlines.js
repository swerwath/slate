/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  const texts = document.getTexts()
  const second = texts.get(1)
  const fourth = texts.get(3)
  const range = selection.merge({
    anchorKey: second.key,
    anchorOffset: 2,
    focusKey: fourth.key,
    focusOffset: 2
  })

  return state
    .change()
    .wrapInlineAtRange(range, 'hashtag')
}

export const input = (
  <state>
    <document>
      <paragraph>
        <link>word</link>
        <link>another</link>
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>
        <link>wo</link>
        <hashtag>
          <link>rd</link>
          <link>an</link>
        </hashtag>
        <link>other</link>
      </paragraph>
    </document>
  </state>
)
