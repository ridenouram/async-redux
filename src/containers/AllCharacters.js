import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCharactersLoading, getCharactersError } from '../selectors/characterSelectors';
import Characters from '../components/Characters';
import { fetchCharacters } from '../actions/characterActions';
import { getCharacters } from '../selectors/characterSelectors';

class AllCharacters extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired,
    error: PropTypes.object,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    if(this.props.loading) {
      return <h1>loading loading loading...</h1>
    }
    return <Characters characters={this.props.characters} />
  }
}

const mapStateToProps = state => ({
  characters: getCharacters(state),
  loading: getCharactersLoading(state),
  error: getCharactersError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);

