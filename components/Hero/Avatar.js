import * as React from 'react';

const Avatar = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 500 500'
    style={{
      opacity: 1
    }}
    {...props}
  >
    <image
      x='0'
      y='0'
      width='100%'
      height='100%'
      clipPath='url(#shape)' // Here, 'clip-path' is changed to 'clipPath'
      href='https://troovr.com/img/port_500.png'
      preserveAspectRatio='none'
    ></image>
    <clipPath id='shape'>
      <path
        id='blob'
        // Your path data remains the same
      ></path>
    </clipPath>
  </svg>
);

export default Avatar;