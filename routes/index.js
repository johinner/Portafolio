import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/notas', function(req, res, next) {
//   res.render('error', { title: 'Express' });
// });

export default router;

