import React from "react";
import GlobalStyle from './Styles/global'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import {Page, PageWrapper, Container} from "./Styles/basicPageComponents";
import Footer from "./Components/BasicPageComponents/Footer";
import Navbar from "./Components/BasicPageComponents/Navbar";
import Header from "./Components/BasicPageComponents/Header";

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
                <Footer/>
            </PageWrapper>
        </BrowserRouter>
    );
}

export default App;
