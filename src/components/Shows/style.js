import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 2rem;
  padding: 3rem;
  width: 100%;
  color: white;
  background-color: #070707;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 3rem;
    padding: 0 10px;
    border-left: 5px solid #005386;
    font-size: 3.5rem;
  }

  .box-serie {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: flex-start;
    text-align: justify;

    >div {
      margin-bottom: 3rem;
      width: 100%;
      max-width: 600px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      border-radius: 1em;

      .box-rating {
        margin-top: 1rem;
        font-weight: 800;

        img {
          width: 25px;
        }
      }

      .box-about {
        padding: 1rem;

        h2 {
          margin: 1rem 0;
          border-bottom: 2px solid #005386;
          text-align: center;
          font-size: 1rem;
          font-weight: 900;
        }

        p {
          font-size: 14px;
        }
      } 

      img {
        width: 250px;
        border-radius: 5px;
      }
    }
  }
`

