/* 
Start here =>
PostsContainer components and the CommentSection Components. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import dummyData from "./dummy-data";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <SearchBar setSearchTerm={setSearchTerm} />

      <PostsPage data={dummyData} />
    </div>
  );
};

export default App;
