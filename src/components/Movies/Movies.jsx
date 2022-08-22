import React from 'react';
import axios from 'axios';
import { Container } from './style';

const API = axios.create({
  baseURL : 'https://api.themoviedb.org/3/movie' 
})

class App extends React.Component {

  state = {
    movies: []
  }

  getMovies = async () => {
    const response = await API.get('popular?api_key=cb885258165379dc7088a315eb854018&language=pt-BR&page=1')
      console.log(response);
    const allMovie = response.data.results.map(item => {
      return{
        titulo : item.title,
        sinopse: item.overview,
        imagem: `https://image.tmdb.org/t/p/w300/${item.poster_path}`
      }
    })
    this.setState({movies: allMovie})
    console.log(response.data.results)
  }

  render() {
    return(
      <Container>
        <h1 onClick={this.getMovies}> Filmes </h1>
          <div className='box-filme'>
            {this.state.movies.map(item => (
            <div>
              <div>
                <h2> {item.titulo} </h2>
                <p> {item.sinopse} </p>
              </div>
              <img src={item.imagem} alt={item.titulo} />
            </div>
           ))}</div>
      </Container>
    )
  }

}

export default App;