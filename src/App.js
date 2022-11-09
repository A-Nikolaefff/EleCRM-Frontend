import React from "react";
import GlobalStyle from './Styles/globalStyle'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import {Page, PageWrapper, Container} from "./Styles/basicPageComponents";
import Footer from "./Components/BasicPageComponents/Footer";
import Navbar from "./Components/BasicPageComponents/Navbar";
import Header from "./Components/BasicPageComponents/Header";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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
                {/*<Footer/>*/}
            </PageWrapper>
        </BrowserRouter>
    );
}

export default App;
