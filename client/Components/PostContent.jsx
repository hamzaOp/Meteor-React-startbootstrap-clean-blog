PostContent = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {

    var Id = FlowRouter.getParam('id');
    var subscription = Meteor.subscribe('post', Id);
      return {
        post: PostsCollection.find({
          _id: Id
        }).fetch()
      };

    },

    render(){

      let post = this.data.post.map((post) => {
        return post.postText;
      });
        return (
          <article>
              <div class="container">
                  <div class="row">
                      <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1"><p>{post}</p></div></div></div></article>);
    }
})
