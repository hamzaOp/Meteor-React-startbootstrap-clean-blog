Post = React.createClass({

  componentDidMount(){
  $(".post-title").fitText(1.8,{ minFontSize: '15px', maxFontSize: '36px' });
},


    render(){


        var params = {'id' : this.props.id}
        var path = FlowRouter.path('/posts/:id', params);
        return (<div className="post-preview">
                    <a href={path}>
                        <h2 className="post-title">
                            {this.props.title}
                        </h2>
                    </a>
                    <p className="post-meta">Posted by <a href="">{this.props.author}</a> on {this.props.date}</p>
                <hr/>
                </div>
                );
    }
})
