import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PetSchema = new Schema({
    name: String,
    type: String,
    age: Number
})
const UserSchema = new Schema({
    username: String,
    password: {
        type: String,
        default:"HSuxZe6F+iIHYNhzAoStcQ=="
    },
    userage: String,
    usersex: {
        type: String,
        default: '女'
    },
    avatar: String,
    default_avatar: {
        type: String,
        default: 'http://localhost:3000/images/default_avatar.jpg'
    },
	id: Number,
    createtime: String,
    status:{
        type: String,
        default: '普通用户' //兽医 商家
    },
    pet: [PetSchema],
    city: String,
})

const UserModel = mongoose.model('user',UserSchema)

export default UserModel