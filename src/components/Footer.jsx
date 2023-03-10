import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='mt-8 items-center text-center'>
      <p className='mb-2'>Copyright &copy; 2023</p>
      <Link to='/about'>About</Link>
    </footer>
  );
};

export default Footer;
