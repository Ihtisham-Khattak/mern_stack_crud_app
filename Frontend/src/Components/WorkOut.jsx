import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from '@material-ui/core/TablePagination';

const columns = [
  { id: 'title',  label: 'Title',  minWidth: 170 },
  { id: 'repeat', label: 'Repeat', minWidth: 100 },
  { id: 'load',   label: 'Load',   minWidth: 100 },
  { id: 'action', label: 'Action', minWidth: 100 }
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const WorkOut = ({ workout }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          
          <TableBody>
          {workout.length>0 &&
            workout.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((workouts) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={workout.code}>
                <TableCell component="th" scope="row">
                  {workouts.title}
                </TableCell>
                <TableCell align="left">{workouts.repeat}</TableCell>
                <TableCell align="left">{workouts.load}</TableCell>
              </TableRow>
            ))}
        </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={workout.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
export default WorkOut