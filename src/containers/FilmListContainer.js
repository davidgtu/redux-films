import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilmsRequest } from '../actions';
import FilmList from '../components/FilmList'

class FilmListContainer extends Component {
  componentDidMount() {
    this.props.fetchFilmsRequest();
  }

  render() {
    const { films, loading } = this.props
    return (
      <div class="film__container">
        <FilmList
          films={films}
          loading={loading}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  films: state.films[0],
  loading: state.loading
})

export default connect(mapStateToProps, {fetchFilmsRequest: fetchFilmsRequest})(FilmListContainer);
