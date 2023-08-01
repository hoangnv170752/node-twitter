import { Request, Response, NextFunction } from 'express'
import { ParamSchema, checkSchema } from 'express-validator'

export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body
  if (email === 'hoang.nv.ral@gmail.com' && password === '123456') {
    return res.json({
      message: 'Login successful'
    })
  }
  return res.status(400).json({
    error: 'Login failed'
  })
}

export const registerValidator = checkSchema({
  name: {
    notEmpty: true,
    isLength: {
      options: {
        min: 1,
        max: 100
      }
    },
    trim: true
  },
  email: {
    notEmpty: true,
    isEmail: true,
    trim: true
  },
  password: {
    notEmpty: true,
    isString: true,
    isLength: {
      options: {
        min: 6,
        max: 50
      }
    },
    isStrongPassword: {
      options: {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
      }
    }
  },
  confirmPassword: {
    notEmpty: true,
    isString: true,
    isStrongPassword: {
      options: {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
      }
    },
    isLength: {
      options: {
        min: 6,
        max: 50
      }
    }
  },
  date_of_birth: {
    isISO8601: {
      options: {
        strict: true,
        strictSeparator: true
      }
    }
  }
})
