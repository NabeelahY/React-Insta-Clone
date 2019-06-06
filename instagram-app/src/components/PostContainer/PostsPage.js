import React, { Component } from "react";
// import algoliasearch from 'algoliasearch/lite';
// import { InstantSearch, connectHits } from 'react-instantsearch-dom';
import uuid from 'uuid';
import moment from 'moment';
import "../../App.css";
import dummyData from "../dummy-data";
import SearchBar from "../SearchBar/SearchBar";

import PostContainer from "./PostContainer";



// const searchClient = algoliasearch('QWZ5Q8DNIJ', 'ccea0fd14aa1bf47fa7e6e90ab1ced51');
// const CustomHits = connectHits(PostContainer)

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchItem: ''
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData,
    })
  }

  searchHandler = (e) => {
    this.setState({
      searchItem: e.target.value,
    });
  }

  render() {
    // console.log(this.state.commentsData.map((c,i) => c));
    
    return (
      <div className="App">
      {/* <InstantSearch searchClient={searchClient} indexName="dev_NAME"> */}
        <header className="App-header">
          <SearchBar  search = {this.searchHandler} />
        </header>
        <div className= 'posts'>
        
        {this.state.data.map(post => {
            const userPost = post.username.toLowerCase();
            const searchTerms = this.state.searchItem.toLowerCase();
            if(userPost.includes(searchTerms)){
              return (<PostContainer
              id= { post.id }
              key={uuid()}
              thumbNail={post.thumbnailUrl}
              userName={post.username}
              img={post.imageUrl}
              likes={post.likes}
              time={moment(post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}
              userComments={post.comments}
              submitComment = {this.addComment}
              containerId = {post.id}
              comment = { this.state.comment }
              changeHandler = {this.changeHandler}
              post={post}
              // hit={post}
            />)
            }
        })}
        </div>
        {/* </InstantSearch> */}
      </div>
    );
  }
}

export default PostsPage;
