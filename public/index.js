// import Handlebars from 'handlebars';

var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);

var context = { title: "My New Post", body: "This is my first post!" };
var html = template(context);