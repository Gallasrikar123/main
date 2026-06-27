import { Router } from "express";
import usersRouter from "./users.js";
import restaurantsRouter from "./restaurants.js";
import menuItemsRouter from "./menuItems.js";
import ordersRouter from "./orders.js";
import authRouter from "./auth.js";

const router = Router();

router.use(authRouter);
router.use(usersRouter);
router.use(restaurantsRouter);
router.use(menuItemsRouter);
router.use(ordersRouter);

export default router;
