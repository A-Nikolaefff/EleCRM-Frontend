import React from "react";
import GlobalStyle from './Styles/globalStyle'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import {Page, PageWrapper, Container} from "./Styles/basicComponents";
import Navbar from "./Components/CommonPageComponents/Navbar";
import Header from "./Components/CommonPageComponents/Header";
// Connecting fonts
import '@fontsource/roboto';

function App() {
    return (
        <BrowserRouter>
            <PageWrapper>
                <GlobalStyle/>
                <Header/>
                <Navbar/>
                <Page>
                    <Container>
                        <AppRouter/>
                    </Container>
                </Page>
            </PageWrapper>
        </BrowserRouter>
    );
}

export default App;
