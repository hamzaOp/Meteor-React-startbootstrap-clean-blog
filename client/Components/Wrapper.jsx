Wrapper = React.createClass({

  getInitialState(){
    return {
      counter : 0
    }
  },

  Next(){
    this.setState({
      counter : this.state.counter - 4
    })
  },

  Prev(){
    this.setState({
      counter : this.state.counter + 4
    })
  },



  mixins: [ReactMeteorData],

  getMeteorData() {
    var subscription = Meteor.subscribe('posts',this.state.counter);
      return {
        loading : !subscription.ready(),
        posts: PostsCollection.find({},{}).fetch()
      };

    },

  render(){
    let content = {
      position : "relative"
    };
    return <Content style={content} loading={this.data.loading} posts={this.data.posts} callbacks={{Next: this.Next,Prev: this.Prev}} counter={this.state.counter} /> ;
  }

})
