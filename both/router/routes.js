/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase',
  waitOn: function(){
  	return Meteor.subscribe('posts');
  }
});

Router.map(function () {

   this.route('index', {path: '/'});

   this.route('createPost', {path: '/create-post'});

});

