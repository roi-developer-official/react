import withSubscription from "./withSubscription";
import React from "react";

class CommentList extends React.Component {
    render() {
    CommentList.logHello();
    return (
      <div>
        <h1>{this.props.header}</h1>
        {this.props.data.map(({ comment, id }) => (
          <p key={id}>{comment}</p>
        ))}
      </div>
    );
  }
}
CommentList.logHello = ()=> console.log("hello");

const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
);

export default CommentListWithSubscription;
