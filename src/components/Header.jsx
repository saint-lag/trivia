import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../trivia.png';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    const { appLogoShaking } = this.props;
    return (
      <header className="App-header">
        <img
          src={ logo }
          className="App-logo"
          alt="logo"
        />
      </header>
    );
  }
}

Header.propTypes = {
  appLogoShaking: PropTypes.bool,
};

Header.defaultProps = {
  appLogoShaking: false,
};

const mapStateToProps = (state) => ({
  appLogoShaking: state.settings.video.appLogoShaking,
});

export default connect(mapStateToProps)(Header);
