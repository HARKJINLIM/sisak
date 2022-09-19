const router = require('express').Router();
// call blow router part
const memberModel = require('./_model/memberModel');
// if error, for processing
const {modelCall} = require('../../util/lib');

// API member Call: /api/member/duplicateCheck/mb_id(field)/***(value)
// MVC patten for DB connetion need to study
// R&R - router role: control, _model: data caculation => So, create -model folder in /api.
router.get('/duplicateCheck/:field/:value', async (req, res) => {
	//crate Function for try - catch in ../lib.js/util 
	//console.log(req.params) - deleted 
	const result = await modelCall(memberModel.duplicateCheck, req.params);
	res.json(result);
});

module.exports = router;