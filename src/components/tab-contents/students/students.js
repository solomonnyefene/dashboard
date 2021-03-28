import React from 'react';
import { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { Pagination } from 'antd';


import paginate from './paginate'
import getPageData from './getPageData'

// ----component---
// import Pagination from './pagination'

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



// export function getPageData(data, currentPage, pageSize){
//   const paginationData = paginate(data, currentPage, pageSize);
//   // console.log()
//   return { totalCount: data.length, data: paginationData }
// }


export default function Students() {
  const classes = useStyles();
  const data = [
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Kelvine', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Paaul', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vano', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'John', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Patrick', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:1, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},
    {id:2, name:'Vansolo', country:'Ghana', email:'vansolo313@gmail.com', phone:'0549691947', avatar:''},

]


  const students = data.lenghth > 0 && data

  // -----for pagination--------------------
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const handlePageChange = page => {
    setCurrentPage(page);
  }



  const { totalCount, list } = getPageData(data, currentPage, pageSize);

  console.log('LESSSSST', list)

  return (
      <Typography>
          <div style={{marginTop:'60px', color:'#0000', paddingLeft:'0px'}}> 
           <h3 >Students records</h3>
         </div>

          <Paper  style={{position:'absolute', right:'40px', top:'100px', padding:'5px'}}>
            <Pagination simple 
                defaultCurrent={1} total={data.length}
                onChange={handlePageChange} 
            />
          </Paper>
          
        <TableContainer component={Paper}
         style={{position:'absolute', width:'95%', marginTop:'40px'}}>
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
                {list.map((student) => (
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