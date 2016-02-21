Content = React.createClass({


  render() {

      let posts = this.props.posts.map((post) => {
        return <Post key={post._id} author={post.author} title={post.title} subTitle={post.subTitle} postText={post.postText} />;
      });

        return (<div><Pager callbacks={this.props.callbacks} counter={this.props.counter} />{posts}<Pager callbacks={this.props.callbacks} counter={this.props.counter}/></div>);

}})
