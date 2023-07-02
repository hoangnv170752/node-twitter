import { Request, Response, NextFunction } from "express";

export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (email === "hoang.nv.ral@gmail.com" && password === "123456") {
    return res.json({
      message: 'Login successful',
    });
  }
  return res.status(400).json({
    error: 'Login failed',
  });
}