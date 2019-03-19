import React from'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //once this callback happens, our state is updated
        //which will then trigger a render
        this.setState({ lat: position.coords.latitude })
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    } else if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    } else {
      return <div>loading...</div>
    }
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);