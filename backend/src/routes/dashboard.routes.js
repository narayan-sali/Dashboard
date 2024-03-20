import { Router } from 'express';
 import { addToCurrentData, getCurrentData,fetchByFilter } from '../controllers/dashboard.controller.js';

const router = Router();


router.route("/data").post(addToCurrentData);
router.route("/stats").get(getCurrentData);
router.route("/filterdata").get(fetchByFilter);

export default router