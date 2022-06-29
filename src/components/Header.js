import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { MdKeyboardVoice } from 'react-icons/md';
import { IoMdArrowBack } from 'react-icons/io';
import { RiVirusFill } from 'react-icons/ri';

function Header() {
  return (
    <nav>
      <div className="left-nav">
        <Link to="/">
          <IoMdArrowBack className="icon" size={30} />
        </Link>
        <RiVirusFill size={30} />
        <h2>Covid Stats</h2>
      </div>
      <div className="right-nav">
        <MdKeyboardVoice className="icon" size={30} />
        <AiOutlineInfoCircle className="icon" size={30} />
      </div>
    </nav>
  );
}

export default Header;
