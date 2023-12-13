import { Route, Routes } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Nav from "./Nav";
import NewPost from "./NewPost";
import NotFound from "./NotFound";
import PostPage from "./PostPage";

import EditPost from "./EditPost";
import { DataProvider } from "./context/DataContext";

function App() {

  return (

    <div className="App">
      <DataProvider>
        <Header title="Single Page Application"/>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="post">
        <Route 
            index
            element={<NewPost/>} 
        />
        <Route path=":id" element={<PostPage/>} 
        />
        </Route>
        <Route path="edit/:id" element={<EditPost/>} 
        />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </DataProvider>

    </div>
  );
}

export default App;
