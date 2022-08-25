import styled from 'styled-components';

export const Container = styled.div`
nav {
  padding: 1rem;
  width: 100%;
  background-color: #070707;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h2 {
    font-size: 2rem;
    margin-left: 150px;
    text-shadow: 0 1px 0px #005386, 1px 0 0px #238DCC, 1px 2px 1px #005386, 2px 1px 1px #238DCC, 2px 3px 2px #005386, 3px 2px 2px #238DCC, 3px 4px 2px #005386, 4px 3px 3px #238DCC, 4px 5px 3px #005386, 5px 4px 2px #238DCC, 5px 6px 2px #005386, 6px 5px 2px #238DCC, 6px 7px 1px #005386, 7px 6px 1px #238DCC, 7px 8px 0px #005386, 8px 7px 0px #238DCC;
    color: white;
  }

  .box-links {
    margin-left: 20px;
    padding: 5px;
    width: 100%;
    max-width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 20px;
    font-weight: 900;
    }
}

  a{
    text-decoration: none;
  }

  h4 {
    color: white;
    padding-left: 5px;
    font-size: 14px;
    font-weight: 800;
    border-left: 2px solid #005386;
    transition: 0.25s ease-in;

    :hover {
      text-shadow: 2px 2px 0 #005386, 4px 4px 0 #238DCC;
      color: white;
    }
  }
`
