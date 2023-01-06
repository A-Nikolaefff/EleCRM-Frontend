import React from 'react';
import {Box, styled} from "@mui/material";

const StyledBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    background-color: white;
    border: 1px solid #000;
    padding: 50px;
    box-shadow: white;
`;

export default function StyledModalBox({children}) {
    return (
        <StyledBox>
            {children}
        </StyledBox>
    );
};
