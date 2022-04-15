import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import '../App.css';

class Ranking extends React.Component {
  constructor() {
    super();
    this.state = {
      ranking: JSON.parse(localStorage.getItem('ranking')),
    };
  }

  // comp

  // loadGamesInfo = () => {
  //   this.setState({
  //     ranking: JSON.parse(localStorage.getItem('ranking')),
  //   });
  // }

  render() {
    const { history } = this.props;
    const { ranking } = this.state;
    console.log(ranking);
    return (
      <>
        <Header />
        <h1 data-testid="ranking-title">Ranking</h1>
        <section className="ranking-section">
          {ranking
            .sort((a, b) => b.score - a.score)
            .map((game, index) => (
              <div className="mx-2" key={ `ranking${index}` }>
                <img src={ game.picture } alt={ `Foto do ${game.name}` } />
                <span data-testid={ `player-name-${index}` }>{game.name}</span>
                <span data-testid={ `player-score-${index}` }>{game.score}</span>
              </div>
            ))}
        </section>
        <button
          className="btn btn-primary ranking-back-to-home"
          type="button"
          data-testid="btn-go-home"
          onClick={ () => history.push('/') }
        >
          Voltar à Login
        </button>
      </>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Ranking;
