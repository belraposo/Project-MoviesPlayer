import React from 'react';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Shows from './components/Shows/Shows';
import GlobalStyle from './GlobalStyle';
import axios from 'axios';
import { Container } from './style';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const API = axios.create({
  baseURL : 'https://api.themoviedb.org/3' 
});
class App extends React.Component {
  state = {
    filtro: '',
    filmes: [],
    series: [],
    filmesFiltrados: [],
    seriesFiltradas: []
  }

  getAll = async (type, name, state) => {
    const response = await API.get(`/${type}/popular?api_key=cb885258165379dc7088a315eb854018&language=pt-BR&page=1`)
      console.log(response);

    const Data = response.data.results.map(item => {
      return{
        titulo : item[name],
        sinopse: item.overview,
        imagem: `https://image.tmdb.org/t/p/w300/${item.poster_path}`,
        nota: item.vote_average,
        votos: item.vote_count,
        data: item.release_date
      }
    })
    this.setState({
      [state] : Data
    })
  }
  
  componentDidMount() {
    this.getAll('tv', 'name', 'series')
    this.getAll('movie', 'title', 'filmes')
    this.getAll('tv', 'name', 'seriesFiltradas')
    this.getAll('movie', 'title', 'filmesFiltrados')
  }
  
  Search = (event) => {
    const text = event.target.value.toLowerCase()
    console.log(this.state)
    this.setState({
      filtro: text,
      filmesFiltrados: this.state.filmes.filter(item => item.titulo.toLowerCase().includes(text)),
      seriesFiltradas: this.state.series.filter(item => item.titulo.toLowerCase().includes(text))
    }) 
  }

  render() {
    console.log(window.location)
    return(
      <Container>
      <GlobalStyle />
      <Router>
        <nav>
          <h2> BeoziTV </h2>
          <div className='box-links'>
            <Link to='/'> <h4> HOME </h4> </Link>
            <Link to='/movies'> <h4> FILMES </h4> </Link>
            <Link to='/shows'> <h4> SÉRIES </h4> </Link>
          </div>
          <input onChange={this.Search} value={this.state.filtro} type='text' placeholder='Buscar: séries e filmes'/>
        </nav>
        <Routes>
          <Route path='/shows' element={<Shows shows={this.state.seriesFiltradas}/>} />
          <Route path='/movies' element={<Movies movies={this.state.filmesFiltrados}/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
      </Container>
    )
  }

}

export default App;
