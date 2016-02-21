Post = React.createClass({
    render(){
        return (<div className="post-preview">
                    <a href="">
                        <h2 className="post-title">
                            {this.props.title}
                        </h2>
                    </a>
                    <p className="post-meta">Posted by <a href="">{this.props.author}</a> on 2016</p>
                <hr/>
                </div>
                );
    }
})
