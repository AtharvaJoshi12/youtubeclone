import "./App.css";
import Header from "./MyComponents/Header";
import Sidebar from "./MyComponents/Sidebar";
import RecommendedVideos from "./MyComponents/RecommendedVideos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from "./MyComponents/SearchPage";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
