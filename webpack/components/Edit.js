import React, { Component } from 'react';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.showMovie = this.showMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { movie: {} };
  } 

  componentWillMount() {
    $.ajax({
      url: `/api/movies/${this.props.params.id}`,
      type: 'GET',
      dataType: 'JSON',
    }).done( movie => {
      this.setState({ movie }); 
    }).fail( data => {
      console.log(data);
    });
  }

  showMovie() {
    this.props.history.push(`/movies/${this.state.movie.id}`);
  }

  handleChange(e) {
    e.preventDefault();
    let title = this.refs.editTitle.value;
    let description = this.refs.editDesc.value;
    let year = this.refs.editYear.value;
    $.ajax({
      url: `/api/movies/${this.props.params.id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { movie: { title, description, year } }
    }).done( movie => {
      this.setState({ movie })
      this.props.history.push(`/movies/${this.props.params.id}`);
    })
  }

  render() {
		let { title, year, description, in_theaters } = this.state.movie;
    if(title) {
  		return(
  			<div className="row">
          <div className="col s12">
            <div className="card blue-grey darken-1">
              <form id='form' onSubmit={this.handleChange}>
                <div className="card-content white-text">
                  <input ref='editTitle' defaultValue={title} type="text" className="card-title" />
                  <input ref='editDesc' defaultValue={description} type='text' />
                  <p>Year: <input ref='editYear' defaultValue={year} type='text' /></p>
                  <p>In Theaters: { in_theaters ? 'Yes' : 'No' }</p>
              </div>
              <div className="card-action">
                <button className='btn success' type='submit'>Save</button>
              	<button className='btn red' onClick={this.showMovie}>Cancel</button>
              </div>
              </form>
            </div>
          </div>
        </div>
  		)
    } else {
      return(<div>Loading...</div>);
    }
	}
}
export default Edit;