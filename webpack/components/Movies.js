import React, { Component } from 'react';
import { Link } from 'react-router';

class Movies extends Component {
	constructor(props) {
		super(props);
		this.state = { movies: [] };
	}

	componentWillMount() {
	 $.ajax({
	 	url: '/api/movies',
	 	type: 'GET',
	 	dataType: 'JSON'
	 }).done( movies => {
	 	this.setState({ movies });
	 }).fail( data => {
	 	console.log(data);
	 });
	}

	displayMovies() {
		let movies = this.state.movies.map( movie => {
			return(
				<li key={movie.id}> 
					<Link to={`/movies/${movie.id}`}> { movie.title } </Link>
				</li>
			)
		});
		return movies;
	}

	addMovie() {
		$.ajax({
			url: '/api/movies',
			type: 'POST',
			dataType: 'JSON',
			data: {}
		}).done( movie => {
			console.log(movie);
		})
	}

	render() {
		return (
			<div>
				<h1>All Movies</h1>
				<ul>
					{ this.displayMovies() }
				</ul>
			</div>
		)
	}
}
export default Movies;