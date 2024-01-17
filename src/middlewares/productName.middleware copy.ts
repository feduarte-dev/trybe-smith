import { NextFunction, Request, Response } from 'express';

const validateField = (fieldName: string) => (req: Request, res: Response, next: NextFunction) => {
  const fieldValue = req.body[fieldName];

  if (!fieldValue) {
    return res.status(400).json({ message: `"${fieldName}" is required` });
  }

  if (typeof fieldValue !== 'string') {
    return res.status(422).json({ message: `"${fieldName}" must be a string` });
  }

  if (fieldValue.length < 3) {
    return res.status(422)
      .json({ message: `"${fieldName}" length must be at least 3 characters long` });
  }

  next();
};

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const validateName = validateField('name');
  const validatePrice = validateField('price');
  
  validateName(req, res, () => { validatePrice(req, res, next); });
};

export default validateProduct;
