import React from 'react';
import SearchBar from './components/SearchBar';
import unsplash from './api/unsplash';
import ImageList from './components/ImageList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      images:[]
    };
  }

   onSearchSubmit = async (term)  => {
    const response = await unsplash.get('/search/photos',{
      params: {
        query: term
      },
    });

    this.setState({ images: response.data.results });
  }

  render(){
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h2>Total images found : {this.state.images.length}</h2>
        <ImageList images = {this.state.images}/>
      </div>
    );
 }
}

export default App;
