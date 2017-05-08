import React, { Component } from 'react';
// import Search from './components/Search';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import './css/App.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      artist: '',
      query: '',
      tracks: [],
      BASE_URL: 'https://api.spotify.com/v1/search?',
      ALBUM_URL: 'https://api.spotify.com/v1/artists',
      loader: false,
      notfound: false
    };
    this.search = this.search.bind(this);
    this.getData =this.getData.bind(this);
  };

  search () {
    let FETCH_URL = `${this.state.BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    console.log(FETCH_URL);
    fetch(FETCH_URL,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      if(json.artists.items.length > 0) {
        console.log(json);
        const artist = json.artists.items[0];
        this.setState({artist, loader: false});
        FETCH_URL = `${this.state.ALBUM_URL}/${artist.id}/top-tracks?country=us&`;
        fetch(FETCH_URL, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
          const { tracks } = json;
          this.setState({tracks, loader: false, notfound: false});
        })
      } else {
        this.setState({loader: false, notfound: true});
      }
    });
  }
  getData (e) {
    if (e.key === 'Enter') {
      this.setState({loader: true, notfound: false});
      this.search();
    }
  }

  render () {
    return (
      <div className='app'>
        <div> <h1 className='app-title'>Music Master</h1></div>
        <input
          className='search'
          type='text'
          onChange={event => {this.setState({query: event.target.value })}}
          onKeyPress={this.getData}
          placeholder='Search for Music...'
          />
        {
          this.state.loader ? <div className='loader'>Loading...</div> : ''
        }
        {
          this.state.notfound ? <div className='notfound'>Nothing found</div> : ''
        }
        {
          this.state.artist && !this.state.loader && !this.state.notfound ?
          <div>
            <Profile artist={this.state.artist}/>
            <Gallery
              className='gallery'
              tracks={this.state.tracks}
            />
          </div> :
          <div></div>
        }
      </div>
    );
  };
};
export default App;
