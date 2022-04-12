import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Settings extends Component {
  render() {
    return (
      <>
        <Header />
        <h1 data-testid="settings-title">Configurações</h1>
      </>
    );
  }
}

export default connect()(Settings);
