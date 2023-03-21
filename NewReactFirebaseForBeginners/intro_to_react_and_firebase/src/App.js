import './App.css';
import Posts from './components/Posts';
import Post from './components/Post';
import {Router} from "@reach/router"

function App(props) {
  return (
    <div className="app_container">
      <div className='columns'>
        <Router>
          <Posts default />
          <Post path="post/:id" />
        </Router>
      </div>
    </div>
  );
}

export default App;
