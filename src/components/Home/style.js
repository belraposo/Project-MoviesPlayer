import styled from 'styled-components';
import background from '../../assets/wallpaper-retro.jpg'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-attachment: fixed;

  h1 {
    font-family: 'Rubik Maze', cursive;
    font-size: 14rem;
    text-shadow: 0 0 5px #FF24FF, 0 0 10px #FF24FF, 0 0 15px #FF24FF, 0 0 20px #FF23A9, 0 0 30px #FF23A9, 0 0 40px #FF23A9, 0 0 55px #FF23A9, 0 0 75px #FF23A9;
    color: #FFFFFF;

  }
`