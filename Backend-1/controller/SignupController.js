const UserModel = require('../model/UserModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'Hi_Hi_Secret_key_World'

exports.signUp = async (req, res, next)=>{

    const {email, password, copyEmail, copyPassword} = req.body;

    const emailVaild = email.trim().length > 0 
    const passwordValid = password.trim().length > 0

    if(emailVaild && passwordValid){

        const hashPasswrod = await bcrypt.hash(password, 8);

        if(!hashPasswrod){
            const error = new Error();
            error.message = '비밀번호 해쉬화 중에 에러'
            error.status = false
            return next(error)
        }

        const user = await UserModel.create({email, password : hashPasswrod});
        if(!user){
            const error = new Error();
            error.message = '저장 중 에러'
            error.status = false
            return next(error)
        }
        return res.json({message : 'Success Signup', data : user})
    } else {
        return res.json({message : 'Failed Signup', status : false})
    }
}

exports.login = async (req, res, next)=>{
    console.log('login-controller')
    const {email, password} = req.body;

    const valid = await UserModel.findOne({where : {email : email}});

    if(!valid){
        const error = new Error();
        error.message = '일치하는 이메일이 없습니다.'
        error.status = false
        return next(error)
    }

    const passwordValid = bcrypt.compare(password, valid.password);

    if(!passwordValid){
        const error = new Error();
        error.message = 'Error 발생'
        error.status = false
        return next(error);
    }

    const JToken = jwt.sign({email},SECRET_KEY, {
        expiresIn : '1h'
    } );

    return res.json({message : 'Login Success', token : JToken});

}

exports.logout = async (req, res, next)=>{
    const token = req.get('Authorization').split(' ')[1];
    console.log(token)

    jwt.verify(token, SECRET_KEY, (err, decoded)=>{
        if(err){
            return res.json({message : 'token err', status : false})
        } else {
            return res.json({message : 'Logout Go', status : true, data : decoded})
        }
    });

    
}