import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import Requests from "../pages/Requests";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/requests"} element={<Requests/>}/>
            <Route path={"/error"} element={<Error/>}/>
            <Route path={"/*"} element={<Navigate to="/error" replace />} />
        </Routes>
    );
};

export default AppRouter;