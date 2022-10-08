import React from 'react';
import styled from "@emotion/styled";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

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


const LinkButton = ({link,title}) => {
    return <>
        <Link to={link}>
            <StyledButton
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}>
                {title}
            </StyledButton>
        </Link>
    </>
}
export default LinkButton;