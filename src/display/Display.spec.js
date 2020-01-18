// Test away!
import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Display from './Display'

// Clean up after each test
afterEach(cleanup)

it('adding Display snapshot', () => {
    const wrapper = render(<Display />)

    expect(wrapper.asFragment()).toMatchSnapshot();
})

it('when `unlocked` or `open` use the `green-led` class', () => {
    const { getByText } = render(<Display />)

    expect(getByText(/unlocked/i)).toHaveClass('green-led');

    expect(getByText(/open/i)).toHaveClass('green-led');
})
