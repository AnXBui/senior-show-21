import * as React from "react"

function Bar(props) {
  return (
    <svg
      viewBox="0 0 52 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}
    >
      <path stroke="#2E2D2C" d="M1.5.5h47v117h-47z" />
      <path d="M1.36 118V0" stroke="#2E2D2C" strokeMiterlimit={10} />
      <path
        d="M9.996 118V0"
        stroke="#2E2D2C"
        strokeWidth={5}
        strokeMiterlimit={10}
      />
      <path
        d="M23.669 118V0"
        stroke="#2E2D2C"
        strokeWidth={10}
        strokeMiterlimit={10}
      />
      <path
        d="M41.804 118V0"
        stroke="#2E2D2C"
        strokeWidth={20}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default Bar
