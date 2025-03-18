import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";

import { DarkModeProvider } from "./contexts/DarkModeContext"; // Import DarkModeProvider
import Root from "./components/Root";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Hero />} />
      <Route path="home" element={<Hero />} />
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <DarkModeProvider>
      {" "}
      {/* Wrap the app with DarkModeProvider */}
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
}

export default App;
