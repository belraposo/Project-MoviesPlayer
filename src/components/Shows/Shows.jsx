import React from 'react';
import axios from 'axios';
import { Container } from './style';

const API = axios.create({
  baseURL : 'https://api.themoviedb.org/3/tv' 
});
export default class Series extends React.Component {
  state = {
    series: []
  }

  getSeries = async () => {
    const response = await API.get('popular?api_key=cb885258165379dc7088a315eb854018&language=pt-BR&page=1')
      console.log(response);

    const allSeries = response.data.results.map(item => {
      return{
        titulo : item.name,
        sinopse: item.overview,
        imagem: `https://image.tmdb.org/t/p/w300/${item.poster_path}`,
        nota: item.vote_average,
        votos: item.vote_count,
        data: item.release_date
      }
    })
    this.setState({series: allSeries})
    console.log(response.data.results)
  }

  componentDidMount() {
    this.getSeries();
  }

  render() {
    return (
      <Container>
        <h1 onClick={this.getSeries}> Séries </h1>
          <div className='box-serie'>
            {this.state.series.map(item => (
            <div>
              <div className='box-about'>
                <h2> {item.titulo} </h2>
                <p> {item.sinopse ? item.sinopse : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt ante quam, quis semper felis tristique a. Phasellus sit amet eros vitae lectus accumsan auctor. Donec fringilla nec neque eu aliquam. Proin at suscipit nibh. Integer purus arcu, dignissim eu arcu placerat, ornare egestas augue. Donec nec eros massa. Aenean eu ornare odio. In hac habitasse platea dictumst. Nam tristique rutrum mollis. Suspendisse ut erat fermentum massa aliquam finibus. Nulla quis tellus ultrices, ullamcorper lacus eu, laoreet lectus.'} </p>
                <div className='box-rating'>
                  <p> Data de estreia: {item.data} </p>
                  <p> Avaliações: {item.nota} ({item.votos}) </p>
                </div>
              </div>
              <img src={item.imagem} alt={item.titulo} />
            </div>
           ))}</div>
      </Container>
    );
  }
}
