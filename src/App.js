import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css';

// layouts
import RootLayout from './Layouts/RootLayout'

// pages
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='projects' element={<Projects />} />
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
