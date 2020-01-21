import mongoose from 'mongoose'
import statisData from '../../InitData/statis'

// let Schema = mongoose.Schema
// let statisSchema = new Schema({
//     date: String,
//     origin: String,
//     id: Number,
// })
// statisSchema.index({id:1})
const statisSchema = new mongoose.Schema({
	data: {}
});
statisSchema.statics.getAllApi = function(){
    return new Promise(async (resolve,reject) => {
        try{
            const count = await this.findOne()
            resolve(count)
        }catch(err){
            reject({
                name: 'ERROR_DATA',
				message: '查找数据失败',
            })
            console.error(err);
        }
    })
}
const Statis = mongoose.model('Statis',statisSchema)

Statis.findOne((err,data)=>{
    if(!data){
        Statis.create({data:statisData})
    }
})
export default Statis