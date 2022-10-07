import React from 'react';
import {motion} from "framer-motion"
import styled from "@emotion/styled";


const StyledButton = styled(motion.button)`
  padding: 10px;
  background: #CD104D;
  border-radius: 25px;
  border: none;
  box-shadow: azure;
  width: 130px;
  margin-top: 10px;
  font-weight: bold;
  cursor: pointer;

`

function Button(props) {

    return (
        <StyledButton
            whileHover={{scale: 1.4}}
            whileTap={{scale: 0.9}}
        >
            {props.title}
        </StyledButton>
    );
}

export default Button;