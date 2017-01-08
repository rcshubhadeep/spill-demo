import { Meteor } from 'meteor/meteor';

import '../imports/api/tasks.js';

Meteor.startup(() => {
  //console.log(Tasks.space_id);
  // space_id = process.env.CONTENTFUL_SPACE_ID;
  // token = process.env.CONTENTFUL_DELIVERY_API_KEY;
  // if (typeof(space_id) === 'undefined' || typeof(token) === 'undefined'){
  //   process.exit(1);
  // }
});
