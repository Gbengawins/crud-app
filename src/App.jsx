import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import About from './components/Home';
import Nav from "./components/Nav";
import PostList from "./components/PostList";
import Posts from "./components/Posts";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route path="/postlist" element={<PostList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
