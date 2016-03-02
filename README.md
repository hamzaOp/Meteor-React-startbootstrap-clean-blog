# Meteor-react-blog
Meteor-react theme for personal blogging
# Theme credit
[Clean Blog](http://startbootstrap.com/template-overviews/clean-blog/)
# How to install
If you want to be able to receive and send emails , you have to configure an smtp server :

    Meteor.startup(function () {
    smtp = {
    username: 'your_email@gmail.com', // add your email here
    password: 'your password', // add your password here
    server: 'smtp.gmail.com',
    port: 587
    };
    process.env.MAIL_URL = 'smtp://' +
               encodeURIComponent(smtp.username) + ':' +
               encodeURIComponent(smtp.password) + '@' +
               encodeURIComponent(smtp.server) + ':' +
               smtp.port;
    });
and use your contact email here :

    Meteor.call('sendEmail',
            'your email', //add here your contact email
    .... );

then run the app : 

`$ meteor run`

This theme uses **Meteor 1.2.1**

#Live demo
[meteor-react-blog](http://react-blog.meteor.com/)




