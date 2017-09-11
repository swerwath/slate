/** @jsx h */

import { h } from 'slate-core-test-helpers'

export default function (change) {
  change.delete()
}

export const input = (
  <state>
    <document>
      <paragraph>
        <anchor />w<focus />ord
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>
        <cursor />ord
      </paragraph>
    </document>
  </state>
)