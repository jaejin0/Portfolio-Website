import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css';

// layouts
import RootLayout from './Layouts/RootLayout'

// pages
import Home from './Pages/Home'
import About from './Pages/About'
import Experiences from './Pages/Experiences'
import ExperienceDetails from './Pages/ExperienceDetails'
import Projects from './Pages/Projects'
import ProjectDetails from './Pages/ProjectDetails'
import NotFound from './Pages/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='experiences' element={<Experiences />} />
      <Route path='experiences/:id' element={<ExperienceDetails />} />
      <Route path='projects' element={<Projects />} />
      <Route path='projects/:id' element={<ProjectDetails />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
