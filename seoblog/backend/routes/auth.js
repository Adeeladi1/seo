// const express =require('express')
// const router =express.Router()
// const {signup, signin, signout, requireSignin} =require('../controllers/auth')

// const {runValidation} =require('../validator')
// const {userSignupValidator, userSigninValidator} =require('../validator/auth')

// router.post('/signup',userSignupValidator, runValidation, signup);
// router.post('/signin',userSigninValidator, runValidation, signin);
// router.get('/signout', signout)

// //test

// router.get('/secret',requireSignin,(req, res) =>{

//     res.json({
//         message: 'you have access to secret page'
//     })
// })  
// module.exports =router;

const express = require('express');
const router = express.Router();
const {
    signup,
    signin,
    signout,
    requireSignin,
    forgotPassword,
    resetPassword,
    preSignup,
    googleLogin
} = require('../controllers/auth');

// validators
const { runValidation } = require('../validators');
const {
    userSignupValidator,
    userSigninValidator,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../validators/auth');

// router.post('/pre-signup', userSignupValidator, runValidation, preSignup);
router.post('/signup', signup);
router.post('/signin', userSigninValidator, runValidation, signin);
router.get('/signout', signout);
router.put('/forgot-password', forgotPasswordValidator, runValidation, forgotPassword);
router.put('/reset-password', resetPasswordValidator, runValidation, resetPassword);
// google login
router.post('/google-login', googleLogin);

module.exports = router;

