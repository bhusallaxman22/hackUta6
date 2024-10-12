const express = require('express');
const router = express.Router();
const resolutionController = require('../controllers/resolutionController');
const { authenticate, authorize } = require('../middleware/auth');

router.post('/', resolutionController.submitResolution);
router.get('/', resolutionController.getResolutions);
router.put('/:id', authenticate, authorize(['leader']), resolutionController.approveOrDenyResolution);
router.post('/:id/vote', authenticate, authorize(['senator']), resolutionController.voteOnResolution);

module.exports = router;