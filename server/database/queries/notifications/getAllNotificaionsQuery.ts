import { Request } from '../../../models';

const getAllNotificationsQuery = (receiver_id:number) => Request.findAll({
  where: {
    receiver_id,
  },
});

export default getAllNotificationsQuery;
