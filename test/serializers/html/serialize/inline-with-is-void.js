
/** @jsx sugar */

import React from 'react'
import sugar from '../../../helpers/sugar'

export const rules = [
  {
    serialize(obj, children) {
      if (obj.kind == 'block' && obj.type == 'paragraph') {
        return React.createElement('p', {}, children)
      }

      if (obj.kind == 'inline' && obj.type == 'emoji') {
        return React.createElement('img')
      }
    }
  }
]

export const input = (
  <state>
    <document>
      <paragraph>
        <emoji />
      </paragraph>
    </document>
  </state>
)

export const output = `
<p><img/></p>
`.trim()
