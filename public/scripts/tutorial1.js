import react from 'react'
import react-DOM from 'react'

var CommentBox = React.creatClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a comment box.
      </div
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
