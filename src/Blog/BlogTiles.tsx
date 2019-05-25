import React, { Component } from 'react';
import './Blog.css';

type blogTileProps = {
  title: string,
  imageurl: string
}

class BlogTiles extends Component<blogTileProps> {

  constructor(props: blogTileProps) {
    super(props);
  }

  public render() {
    return (
          <div className="blogTile">
            {this.props.title}
            <img src={this.props.imageurl}></img>
        </div>
     );
  }
}

export default BlogTiles;
