import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import Like from './common/like';
import TableBody from './common/tableBody';


class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        {
            key: 'like',
            content: movie => <Like liked={movie.liked} onLike={() => this.props.onLike(movie)} />
        },
        {
            key: 'delete',
            content: movie => <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-group-sm">Delete</button>
        }
    ];

    render() {
        const { movies, onSort, sortColumn } = this.props;

        console.log(movies);

        return (
            <table className="table">
                <TableHeader
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
                <TableBody data={movies} columns={this.columns} />
            </table>
        );
    }
}

export default MoviesTable;