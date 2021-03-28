import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import data from './data'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Students() {
  const classes = useStyles();

  return (
      <Typography>
          <div style={{marginTop:'60px', color:'#0000', paddingLeft:'0px'}}> 
           <h3 >Students records</h3>
         </div>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Student Name</StyledTableCell>
                    <StyledTableCell align="right">Country</StyledTableCell>
                    <StyledTableCell align="right">Email</StyledTableCell>
                    <StyledTableCell align="right">Phone</StyledTableCell>
                    <StyledTableCell align="right">Avatar</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {data.map((student) => (
                    <StyledTableRow key={student.name}>
                    <StyledTableCell component="th" scope="row">
                        {student.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{student.country}</StyledTableCell>
                    <StyledTableCell align="right">{student.email}</StyledTableCell>
                    <StyledTableCell align="right">{student.phone}</StyledTableCell>
                    <StyledTableCell align="right">
                        <span className="genicons genicon-person"/>
                    </StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Typography>
  );
}