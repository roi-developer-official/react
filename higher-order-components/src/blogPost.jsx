import withSubscription from "./withSubscription";
import React from "react";

class BlogPost extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        {this.props.data.map(({ post , id}) => (
          <p key={id}>{post}</p>
        ))}
      </div>
    );
  }
}

const BlogPostWithSubcription = withSubscription(BlogPost, (DataSource) =>
  DataSource.getBlogPost()
);

export default BlogPostWithSubcription;
