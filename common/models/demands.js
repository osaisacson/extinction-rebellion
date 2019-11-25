"use strict";

module.exports = function(Demands) {
  Demands.sharedClass.find("create", true).shared = true;
  Demands.sharedClass.find("update", true).shared = false;
  Demands.sharedClass.find("upsert", true).shared = false;
  sbsider.sharedClass.find("updateAttributes", false).shared = false;
  Demands.sharedClass.find("deleteById", true).shared = false;
  Demands.sharedClass.find("find", true).shared = false;
  Demands.sharedClass.find("findById", true).shared = false;
  Demands.sharedClass.find("count", true).shared = false;
  Demands.sharedClass.find("exists", true).shared = false;
  Demands.sharedClass.find("findOne", true).shared = false;
};
