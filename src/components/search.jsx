import React from 'react';
import styled from "@emotion/styled";
import {FcSearch} from 'react-icons/fc'
import Button from "./button/button.jsx";

import {motion} from "framer-motion";

const Input = styled.input`
 
  width: 50%;
  height: 40px;
  border-radius: 20px;
  outline: none;
  transition: ease-in-out, width .35s ease-in-out;
  border: 3px solid white;
  text-align: center;
  font-weight: bold;
  
;
  &:focus {
    border: 3px solid #31C6D4;
    width: 70%;

  }

  &::placeholder {
    padding: 10px;
    font-weight: bold;
    font-size: large;
  }
`;

const Holder = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(motion.button)`
  padding: 10px;
  border-radius: 25px;
  border: none;
  background: orangered;
  width: 130px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;
`


function SearchInput({handleSearch, inputRef}) {
    return (
        <Holder>
            <Input placeholder='search' ref={inputRef}/>
            <FcSearch color="white" size={30} style={{
                position: 'relative',
                right: '40px'
            }}/>

            <StyledButton
                onClick={handleSearch}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}>
                {'Search'}
            </StyledButton>
        </Holder>

    );
}

export default SearchInput;