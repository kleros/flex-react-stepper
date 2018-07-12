import expect from 'expect'
import React from 'react'
import { render } from 'react-dom'

import Stepper from '../src'

describe('ProductTable component', () => {
  let node
  beforeEach(() => {
    node = document.createElement('div')
  })

  it('Stepper', () => {
    render(
      <Stepper
        steps={['Title', 'Address PartyB', 'Payment', 'Email', 'Description']}
        activeStep={1}
      />,
      node
    )
    expect(node.textContent)
      .toContain('Title')
      .toContain('Address PartyB')
      .toContain('Payment')
      .toContain('Email')
      .toContain('Description')
  })
})
