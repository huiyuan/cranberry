import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("dashboard");

  this.resource("gallery", function() {
    this.route("show", {
      path: ":image_id"
    });
  });

  this.resource("owners", function() {
    this.route("owner", { path: ':owner_id' });
  });
});

export default Router;