import "./App.css"
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from "./pages/Home.tsx";
import Navbar from "./components/global/Navbar.tsx";
import RequireWebSocket from "./components/require/RequireWebSocket.tsx";
import RequireAuth from "./components/require/RequireAuth.tsx";
import Sensors from "./pages/Sensors.tsx";
import Alerts from "./pages/Alerts.tsx";
import SensorDetails from "./pages/SensorDetails.tsx";
import ScrollToTop from "./components/global/ScrollToTop.tsx";
import {useAuth0} from "@auth0/auth0-react";
import {useEffect} from "react";
import {AuthService} from "./services/AuthService.ts";


function App() {

    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        AuthService.setAccessTokenFetcher(getAccessTokenSilently);
    }, [getAccessTokenSilently]);

  return (
      <div>
          <Router>
              <Navbar />
              <ScrollToTop/>
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
                  <Route path="/sensors/:id" element={
                      <RequireAuth>
                          <RequireWebSocket>
                              <SensorDetails />
                          </RequireWebSocket>
                      </RequireAuth>
                  } />

              </Routes>

          </Router>
      </div>
  )
}

export default App
