import React from 'react';
import './header.css';
import LinkButton from "../button/linkbutton.jsx";
import styled from "@emotion/styled";
import {motion} from "framer-motion";
import {useLocation} from "react-router-dom";


const StyledButton = styled(motion.button)`
  padding: 10px;
  border-radius: 25px;
  border: none;
  box-shadow: azure;
  width: 130px;
  margin-top: 10px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;
`

const Header = () => {

    const location = useLocation();

    return (
        <div className='container'>
            <div className='logo'>
                <h1>WatchMovie</h1>
            </div>
            <nav>
                <ul>
                   <LinkButton title={'Home'} link={'/'}/>
                    <LinkButton title={'Movie'} link={'/movie'}/>
                    <LinkButton title={'Tv'} link={'/tv'}/>

                </ul>
            </nav>
        </div>
    );
};

export default Header;
