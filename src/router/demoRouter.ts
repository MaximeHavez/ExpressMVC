import { DemoModel } from '../models/demoModels';
import express from "express";
import { DemoController } from '../controllers/demoController'

const router = express.Router();
const model = new DemoModel;
const controller = new DemoController(model);

router.get('/', controller.getString);
router.get('/pages', controller.getPage)
router.post('/demo', controller.postString)

export default router;