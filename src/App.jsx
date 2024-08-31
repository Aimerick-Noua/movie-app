import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import HeaderLayout from "./Layouts/HeaderLayout";
import TvShowPage from "./pages/TvShowPage";
function App() {
  const location = useLocation();

  return (
    <>
    <HeaderLayout />
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tvshow" element={<TvShowPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
