import { Response, NextFunction } from 'express';
import { IRequestPayload } from '../../interfaces';

import { getAllNotificationsQuery } from '../../database/queries';

const getAllNotifications = async (req: IRequestPayload, res: Response, next: NextFunction) => {
  const { id } = req.user;
  try {
    const allNotifications = await getAllNotificationsQuery((+id));
    res.json({ message: allNotifications });
  } catch (error) {
    next(error);
  }
};

export default getAllNotifications;
