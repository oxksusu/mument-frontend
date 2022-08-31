import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./component/page/main/main";
import {SetData} from "./hooks/SetData";
import Spinner from "./component/spinner/spinner";
import {Signup} from "./component/page/Signup";

function App() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Main />} />
                <Route path={"/oauth/kakao/callback"} element={<SetData />} />
                <Route path={"/*"} element={<Spinner />} />
                <Route path={"/signup"} element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;