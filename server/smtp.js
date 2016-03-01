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
