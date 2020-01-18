// Test away!
import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import Controls from './Controls'

// Clean up after each test
afterEach(cleanup)

it('adding Control snapshot', () => {
    const wrapper = render(<Controls/>)

    expect(wrapper.asFragment()).toMatchSnapshot();
})

it('cannot be closed or opened if it is locked', () => {
    const { getByText, getAllByRole } = render(<Controls />)

    fireEvent.click(getByText(/Lock Gate/i));

    expect(getByText(/close gate/i)).toBeDisabled;
})