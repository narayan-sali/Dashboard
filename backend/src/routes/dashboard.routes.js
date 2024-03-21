import { Router } from 'express';
 import { getCurrentUserData,fetchByFilter } from '../controllers/dashboard.controller.js';

const router = Router();


// router.route("/data").post(addToCurrentData);
router.route("/stats").get(getCurrentUserData);
router.route("/filterdata").get(fetchByFilter);

export default router