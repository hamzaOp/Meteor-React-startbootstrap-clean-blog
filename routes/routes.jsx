FlowRouter.route('/', {

    name : 'home',
    action: function(params, queryParams) {
        ReactLayout.render(App,{
            navigation : <Nav />,
          header : <Header sub={false} heading='Clean Blog' subHeading='Hamza' bg='home' />,
          content() {
        return <Wrapper />;
      },
            footer : <Footer />
        });
    }
});

FlowRouter.route('/posts/:id', {



    action: function(params, queryParams) {
        ReactLayout.render(App,{
            navigation : <Nav />,
          header : <HeaderData />,
          content() {
        return <PostContent />;
      },
            footer : <Footer />
        });
    }
});

FlowRouter.route('/about', {

    name : 'about',
    action: function(params, queryParams) {
        ReactLayout.render(App,{
            navigation : <Nav />,
          header : <Header sub={false} heading='About me' subHeading='This is what I do.' bg='about' />,
          content() {
        return <About />;
      },
            footer : <Footer />
        });
    }
});

FlowRouter.route('/contact', {

    name : 'contact',
    action: function(params, queryParams) {
        ReactLayout.render(App,{
            navigation : <Nav />,
          header : <Header sub={false} heading='Contact me' subHeading='Have questions? I have answers (maybe).' bg='contact' />,
          content() {
        return <Contact />;
      },
            footer : <Footer />
        });
    }
});
