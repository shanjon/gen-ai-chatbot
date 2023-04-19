import logo from './logo.svg';
import './App.css';
import Button from "@cloudscape-design/components/button"
import AppLayout from "@cloudscape-design/components/app-layout";
import TopNavigation from "./components/TopNav";
import SideNav from "./components/SideNav";
import ContentLayout from "./components/ContentLayout";
import { Route, Routes, Link, useParams, BrowserRouter as Router } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import LaunchBot from "./pages/LaunchBot";

// Styles
import "@cloudscape-design/global-styles/index.css"

function App() {
  return (
    <Router>
`    <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/launch" element={<LaunchBot />} />
      </Routes>`
    </Router>
  );
}

export default App;
