import React from 'react';
import PropTypes from 'prop-types';

const Currency = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        d="M8.5 14.667A2.333 2.333 0 0010.833 17H13a2.5 2.5 0 000-5h-2a2.5 2.5 0 010-5h2.167A2.333 2.333 0 0115.5 9.333M12 5.5V7m0 10v1.5M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
        stroke="#111"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Currency.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Currency.defaultProps = {
  color: 'none',
  size: '24'
};

export default Currency;
