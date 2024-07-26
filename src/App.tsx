import {Suspense} from 'react'
import './App.css'
import MainLayout from "./components/layouts/MainLayout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import ViewStreamPage from "./components/pages/ViewStreamPage";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

    return (

        <Suspense fallback={<div>Load</div>}>
            <MainLayout>
                    <Routes>
                        <Route index element={<MainPage/>}  />
                        <Route element={<ViewStreamPage/>}  path={'viewstream/:name'} />
                    </Routes>
            </MainLayout>
        </Suspense>
    )
}

export default App
