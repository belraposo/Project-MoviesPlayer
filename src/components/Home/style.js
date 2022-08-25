import styled from 'styled-components';
import wallpaper from '../../assets/wallpaper-home.png';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: white;

  header {
    padding: 3rem;
    width: 100%;
    max-width: 1200px;
    border-bottom-right-radius: 5em;
    border-bottom-left-radius: 5em;
    background-image: url(${wallpaper});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;


    >div {
      width: 100%;

      h1 {
        margin: 5px 0;
        font-size: 3rem;
        font-weight: 900;
      }

      p {
        margin-bottom: 50px;
        font-size: 26px;
      }
    }
  }

  main {
    margin-top: 3rem;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #070707;

    h2 {
      font-size: 2rem;
      font-weight: 900;
      text-align: center;
    }

    >div {
      display: flex;
      flex-direction: row;

      >div {
        padding: 1rem;
        display: flex;
        flex-direction: column;

        img {
          width: 250px;
          border-radius: 2em;
          transition: 1s ease;
          cursor: pointer;

          :hover {
            transform: scale(1.05);
          }
        }

        h3 {
          padding: 1rem;
          font-size: 16px;
          font-weight: 800;
          text-align: center;

        }
      }
    }
  }

`