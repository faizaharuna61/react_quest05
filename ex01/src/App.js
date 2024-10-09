import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        {/* Define Routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/topics/*" element={<Topics />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="components">Components</Link>
        </li>
        <li>
          <Link to="props-v-state">Props v. State</Link>
        </li>
      </ul>

      {/* Nested Routes inside Topics */}
      <Routes>
        <Route path="components" element={<Components />} />
        <Route path="props-v-state" element={<PropsVState />} />
        <Route path="/" element={<h3>Please select a topic.</h3>} />
      </Routes>
    </div>
  );
}

function Components() {
  return <h3>Components Topic</h3>;
}

function PropsVState() {
  return <h3>Props v. State Topic</h3>;
}
