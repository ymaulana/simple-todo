import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <>
      <header className='header mb-5 flex items-center justify-between'>
        <h1 className='text-[30px] font-semibold'>{title}</h1>
        <Button
          color={
            showAdd
              ? 'hover:bg-red-500 bg-red-200'
              : 'hover:bg-slate-500 bg-slate-200'
          }
          onClick={onAdd}
          text={!showAdd ? 'Add' : 'Close'}
        />
      </header>
    </>
  );
};

Header.defaultProps = {
  title: 'Task Daily',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
