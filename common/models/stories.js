'use strict';

module.exports = function(Stories) {
  Stories.sharedClass.find('create', true).shared = true;
  Stories.sharedClass.find('update', true).shared = false;
  Stories.sharedClass.find('upsert', true).shared = false;
  Stories.sharedClass.find('updateAttributes', false).shared = false;
  Stories.sharedClass.find('deleteById', true).shared = false;
  Stories.sharedClass.find('find', true).shared = false;
  Stories.sharedClass.find('findById', true).shared = false;
  Stories.sharedClass.find('count', true).shared = false;
  Stories.sharedClass.find('exists', true).shared = false;
  Stories.sharedClass.find('findOne', true).shared = false;
};
