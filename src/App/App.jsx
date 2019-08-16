import React, { PureComponent } from 'react';
import './App.css';


class App extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      dailyPhoto: 'Loading...',
    };
    
    this._handleButtonClick = this._handleButtonClick.bind(this);
    this._copyLink = this._copyLink.bind(this);
  }
  
  _handleButtonClick() {
    this.setState({ dailyPhoto: 'Loading...' });
    
    fetch('https://source.unsplash.com/random')
      .then(res => this.setState({
        dailyPhoto: res.url,
      }));
  }
  
  _copyLink() {
    const link = document.getElementById('source');
    link.select();
    
    document.execCommand('copy');
    alert('Copied link to clipboard!');
  }

  componentDidMount() {
    fetch('https://source.unsplash.com/daily')
      .then(res => this.setState({
        dailyPhoto: res.url,
      }));
  }

  render() {
    // TODO: Add loading
    // TODO: Show URL for copying
    
    return (
      <main className="app">
        <img src={ this.state.dailyPhoto } className="backgroundPhoto" />

        <div className="overlay">
          <div className="text">
            <h1>Random Unsplash Photo</h1>
            <p>This is a simple React project I'm proud of. Click the below button to get another random photo from Unsplash.</p>
            
            <button className="random-photo" onClick={ this._handleButtonClick }>Get random photo</button>
            
            <br />

            <input
              id="source"
              onChange={ () => {} }
              value={ this.state.dailyPhoto }
              onClick={ this._copyLink }
              />
          </div>
        </div>
      </main>
    );
  }
}


export default App;
