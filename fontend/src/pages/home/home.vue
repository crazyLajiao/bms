<template>
    <div>
        
        <el-row :gutter="20">
            <a href="https://github.com/crazyLajiao/vue-full-stack-project" class="github-corner" target="_blank" aria-label="Follow me on GitHub">
            <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#409EFF; color:#fff; position: absolute; top: 0; border: 0; right: 0;cursor:pointer" aria-hidden="true">
                <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
                <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
            </svg>
            </a>
            <el-col :span="16">
                <div class="home-header-left">
                    <div class="home-header-left-child">
                        <span class="avatar-wrapper">
                            <img v-if="!user.avatar || user.avatar == 'null' || user.avatar == ''" src="~@/assets/images/avatar.gif" alt="">
                            <img v-else :src="user.avatar" alt="">
                        </span>
                    </div>
                    <div class="home-header-left-secondChild">
                        <div class="home-header-left-secondChild-top">
                            {{ greetings }}{{ user.username }}，祝你开心每一天！
                        </div>
                        <div class="home-header-left-secondChild-bottom">
                            事业部 | 不会切图的画图仔
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <section class="data_section">
			<header class="section_title">数据统计</header>
			<el-row :gutter="20" style="margin-bottom: 10px;text-align: center;">
                <el-col :span="4"><div class="data_list today_head"><span class="data_num head">当日数据：</span></div></el-col>
				<el-col :span="4"><div class="data_list"><span class="data_num">{{userCount}}</span> 新增用户</div></el-col>
				<el-col :span="4"><div class="data_list"><span class="data_num">{{orderCount}}</span> 新增订单</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{shopCount}}</span> 新增商家</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{adminCount}}</span> 新增管理员</div></el-col>
			</el-row>
            <el-row :gutter="20" style="text-align: center;">
                <el-col :span="4"><div class="data_list all_head"><span class="data_num head">总数据：</span></div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{allUserCount}}</span> 注册用户</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{allOrderCount}}</span> 订单</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{allShopCount}}</span> 商家</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{allAdminCount}}</span> 管理员</div></el-col>
            </el-row>
		</section>
        <tendency :sevenDate='sevenDate' :sevenDay='sevenDay'></tendency>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import tendency from '../../components/tendency/tendency'
export default {
    data(){
        return {
            // userCount: null,
            // orderCount: null,
            // adminCount: null,
            // allUserCount: null,
            // allOrderCount: null,
            // allAdminCount: null,
            // sevenDay: [],
            // sevenDate: [[],[],[]],
            userCount: 30,
            orderCount: 16,
            shopCount: 30,
            adminCount: 30,
            allUserCount: 2600,
            allOrderCount: 6200,
            allShopCount: 1300,
            allAdminCount: 1300,
            sevenDay: ["2019-12-12","2019-12-13","2019-12-14","2019-12-15","2019-12-16","2019-12-17","2019-12-18"],
            sevenDate: [[53, 54, 30, 13, 64, 94, 30],[145, 17, 37, 4, 138, 19, 16],[121, 151, 67, 39, 111, 123, 40],[141, 111, 47, 39, 121, 103, 30]],
        }
    },
    components:{
        tendency
    },
    computed: {
    greetings() {
      const currentHours = new Date().getHours();
      let res;
      if (currentHours < 6) {
        res = '快睡觉，小心猝死哦！';
      } else if (currentHours < 9) {
        res = '今天，又是充满希望的一天！';
      } else if (currentHours < 12) {
        res = '午饭吃的什么呢？';
      } else if (currentHours < 14) {
        res = '记得午休哦！';
      } else if (currentHours < 17) {
        res = '各部门注意，马上6点了！';
      } else if (currentHours < 19) {
        res = '吃完饭不要马上运动哦！';
      } else {
        res = '在加班吗？辛苦了！';
      }
      return res;
    },
    ...mapGetters(['user'])
  },
}
</script>
<style lang="stylus" scoped>
.home-header-left {
    height: 100%;
    display: flex;
}

.home-header-left {
    .home-header-left-child {
        flex: 0 0 72px;

        & span {
            border-radius: 72px;
            display: block;
            height: 72px;
            width: 72px;
            overflow: hidden;

            & img {
                display: block;
                height: 100%;
                width: 100%;
            }
        }
    }

    .home-header-left-secondChild {
        flex: 1;
        margin-left: 24px;

        .home-header-left-secondChild-top {
            margin-top: 4px;
            color: rgba(0, 0, 0, 0.85);
            font-size: 20px;
            font-weight: 500;
            line-height: 28px;
            margin-bottom: 12px;
        }

        .home-header-left-secondChild-bottom {
            line-height: 22px;
            color: rgba(0, 0, 0, 0.45);
        }
    }
}
.data_section{
    padding: 20px;
	margin-bottom: 40px;
    .section_title{
        text-align: center;
        font-size: 30px;
        margin-bottom: 20px;
    }
    .data_list{
        text-align: center;
        font-size: 14px;
        color: #666;
        border-radius: 6px;
        background: #E5E9F2;
        .data_num{
            color: #333;
            font-size: 26px;

        }
        .head{
            border-radius: 6px;
            font-size: 22px;
            padding: 4px 0;
            color: #fff;
            display: inline-block;
        }
    }
    .today_head{
        background: #FF9800;
    }
    .all_head{
        background: #20A0FF;
    }
}
</style>