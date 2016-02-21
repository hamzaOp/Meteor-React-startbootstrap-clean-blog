FlowRouter.route('/', {

    action: function(params, queryParams) {
        ReactLayout.render(App,{
            navigation : <Nav />,
            header : <Header sub={false} />,
          content: <Wrapper />,
            footer : <Footer />
        });
    }
});
