const {
  RefreshIndicator
} = mui;

Content = React.createClass({

  render() {

      if(this.props.loading){
        let progress = {
          marginLeft : "45%",
          marginRight : "45%",
          marginTop : "15%",
          marginBottom : "15%"
        };
        return (<div><Pager callbacks={this.props.callbacks} counter={this.props.counter} /><RefreshIndicator size={50} left={70} top={0} loadingColor={"#DE4F4F"} status="loading" style={progress}
    /></div>);
      }
      let posts = this.props.posts.map((post) => {
        return <Post key={post._id} id={post._id} author={post.author} title={post.title} subTitle={post.subTitle} postText={post.postText} />;
      });

        return (<div><Pager callbacks={this.props.callbacks} counter={this.props.counter} />{posts}</div>);

}})
