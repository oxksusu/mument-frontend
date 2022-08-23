import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./component/page/main/main";
import {Test} from "./service/test";
import Spinner from "./component/spinner/spinner";

function App() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Main />} />
                <Route path={"/oauth/kakao/callback"} element={<Test />} />
                <Route path={"/*"} element={<Spinner />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;