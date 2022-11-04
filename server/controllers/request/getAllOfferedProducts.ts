import { Response, NextFunction } from 'express';
import { IRequestPayload } from '../../interfaces';
import { CustomError } from '../../helpers';
import { getAllOfferedProductsQuery, getOfferedProductsDetailsQuery } from '../../database/queries';

const getAllOfferedProducts = async (req : IRequestPayload, res : Response, next:NextFunction) => {
  try {
    const { requestId } = req.params;
    const { id } = req.user;

    if (!(Number(requestId) > 0)) throw new CustomError(401, 'Bad Request');

    const offeredProducts = await getAllOfferedProductsQuery(+requestId, +id);
    if (!offeredProducts.length) throw new CustomError(400, 'Please check your request');

    const offeredProductsDetails = await
    getOfferedProductsDetailsQuery(offeredProducts[0].products);
    res.json({ message: offeredProductsDetails });
  } catch (error) {
    next(error);
  }
};

export default getAllOfferedProducts;
