import React from 'react';
import './App.css';

function createMovie(time: String, movieName: String, genre: String, rate: number, country: String) {
    return { time, movieName, genre, rate, country };
}

const movies = [
    createMovie('10:00', 'Марафон желаний', 'Мелодрамма', 4.5, 'Россия'),
    createMovie('11:40', 'Ледяная принцесса', 'Мультфильм', 5.1, 'Германия, Канада'),
    createMovie('12:15', 'Под водой', 'Ужасы', 6.2, 'США'),
    createMovie('14:00', 'Кома', 'Фантастика', 4.7,'Россия'),
    createMovie('15:40', 'Маленькие женщины', 'Мелодрама, Драма', 8.1, 'США'),
];

export default function App () {

   const body = movies.map((movie, i) => {
        return <tr key={i}>
            <td>{movie.time}</td>
            <td>{movie.movieName}</td>
            <td>{movie.genre}</td>
            <td>{movie.rate}</td>
            <td>{movie.country}</td>
        </tr>
    });

    return (
    <table class="table">
        <thead class="thead-inverse">
            <tr>
                <th>Время показа</th>
                <th>Название</th>
                <th>Жанр</th>
                <th>Рейтинг</th>
                <th>Страна</th>
            </tr>
        </thead>
        <tbody>
            {body}
        </tbody>
    </table>
    )
}
