import { lazy, Suspense } from "react";
import "./App.css";
import "@mantine/core/styles.css";
import MainLayout from "./components/layouts/MainLayout";
import { Route, Routes } from "react-router-dom";
import { MantineProvider, Skeleton } from "@mantine/core";
import NotFoundPage from "./components/pages/NotFoundPage";
import { CreateProfilePage } from "./components/pages/AdminsPage";
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";

const apiKey = "68skgwmf4d3c";
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJAc3RyZWFtLWlvL2Rhc2hib2FyZCIsImlhdCI6MTcyODYzNTYwNiwiZXhwIjoxNzI4NzIyMDA2LCJ1c2VyX2lkIjoiIWFub24iLCJyb2xlIjoidmlld2VyIiwiY2FsbF9jaWRzIjpbImxpdmVzdHJlYW06bGl2ZXN0cmVhbV9mZTU0MGFhMi1lZWVlLTQyYzAtODc1YS0wYjk2ZDZmYTVmNmIiXX0.s5slYh-T9uzDaaQmBp1FgMDzkJVbKJ16PJIgYbDnieo"
const userId = "alexusFilds"

const MainPage = lazy(() => import("./components/pages/MainPage"));
const ViewStreamPage = lazy(() => import("./components/pages/ViewStreamPage"));
const ProfileStreamerPage = lazy(
  () => import("./components/pages/ProfileStreamerPage"),
);



function App() {
  const user: User = { type:'anonymous' };
  // const user: User = { name:'Tutorial', id:'androsmirial' };
  const client = new StreamVideoClient({ apiKey, user, token });

  return (
    <MantineProvider defaultColorScheme="dark">
      <Suspense fallback={<Skeleton />}>
        <StreamVideo client={client}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<MainPage />} />
              <Route element={<ViewStreamPage />} path={"viewstream/:id"} />
              <Route
                element={<ProfileStreamerPage />}
                path={"profile-streamer/:id"}
              />
              <Route
                element={<CreateProfilePage />}
                path={"createProfileUser"}
              />
              <Route element={<NotFoundPage />} path="*" />
            </Route>
          </Routes>
        </StreamVideo>
      </Suspense>
    </MantineProvider>
  );
}

export default App;