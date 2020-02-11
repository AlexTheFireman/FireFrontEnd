import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const createMovie = (time: String, movieName: String, genre: String, rate: number, country: String) =>
    ({ time, movieName, genre, rate, country });

const rows = [
    createMovie('10:00', 'Марафон желаний', 'Мелодрамма', 4.5, 'Россия'),
    createMovie('11:40', 'Ледяная принцесса', 'Мультфильм', 5.1, 'Германия, Канада'),
    createMovie('12:15', 'Под водой', 'Ужасы', 6.2, 'США'),
    createMovie('14:00', 'Кома', 'Фантастика', 4.7,'Россия'),
    createMovie('15:40', 'Маленькие женщины', 'Мелодрама, Драма', 8.1, 'США'),
];

export default function App() {
  const classes = useStyles();

  return (
        <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Время показа</TableCell>
              <TableCell align="centre">Название фильма</TableCell>
              <TableCell align="centre">Жанр</TableCell>
              <TableCell align="centre">Рейтинг</TableCell>
              <TableCell align="centre">Страна</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.time}>
                  <TableCell  component="th" scope="row" >
                      {row.time}
                  </TableCell>
                  <TableCell align="centre">{row.movieName}</TableCell>
                  <TableCell align="centre">{row.genre}</TableCell>
                  <TableCell align="centre">{row.rate}</TableCell>
                  <TableCell align="centre">{row.country}</TableCell>
              </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}