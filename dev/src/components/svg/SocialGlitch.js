import * as React from "react"

function Glitch1(props) {
  return (
    <svg
      viewBox="0 0 349 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#2E2D2C"
        d="M0 69h238v60H0zM238 0h81v69h-81zM297 69h52v30h-52z"
      />
    </svg>
  )
}

function Glitch2(props) {
    return (
      <svg
        viewBox="0 0 349 103"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path fill="#2E2D2C" d="M94.27 0H349v104H94.27z" />
        <path fill="#2E2D2C" d="M0 0h114v62H0z" />
      </svg>
    )
  }

export { Glitch1, Glitch2 };



