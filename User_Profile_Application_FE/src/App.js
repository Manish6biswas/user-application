// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import LoginPage from "./components/loginPage/LoginPage";
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
function App() {
  return (
    <Router>
      <div className="App">
        {/* <p>hello</p> */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<RegistrationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* Add an exact path for the root to redirect to the login page */}
          <Route exact path="/" render={() => <LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
