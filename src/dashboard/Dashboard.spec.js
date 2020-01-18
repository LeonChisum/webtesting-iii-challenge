// Test away
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import Dashboard from './Dashboard'


// Clean up after each test
afterEach(cleanup);

it('Controls and Display renders', () => {
    const wrapper = render(<Dashboard />)

    expect(wrapper.asFragment()).toMatchSnapshot();
})

it('defaults to unlocked and open',() => {
    const wrapper = render(<Dashboard />)

   const unlocked = wrapper.getByText(/unlocked/i)
   expect(unlocked).toBeDefined();
   
    const open = wrapper.getByText(/open/i)
    expect(open).toBeDefined();
}) 
