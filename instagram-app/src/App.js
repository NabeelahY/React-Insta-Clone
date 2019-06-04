import React, { Component } from "react";
import uuid from 'uuid';
import moment from 'moment';
import "./App.css";
import dummyData from "./components/dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <div className= 'posts'>
          {this.state.data.map(post => (
            <PostContainer
              key={uuid()}
              thumbNail={post.thumbnailUrl}
              userName={post.username}
              img={post.imageUrl}
              likes={post.likes}
              time={moment(post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}
              userComments={post.comments}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
