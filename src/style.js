import styled from 'styled-components';

export const Container = styled.div`
.box-links {
  margin-top: 1rem;
  padding: 1rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.5rem;
  font-weight: 900;

  input {
    width: 18rem;
    margin: 5px 0;
    padding: 10px 16px;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    transition: 0.3s ease;

    :hover{
      border: 1px solid #55D5F8;
    }

    ::placeholder {
      font-size: 20px;
      color: white;
    }

    :focus {
      border: 1px solid #55D5F8;
    }
  }

  a {
    text-decoration: none;
    transition: 0.5s ease;
    text-shadow: #0F5AC1 0px 0px 5px, #0F5AC1 0px 0px 10px, #0F5AC1 0px 0px 15px, #1AC1FF 0px 0px 20px, #1AC1FF 0px 0px 30px, #1AC1FF 0px 0px 40px, #1AC1FF 0px 0px 50px, #1AC1FF 0px 0px 75px;
    color: #FFFFFF;

    :hover {
      transform: scale(1.1);
    }
  }
}
`
