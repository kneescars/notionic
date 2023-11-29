// https://react-svgr.com/playground/
import * as React from 'react';

const Logo = (props) => (
  <img
    src="favicon.png"
    alt="Your Logo"
    width="24"
    height="24"
    style={{
      opacity: 1,
      ...props.style // Include other styles if needed
    }}
    {...props}
  />
);

export default Logo;
