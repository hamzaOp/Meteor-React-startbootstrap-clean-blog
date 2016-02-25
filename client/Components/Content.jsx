const {
  CircularProgress
} = mui;

Content = React.createClass({

  render() {

      if(this.props.loading){
        let progress = {
          margin : "auto",
          position : "absolute",
          top : "0",
          bottom : "0",
          right : "0",
          left : "0"
        };
        return <CircularProgress size={1} style={progress} />;
      }
      let posts = this.props.posts.map((post) => {
        return <Post key={post._id} id={post._id} author={post.author} title={post.title} subTitle={post.subTitle} postText={post.postText} />;
      });

        return (<div><Pager callbacks={this.props.callbacks} counter={this.props.counter} />{posts}</div>);

}})
