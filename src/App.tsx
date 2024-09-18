import {Suspense, lazy} from 'react'
import './App.css'
import '@mantine/core/styles.css';
import MainLayout from "./components/layouts/MainLayout";
import {Route, Routes} from "react-router-dom";
import {MantineProvider, Skeleton} from "@mantine/core";
import NotFoundPage from "./components/pages/NotFoundPage";
import {CreateProfilePage} from "./components/pages/AdminsPage";

const MainPage = lazy(() => import("./components/pages/MainPage"))
const ViewStreamPage = lazy(() => import("./components/pages/ViewStreamPage"))
const ProfileStreamerPage = lazy(() => import("./components/pages/ProfileStreamerPage"))
function App() {
    return (
        <MantineProvider defaultColorScheme="dark">
            <Suspense fallback={<Skeleton/>}>
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route element={<ViewStreamPage/>} path={'viewstream/:id'}/>
                    <Route element={<ProfileStreamerPage/>} path={'profile-streamer/:id'}/>
                    <Route element={<CreateProfilePage/>} path={'createProfileUser'}/>
                    <Route element={<NotFoundPage/>} path="*"/>
                </Route>
            </Routes>
        </Suspense>
        </MantineProvider>
    )
}

export default App
