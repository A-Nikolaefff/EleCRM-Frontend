import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../Pages/About";
import Error from "../Pages/Error";
import Requests from "../Pages/Requests";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Requests/>}/>
            <Route path={"/index"} element={<Requests/>}/>
            <Route path={"/requests"} element={<Requests/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/error"} element={<Error/>}/>
            <Route path={"/*"} element={<Navigate to="/error" replace />} />
        </Routes>
    );
};

export default AppRouter;