import "./App.css"
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from "./pages/Home.tsx";
import Navbar from "./components/global/Navbar.tsx";


function App() {

  return (
      <div>
          <Router>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
              </Routes>
          </Router>
      </div>
  )
}

export default App
