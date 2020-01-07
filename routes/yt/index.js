const router = require('express').Router();

router.use('/url', require('./url'));
router.use('/query', require('./query'));
router.use('/search', require('./search'));
router.use('/related', require('./related'));
router.use('/suggest', require('./suggest'));

module.exports = router;
