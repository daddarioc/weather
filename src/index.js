import React from'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // this is functionally equivalent to constructor initilization
  state = { lat: null, errorMessage: '' };

  /* Before 'cleanup' and condensing things
  componentDidMount() {
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
*/
  //after cleanup
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('component was just updated and re-rendered');
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay latitude={ this.state.lat }/>
    }

    return <Spinner  />;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);