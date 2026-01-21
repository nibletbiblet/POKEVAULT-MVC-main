const express = require('express');
const TradeController = require('../controllers/TradeController');
const { checkAuthenticated } = require('../middleware/auth');

const router = express.Router();

router.get('/trades', checkAuthenticated, TradeController.list);
router.get('/my-trades', checkAuthenticated, TradeController.myTradesPage);
router.get('/trade-chat', checkAuthenticated, TradeController.chatPage);
router.get('/trades/all', checkAuthenticated, TradeController.listAll);
router.post('/trades', checkAuthenticated, TradeController.create);
router.post('/trades/:id/offer', checkAuthenticated, TradeController.offer);
router.post('/trades/:id/accept', checkAuthenticated, TradeController.accept);
router.post('/trades/:id/decline', checkAuthenticated, TradeController.decline);
router.post('/trades/:id/cancel', checkAuthenticated, TradeController.cancel);
router.post('/trades/:id/messages', checkAuthenticated, TradeController.addMessage);
router.post('/trades/:id/meeting-proposals', checkAuthenticated, TradeController.proposeMeeting);
router.post('/trades/:id/meeting-proposals/:proposalId/respond', checkAuthenticated, TradeController.respondMeeting);

module.exports = router;
