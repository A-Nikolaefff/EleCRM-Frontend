import React from "react";

import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import AppRouter from "./components/AppRouter";
import styled from 'styled-components'
import GlobalStyle from './styles/global'
import Footer from "./components/UI/Footer";
import {Container} from "./styles/components";

function App() {
    const Wrapper = styled.div`
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
    `;

    const Page = styled.div`
      flex: 1 0 auto;
    `;

    return (
        <BrowserRouter>
            <Wrapper>
                <GlobalStyle/>
                <Page>
                    <Navbar/>
                    <Container>
                        <AppRouter/>
                    </Container>
                </Page>
                <Footer/>
            </Wrapper>
        </BrowserRouter>
    );
}

export default App;
