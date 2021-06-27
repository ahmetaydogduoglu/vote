import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//layout
import Layout from './layout';

//pages
import HomePage from './pages/home';
import ProfilePage from './pages/profile';
import NotFound from './pages/notFound';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profil/:id" component={ProfilePage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
