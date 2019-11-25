"use strict";

module.exports = function(Actions) {
  Actions.sharedClass.find("create", true).shared = true;
  Actions.sharedClass.find("update", true).shared = false;
  Actions.sharedClass.find("upsert", true).shared = false;
  Actions.sharedClass.find("updateAttributes", false).shared = false;
  Actions.sharedClass.find("deleteById", true).shared = false;
  Actions.sharedClass.find("find", true).shared = false;
  Actions.sharedClass.find("findById", true).shared = false;
  Actions.sharedClass.find("count", true).shared = false;
  Actions.sharedClass.find("exists", true).shared = false;
  Actions.sharedClass.find("findOne", true).shared = false;
};
