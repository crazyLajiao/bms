{/* <template>
    <div>
      <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
                <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small">
                移除
                </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="Pagination" style="text-align: left;margin-top: 10px;">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="20"
            layout="total, prev, pager, next"
            :total="count">
          </el-pagination>
      </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
          tableData: [{
            id: '12987122',
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            id: '12987123',
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            id: '12987124',
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            id: '12987125',
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          offset: 0,
          limit: 20,
          count: 4,
          currentPage: 1,
        }
    },
    created(){
        // this.initData();
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      // async initData(){
      //   try{
      //     const countData = await getUserCount();
      //     if (countData.status == 1) {
      //         this.count = countData.count;
      //     }else{
      //         throw new Error('获取数据失败');
      //     }
      //     this.getUsers();
      //   }catch(err){
      //     console.log('获取数据失败', err);
      //   }
      // },
      handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
          this.currentPage = val;
          this.offset = (val - 1)*this.limit;
          // this.getUsers()
      },
      // async getUsers(){
      //   const Users = await getUserList({offset: this.offset, limit: this.limit});
      //   this.tableData = [];
      //   Users.forEach(item => {
      //     const tableData = {};
      //     tableData.username = item.username;
      //     tableData.registe_time = item.registe_time;
      //     tableData.city = item.city;
      //     this.tableData.push(tableData);
      //   })
      // }
    },
}
</script>
<style lang="stylus" scoped>

</style> */}