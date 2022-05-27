import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./routes/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./routes/Post";

function App() {
  return (
    <div>
      <Header></Header>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/posts/:id" element={<Post />}></Route>
        </Routes>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
