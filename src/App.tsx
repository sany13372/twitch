import {Suspense, lazy} from 'react'
import './App.css'
import '@mantine/core/styles.css';
import MainLayout from "./components/layouts/MainLayout";
import {Route, Routes} from "react-router-dom";
import {MantineProvider, Skeleton} from "@mantine/core";
import NotFoundPage from "./components/pages/NotFoundPage";

const MainPage = lazy(() => import("./components/pages/MainPage"))
const ViewStreamPage = lazy(() => import("./components/pages/ViewStreamPage"))
function App() {
    return (
        <MantineProvider defaultColorScheme="dark">
            <Suspense fallback={<Skeleton/>}>
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route element={<ViewStreamPage/>} path={'viewstream/:id'}/>
                    <Route element={<NotFoundPage/>} path="*"/>
                </Route>
            </Routes>
        </Suspense>
        </MantineProvider>
    )
}

export default App
