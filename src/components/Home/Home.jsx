import React from 'react';
import axios from 'axios';
import { Container } from './style';

const API = axios.create({
  baseURL : 'https://api.themoviedb.org/3/movie' 
})
class Home extends React.Component {
  state = {
    movies: []
  }

  getMovies = async () => {
    const response = await API.get('popular?api_key=cb885258165379dc7088a315eb854018&language=pt-BR&page=1')
      console.log(response);

    const allMovie = response.data.results.map(item => {
      return{
        imagem: `https://image.tmdb.org/t/p/w300/${item.poster_path}`,
        titulo : item.title,
        nota: item.vote_average
      }
    })
    this.setState({movies: allMovie})
    console.log(response.data.results)
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return(
      <Container>
        <header>
          <div>
            <h1>Olá, viewer!</h1>
            <p> Seja bem vindo(a) ao BeoziTV, assista séries e filmes de onde você estiver!</p>
          </div>
        </header>
        <main>
          <h2> Populares </h2>
          <div>
            {this.state.movies.slice(0, 5).map(item => (
              <div>
                <img src={item.imagem} alt={item.titulo} />
                <h3> {item.titulo}  </h3>
              </div>
            ))}
          </div>
        </main>
      </Container>
    )
  }

}
export default Home;