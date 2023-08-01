import { Request, Response } from 'express'

export const loginController = (req: Request, res: Response) => {
  res.json({
    message: 'Login successful'
  })
}

export const registerController = (req: Request, res: Response) => {
  res.json({
    message: 'Login successful'
  })
}
