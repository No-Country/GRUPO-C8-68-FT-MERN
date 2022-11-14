import * as React from 'react'

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    viewBox="0 0 30 30"
    {...props}
  >
    <path d="M15.004 3C8.374 3 3 8.373 3 15s5.375 12 12.004 12c10.01 0 12.265-9.293 11.326-14H15v4h7.738c-.89 3.448-4.012 6-7.738 6a8 8 0 0 1 0-16c2.009 0 3.84.746 5.244 1.969l2.842-2.84A11.96 11.96 0 0 0 15.004 3z" />
  </svg>
)

export default SvgComponent
