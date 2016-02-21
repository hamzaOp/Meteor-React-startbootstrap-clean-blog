Header = React.createClass({
    render(){

        let headerStyle = {
            backgroundImage : "url('home.jpg')"
        };
        return (<header className="intro-header" style={headerStyle}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div className="site-heading">
                        <h1>Clean Blog</h1>
                        {this.props.sub ? <Sub/> : <Rule/>}
                        <span className="subheading">A Clean Blog Theme by Start Bootstrap</span>
                    </div>
                </div>
            </div>
        </div>
    </header>);
    }
})
