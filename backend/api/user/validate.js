import { response } from '../../response/response.js'
import expressValidation from 'express-validator'

const check = expressValidation.check
const validationResult = expressValidation.validationResult
export const validateCreteUser = [
  check('username')
    .isLength({ min: 3 })
    .exists()
    .withMessage('Name should be atleast 3 characters'),
  check('email')
    .exists()
    .isEmail()
    .withMessage('Please enter a valid email'),
  check('password')
    .exists()
    .isLength({ min: 6 })
    .withMessage('Password should be atleast 6 characters'),
  (req, res, next) => {
    try {
      validationResult(req).throw()
      next()
    } catch (error) {
      response.error(req, res, error.array()[0].msg, 400)
    }
  }
]

/**
 check('role')
    .exists()
    .custom((value, { req }) => {
      if (value !== 'admin' || value !== 'basic') {
        throw new Error('Please enter a valid role')
      }
      return true
    })
 */

/*
export const createUserValidation = (req, res, next) => {
  try {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
      return response.error(req, res, 'Please fill all the fields', 400)
    }
    if (username.length < 3) {
      return response.error(req, res, 'UserName should be atleast 3 characters', 400)
    }
    if (password.length < 6) {
      return response.error(req, res, 'Password should be atleast 6 characters', 400)
    }
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return response.error(req, res, 'Please enter a valid email', 400)
    }
    next()
  } catch (error) {
    console.log(error)
    return response.error(req, res, 'Something went wrong', 500)
  }
}*/
