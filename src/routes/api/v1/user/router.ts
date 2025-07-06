import { Router } from 'express';
import { UserAuthController } from '../../../../controllers/user/auth.controller';
const router = () => {
    const userRouter = Router();
    //***************GET***************
    userRouter.get('/getUser', UserAuthController.getUser);

    //***************POST***************

    //***************PUT***************

    //***************PATCH***************

    //***************DELETE***************

    return userRouter;
};
export default router;
