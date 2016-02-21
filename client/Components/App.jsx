App = React.createClass({
    render(){
        return (<div>
                {this.props.navigation}
                {this.props.header}
                <main>
                <div className="container">
                <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                 {this.props.content}
                    </div>
                    </div>
                    </div>
                </main>
                {this.props.footer}
                </div>);
    }
});