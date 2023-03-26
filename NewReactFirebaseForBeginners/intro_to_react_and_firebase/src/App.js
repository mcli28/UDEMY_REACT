import './App.css';
import Posts from './components/Posts';
import Post from './components/Post';
import CreatePost from './components/CreatePost'
import {Router} from "@reach/router"

function App(props) {
  return (
    <div className="app_container">
      <div className='columns'>
        <div className='column'>
          <Router>
            <CreatePost default />
            <Posts path="posts"/>
            <Post path="post/:id" />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
