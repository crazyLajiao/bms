import UserModel from '../../models/user/user'
import userlist from '../../InitData/users'

class User {
    constructor(){

    }
    async addAllUser(req,res,next){
        try{
            const allUser = await UserModel.create(userlist,function(err,docs){
                if(!err){
                    console.log('添加用户列表成功', docs);
                }
            })
            // res.send({
            //     status:1,
            //     data: allUser
            // })
        }catch(err){
            console.log('获取用户列表失败', err);
			res.send({
				status: 0,
				type: 'ERROR_GET_USER_LIST',
				message: '获取用户列表失败'
			})
        }
    }
    async getAllUser(req,res,next){
        const {limit = 20, offset = 0} = req.query;
        try{
            const allUser = await UserModel.find({}, '-_id -password').sort({id: -1}).skip(Number(offset)).limit(Number(limit))
            res.send({
                status:1,
                data: allUser
            })
        }catch(err){
            console.log('获取用户列表失败', err);
			res.send({
				status: 0,
				type: 'ERROR_GET_USER_LIST',
				message: '获取用户列表失败'
			})
        }
    }
    async getUserCount(req,res,next){
        try{
			const count = await UserModel.count()
			res.send({
				status: 1,
				count,
			})
		}catch(err){
			console.log('获取用户数量失败', err);
			res.send({
				status: 0,
				type: 'ERROR_GET_ADMIN_COUNT',
				message: '获取用户数量失败'
			})
		}
    }
    // async getAllUser(req,res,next){
        
    // }
}

export default new User();
