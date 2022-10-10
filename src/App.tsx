import React from 'react';
import styled from "styled-components";
import CardList from './components/CardList/CardList';
import DateFilter from './components/DateFilter/DateFilter';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  return (
    <Main>
      <Container>
        <Header>
          <Dropdown/>
          <DateFilter/>
        </Header>
        <CardList/>
      </Container>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100vh;

  @media (max-width: 1225px) {
    overflow: scroll;
  }
`

const Container = styled.div`
  width: 100%;
  min-width: 1225px;
  max-width: 1225px;
  margin: 0 auto;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0 .8125rem;
  padding: 1rem;
`

export default App;
