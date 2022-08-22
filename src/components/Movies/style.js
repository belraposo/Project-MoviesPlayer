import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 2rem;
  padding: 3rem;
  width: 80%;
  background-color: #030617;
  border-radius: 1em;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 3rem;
    padding: 0 10px;
    border-left: 5px solid #1DCFFF;
    font-size: 3.5rem;
  }

  .box-filme {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    color: #030617;

    >div {
      margin-bottom: 3rem;
      background-color: white;
      border-radius: 1em;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;

      >div {
        padding: 1rem 5rem;
        width: 45rem;

        h2 {
          margin: 2rem 0;
          border-bottom: 2px solid #1DCFFF;
          text-align: center;
          font-size: 2rem;
        }

        p {
          font-size: 22px;
        }
      } 

      img {
        padding: 1rem;
      }
    }
  }
`
