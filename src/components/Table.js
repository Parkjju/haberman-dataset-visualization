import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery } from 'react-query';
import { fetchSummary } from '../api';
import { useState, useEffect } from 'react';

export default function BasicTable() {
    const fetchResult = useQuery(['summary'], fetchSummary);
    const [graphData, setGraphData] = useState({});
    useEffect(() => {
        if (fetchResult.data) {
            setGraphData(fetchResult.data.data);
        }
    }, [fetchResult.isLoading]);

    return (
        <TableContainer component={Paper} sx={{ marginBottom: 5 }}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align='right'>Operation_year</TableCell>
                        <TableCell align='right'>Nb_pos_detected</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {graphData.results
                        ? Object.entries(graphData.results).map((row) =>
                              row[0] === 'cmp to' ? null : (
                                  <TableRow
                                      key={row[0]}
                                      sx={{
                                          '&:last-child td, &:last-child th': {
                                              border: 0,
                                          },
                                      }}
                                  >
                                      <TableCell component='th' scope='row'>
                                          {row[0]}
                                      </TableCell>
                                      {row[1].map((data) => (
                                          <TableCell align='right'>
                                              {data.toFixed(5)}
                                          </TableCell>
                                      ))}
                                  </TableRow>
                              )
                          )
                        : null}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
