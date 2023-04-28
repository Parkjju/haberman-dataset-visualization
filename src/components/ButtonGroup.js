import {
    Button,
    Checkbox,
    CircularProgress,
    FormControl,
    FormControlLabel,
    TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { Box, Wrapper } from './styled';
import { fetchGraphData, fetchPredictedData } from '../api';
import { useQuery } from 'react-query';
import { graphAction } from '../store';
import { useDispatch } from 'react-redux';

const ButtonGroup = () => {
    const [checked, setChecked] = useState(false);
    const [isSurvived, setIsSurvived] = useState(false);
    const dispatch = useDispatch();

    const [age, setAge] = useState(30);
    const [nbPosDetected, setNbPosDetected] = useState(0);
    const [operationYear, setOperationYear] = useState(60);

    const handleButtonTapped = () => {
        refetch();
    };
    const { isLoading, refetch } = useQuery(['graphData'], fetchGraphData, {
        onSuccess: (response) => {
            dispatch(graphAction.update(response.data.results));
        },
        refetchOnWindowFocus: false,
    });

    const predictQuery = useQuery(
        ['predictData', age, operationYear, nbPosDetected, isSurvived],
        fetchPredictedData,
        {
            onSuccess: (response) => {
                console.log(response);
            },
            refetchOnWindowFocus: false,
        }
    );

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
                <>
                    <Box>
                        <TextField
                            type='number'
                            id='outlined-basic'
                            label='Age'
                            variant='outlined'
                            sx={{
                                marginBottom: '20px',
                            }}
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <TextField
                            id='outlined-basic'
                            label='Operation year'
                            variant='outlined'
                            type='number'
                            value={operationYear}
                            onChange={(e) => setOperationYear(e.target.value)}
                        />
                    </Box>
                    <Box
                        style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}
                    >
                        <TextField
                            type='number'
                            id='outlined-basic'
                            label='Number of positive detected'
                            variant='outlined'
                            sx={{
                                marginBottom: '20px',
                            }}
                            value={nbPosDetected}
                            onChange={(e) => setNbPosDetected(e.target.value)}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isSurvived}
                                    label='생존여부'
                                    onChange={() => {
                                        setIsSurvived((prev) => !prev);
                                    }}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            }
                            label='생존 여부'
                        />
                    </Box>
                </>
            ) : null}

            {isLoading ? (
                <CircularProgress />
            ) : checked ? (
                <Button
                    sx={{ width: '30%', margin: '0px auto' }}
                    variant='contained'
                    onClick={() => {
                        predictQuery.refetch();
                        dispatch(
                            graphAction.add(predictQuery.data.data.results[0])
                        );
                    }}
                >
                    Append data
                </Button>
            ) : null}

            {isLoading ? (
                <CircularProgress />
            ) : checked ? null : (
                <Button
                    sx={{ width: '30%', margin: '0px auto' }}
                    variant='contained'
                    onClick={() => {
                        handleButtonTapped();
                    }}
                >
                    Select random Data
                </Button>
            )}
        </Wrapper>
    );
};

export default ButtonGroup;
