import { BrowserRouter, Route, Routes } from "react-router";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Project = lazy(() => import("./pages/Project"));
const Resume = lazy(() => import("./pages/Resume"));


const MainRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoute