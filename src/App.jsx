import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./component/page/main/main";

function App() {
    return(
        <BrowserRouter>
            <Routes>

                <Route path={"/"} element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;