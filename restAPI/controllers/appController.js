'use strict';

var Task = require('../models/appModel.js');

exports.list_all_tasks = function(req, res) {
  Task.getAllTask(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};

exports.get_a_rating = function(req, res) {
  Task.getRating(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

