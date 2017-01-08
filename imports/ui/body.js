import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './body.html';

var contentful = require('contentful');

Template.body.helpers({
  tasks() {
        var client = contentful.createClient({
          // This is the space ID. A space is like a project folder in Contentful terms
          space: "o41xoi4pkk4f",
          // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
          accessToken: "6fd66160e3fc0189c2d4104ea4b5f774e1afc34d83699f3d414761516462efe6",
          })
          // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
          client.getEntries({
          })
          .then(function(entries) {
            if (entries.items.length > 0){
              replaing_html = ""
              for (i=0; i < entries.items.length; i++){
                console.log(entries.items[i])
                replaing_html = replaing_html + "<li>";
                replaing_html = replaing_html + entries.items[i].fields.title + " ";
                replaing_html = replaing_html + '<a href="' + entries.items[i].fields.url + '" target="_blank">link</a>';
                replaing_html = replaing_html + "</li>";
              }
            }
            document.getElementById("test").innerHTML = replaing_html
          })
          console.log("HERE");
    return [{text: "This is task 1", url: "http://example1.com"}]
  },
});
