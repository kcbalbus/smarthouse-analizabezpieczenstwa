import "./App.css"
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from "./pages/Home.tsx";
import Navbar from "./components/global/Navbar.tsx";
import RequireWebSocket from "./components/require/RequireWebSocket.tsx";
import RequireAuth from "./components/require/RequireAuth.tsx";
import Sensors from "./pages/Sensors.tsx";
import Alerts from "./pages/Alerts.tsx";


function App() {

  return (
      <div>
          <Router>
              <Navbar />
              <Routes>
                  <Route path="/" element={
                      <Home />
                  } />
                  <Route path="/sensors" element={
                      <RequireAuth>
                          <RequireWebSocket>
                              <Sensors />
                          </RequireWebSocket>
                      </RequireAuth>
                  } />
                  <Route path="/alerts" element={
                      <RequireAuth>
                          <RequireWebSocket>
                              <Alerts />
                          </RequireWebSocket>
                      </RequireAuth>
                  } />
              </Routes>

          </Router>
      </div>
  )
}

export default App
