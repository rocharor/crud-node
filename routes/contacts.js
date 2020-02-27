var express = require('express');
var router = express.Router();
var model = require('../models/contacts.model')()

// index - read
router.get('/', function(req, res, next) {
  model.find({}, function (err, docs) { 
    res.render('main', {
      page: 'contacts/index',
      title: 'Crud Node',
      data: docs
    })
  })
})

// edit
router.get('/edit/:id', function(req, res, next) {
  var query = {}
  if (req.params.id) {
    query = {_id: req.params.id}
  }

  model.findOne(query, function (err, doc) { 
    res.render('main', {
      page: 'contacts/edit',
      title: "Editar",
      data: doc
    })
  })
})

// update
router.post('/:id', function(req, res, next) {
  model.findOne({_id: req.params.id}, function (err, doc) {
    doc.nome = req.body.nome
    doc.idade = req.body.idade
    doc.save()

    res.redirect('/contact')
  })
})

// create
router.post('/', function(req, res, next) {
  model.insertMany({
    nome: req.body.nome,
    idade: req.body.idade,
  })

  res.redirect('/contact')
})

// update
router.get('/:id', function (req, res, next) {
  model.deleteMany({ _id: req.params.id }, function (err) {
    if (err) console.log(err);
    console.log("Successful deletion");
  });

  res.redirect('/contact')
})

// delete
router.get('/:id', function (req, res, next) {
  model.deleteMany({_id: req.params.id }, function (err) {
    if (err) console.log(err);
    console.log("Successful deletion");
  });

  res.redirect('/contact')
})

module.exports = router;
