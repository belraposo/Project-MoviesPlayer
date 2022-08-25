import React from 'react';
import { Container } from './style';

class Series extends React.Component {

  render() {
    return (
      <Container>
        <h1 onClick={this.getSeries}> Séries </h1>
          <div className='box-serie'>
            {this.props.shows.map(item => (
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

export default Series;
