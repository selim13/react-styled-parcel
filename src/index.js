import { render } from 'react-dom';
import React from 'react';
import styled from 'styled-components';

const Hello = styled.p`
  color: #c00;
  font-size: 13px;
`;

class App extends React.Component {
  static props = {
    testProp: 1,
  };

  state = { stuff: 'state' };

  render() {
    const { stuff } = this.state;
    return (
      <div>
        <Hello>
Welcome to react
        </Hello>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
