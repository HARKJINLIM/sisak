const router = require('express').Router();

// API member test
router.get('/test', (req, res)=> {
	res.json('test connection');
})

module.exports = router;