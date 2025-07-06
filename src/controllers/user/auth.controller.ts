import { Request, Response } from 'express';

export class UserAuthController {
    public static login(req: Request, res: Response): void {
        // Handle user login
    }

    public static register(req: Request, res: Response): void {
        // Handle user registration
    }

    public static getUser(req: Request, res: Response): void {
        // Handle fetching user details
        res.status(200).json({ message: 'User details fetched successfully' });
    }
}
