import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ text, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className={`${color} hover:${color} inline-block rounded-md border-none px-[20px] py-[10px] font-semibold text-slate-500 hover:text-slate-200`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
