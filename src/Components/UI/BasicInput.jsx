import React from 'react';
import {Input, styled} from "@mui/material";

const StyledInput = styled(Input)(props => ({
    padding: '5px 15px',
    margin: '5px 0',
    border: `1px solid teal`,
}))

const BasicInput = (props) => {
    return (
        <StyledInput {...props}/>
    );
};

export default BasicInput;