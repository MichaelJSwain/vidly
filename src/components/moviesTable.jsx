import React, { Component } from 'react';
import Table from './common/table';
import Like from './common/like';


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
            <Table
                columns={this.columns}
                data={movies}
                sortColumn={sortColumn}
                onSort={onSort}
            />
        );
    }
}

export default MoviesTable;