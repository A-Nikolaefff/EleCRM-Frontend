import React from 'react';
import Button from '@mui/material/Button';

const MyButton = ({children, ...props}) => {
    return (
        <Button variant="contained" {...props}>
            {children}
        </Button>
    );
};

export default MyButton;