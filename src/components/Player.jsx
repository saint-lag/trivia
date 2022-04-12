import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Player extends React.Component {
  render() {
    const { name, score, picture } = this.props;
    return (
      <div>
        <img src={ picture } data-testid="header-profile-picture" alt={ name } />
        <span data-testid="header-player-name">{name}</span>
        <span data-testid="header-score">{score}</span>
      </div>
    );
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.player.name,
  picture: state.player.picture,
  score: state.player.score,
});

export default connect(mapStateToProps, null)(Player);
