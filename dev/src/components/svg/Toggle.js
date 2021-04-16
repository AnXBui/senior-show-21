import React from "react";

function Toggle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 174 66"
      {...props}
    >
      <path
        fill="#3EC1DF"
        stroke="#4C4C43"
        strokeMiterlimit="10"
        d="M65.275 33.402c0 17.658-14.303 31.961-31.96 31.961-17.659 0-31.962-14.303-31.962-31.96 0-17.659 14.303-31.962 31.961-31.962 17.746 0 31.961 14.303 31.961 31.961z"
      ></path>
      <path
        fill="#2E2D2C"
        stroke="#4C4C43"
        strokeMiterlimit="10"
        d="M57.329 33.402c0 13.244-10.683 23.927-23.927 23.927-13.243 0-23.926-10.683-23.926-23.927 0-13.243 10.683-23.926 23.926-23.926C46.646 9.388 57.33 20.159 57.33 33.402z"
      ></path>
      <path
        fill="url(#paint0_linear)"
        stroke="#4C4C43"
        strokeMiterlimit="10"
        d="M172.992 33.402c0 17.658-14.303 31.961-31.961 31.961H33.402c17.658 0 31.961-14.303 31.961-31.96 0-17.659-14.303-31.962-31.96-31.962H141.03c17.658 0 31.961 14.303 31.961 31.961z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="223.55"
          x2="224.326"
          y1="68.944"
          y2="5.07"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3EC1DF"></stop>
          <stop offset="0.006" stopColor="#3FC1DF"></stop>
          <stop offset="0.263" stopColor="#7AC4D3"></stop>
          <stop offset="0.5" stopColor="#A8C6CA"></stop>
          <stop offset="0.709" stopColor="#C9C8C3"></stop>
          <stop offset="0.883" stopColor="#DDC9BF"></stop>
          <stop offset="1" stopColor="#E4C9BE"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Toggle;
