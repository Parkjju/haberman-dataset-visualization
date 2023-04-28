import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { Box, Wrapper } from './styled';

const ButtonGroup = () => {
    const [checked, setChecked] = useState(false);
    return (
        <Wrapper>
            <FormControl>
                <FormControlLabel
                    sx={{ margin: '0px auto' }}
                    label='데이터 추가하기'
                    control={
                        <Checkbox
                            checked={checked}
                            label='데이터 추가하기'
                            onChange={() => {
                                setChecked((prev) => !prev);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                />
            </FormControl>
            {checked ? (
                <Box
                    onClick={(e) => {
                        console.log(e);
                    }}
                >
                    <TextField
                        type='number'
                        id='outlined-basic'
                        label='Age'
                        variant='outlined'
                        sx={{
                            marginBottom: '20px',
                        }}
                    />
                    <TextField
                        id='outlined-basic'
                        label='Operation year'
                        variant='outlined'
                        type='number'
                    />
                </Box>
            ) : null}

            {checked ? (
                <Button
                    sx={{ width: '30%', margin: '0px auto' }}
                    variant='contained'
                    onClick={(e) => {
                        console.log('Submitted!');
                    }}
                >
                    Append data
                </Button>
            ) : null}
            {checked ? null : (
                <Button
                    sx={{ width: '30%', margin: '0px auto' }}
                    variant='contained'
                    onClick={(e) => {
                        console.log('Submitted!');
                    }}
                >
                    Select random Data
                </Button>
            )}
        </Wrapper>
    );
};

export default ButtonGroup;
