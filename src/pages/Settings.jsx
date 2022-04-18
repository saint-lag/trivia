/* eslint-disable indent */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Settings extends Component {
  render() {
    const { history } = this.props;
    const mainStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    border: '1px solid red',
    flexDirection: 'row',
  };
    const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    height: '220px',
  };
    return (
      <>
        <Header />
        <h1 data-testid="settings-title">Settings</h1>
        <main style={ mainStyle }>
          <section style={ sectionStyle }>
            <h2>Game</h2>

            <div className="gap-3">
              <h3 className="">Difficulty</h3>
              <button
                className="btn btn-success   mx-1"
                type="button"
                data-testid="btn-settings"
                onClick={ () => history.push('/') }
              >
                Easy
              </button>
              <button
                className="btn btn-warning   mx-1"
                type="button"
                data-testid="btn-settings"
                onClick={ () => history.push('/') }
              >
                Medium
              </button>
              <button
                className="btn btn-danger   mx-1"
                type="button"
                data-testid="btn-settings"
                onClick={ () => history.push('/') }
              >
                Hard
              </button>
            </div>
            <div className="gap-3">
              <h3 className="">Game Mode</h3>
              <button
                style={ { backgroundColor: 'rgb(90, 24, 154)',
    color: 'white' } }
                className="btn btn-default   mx-1"
                type="button"
                data-testid="btn-settings"
                onClick={ () => history.push('/') }
              >
                True or False
              </button>
              <button
                style={ { backgroundColor: 'rgb(90, 24, 154)',
      color: 'white' } }
                className="btn btn-default   mx-1"
                type="button"
                data-testid="btn-settings"
                onClick={ () => history.push('/') }
              >
                Multiple choice
              </button>
            </div>
          </section>
          <section style={ sectionStyle }>
            <h2>Video</h2>
            <button
              style={ { backgroundColor: 'rgb(90, 24, 154)',
      color: 'white' } }
              className="btn btn-default   mx-1"
              type="button"
              data-testid="btn-settings"
              onClick={ () => history.push('/') }
            >
              Multiple choice
            </button>
            <button
              style={ { backgroundColor: 'rgb(90, 24, 154)',
      color: 'white' } }
              className="btn btn-default mx-1"
              type="button"
              data-testid="btn-settings"
              onClick={ () => history.push('/') }
            >
              Multiple choice
            </button>
          </section>
          <section style={ sectionStyle }>
            <h2>Audio</h2>
            <button
              style={ { backgroundColor: 'rgb(90, 24, 154)',
      color: 'white' } }
              className="btn btn-default mx-1"
              type="button"
              data-testid="btn-settings"
              onClick={ () => history.push('/') }
            >
              Multiple choice
            </button>
            <button
              style={ { backgroundColor: 'rgb(90, 24, 154)',
      color: 'white' } }
              className="btn btn-default mx-1"
              type="button"
              data-testid="btn-settings"
              onClick={ () => history.push('/') }
            >
              Multiple choice
            </button>
          </section>
        </main>

        <footer style={ { border: '1px solid green' } }>
          <button
            style={ { backgroundColor: '#0077b6' } }
            className="btn btn-primary btn-lg  mx-1"
            type="button"
            data-testid="btn-settings"
            onClick={ () => history.push('/') }
          >
            Voltar à Login
          </button>
          <button
            style={ { backgroundColor: '#0077b6' } }
            className="btn btn-primary btn-lg  mx-1"
            type="button"
            data-testid="btn-settings"
            onClick={ () => history.push('/ranking') }
          >
            Ranking
          </button>
        </footer>
      </>
    );
  }
}

Settings.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect()(Settings);
