import React from 'react';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Shows from './components/Shows/Shows';
import GlobalStyle from './GlobalStyle';
import { Container } from './style';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
class App extends React.Component {
  render() {
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
        </nav>
        <Routes>
          <Route path='/shows' element={<Shows/>} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
      </Container>
    )
  }

}

export default App;
