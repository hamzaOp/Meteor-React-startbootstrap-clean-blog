const {
  CircularProgress
} = mui;

PostContent = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {

    var Id = FlowRouter.getParam('id');
    var subscription = Meteor.subscribe('post', Id);
      return {
        loading : !subscription.ready(),
        post: PostsCollection.find({
          _id: Id
        }).fetch()
      };

    },

    render(){
      if(this.data.loading){
        let progress = {
          marginLeft : "350",
          marginRight : "350",
          marginTop : "80",
          marginBottom : "80"
        };
        return <CircularProgress size={1} style={progress} />;
      }
      let post = this.data.post.map((post) => {
        return post.postText;
      });
      let divStyle = {
        marginLeft : "0"
      }
        return (
          <article>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1" style={divStyle}><p>{post}</p></div></div></div></article>);
    }
})
