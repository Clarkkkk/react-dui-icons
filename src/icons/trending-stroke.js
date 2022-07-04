import React from 'react';
import PropTypes from 'prop-types';

const Trending = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      {...otherProps}
    >
      <path
        d="M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C3 20.24 3 19.96 3 19.4V3m17 5l-3.919 4.183c-.148.158-.223.237-.312.278a.5.5 0 01-.253.044c-.098-.01-.194-.06-.387-.16l-3.258-1.69c-.193-.1-.289-.15-.387-.16a.5.5 0 00-.253.044c-.09.04-.164.12-.312.278L7 15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Trending.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Trending.defaultProps = {
  // color: 'currentColor',
  color: '#111',
  size: '24'
};

export default Trending;
