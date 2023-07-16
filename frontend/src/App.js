import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Dashboard from "./screens/DashBoard";
import ClientScreen from "./screens/ClientScreen";
import ClientCaseScreen from "./screens/ClientCaseScreen";
import AwardsScreen from "./screens/AwardsScreen";
import AboutUs from "./screens/AboutUs";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/notifications" element={<NotificationsScreen />} />
            <Route path="/client_screen" element={<ClientScreen />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/client_case_screen" element={<ClientCaseScreen />} />
            <Route path="/awards_screen" element={<AwardsScreen />} />
            <Route path="/dash_board" element={<Dashboard />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
