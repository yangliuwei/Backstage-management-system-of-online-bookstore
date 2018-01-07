<template>
    <div>
        <el-container>
            <el-header>
                <div>
                    <span class="font" >LOGO</span>
                </div>
                <div class="hb">
                    <div class="headImgBox" @click="show3 = !show3">
                        <img src="../assets/head.jpg" class="headImg">
                    </div>
                    <div style="padding-top:10px height: 200px ">
                        <el-collapse-transition>
                            <div v-show="show3">
                                <div class="transition-box">
                                    <p class="font1">我的帐号</p>
                                    <hr>
                                    <p class="font1">我的。。</p>
                                    <hr>
                                    <p class="font1" @click="loginout">退出登录</p>
                                </div>
                            </div>
                        </el-collapse-transition>
                    </div>
                </div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-row class="tac">
                        <el-menu default-active="2" class="el-menu-vertical-demo" @select="select" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                            <el-menu-item index="statistics">
                                <i class="el-icon-menu"></i>
                                <span slot="title">统计图</span>
                            </el-menu-item>
                            <el-menu-item index="book">
                                <i class="el-icon-setting"></i>
                                <span slot="title">图书</span>
                            </el-menu-item>
                        </el-menu>
                    </el-row>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>
<style>
.el-header {
  padding: 0;
  background: rgb(57, 46, 42);
  height: 110px !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 567px;
  background: rgb(57, 46, 42) !important;
}
.el-menu-item {
  background: rgb(57, 46, 42) !important;
}
.el-menu-item i {
  color: white;
}
.font {
  font-size: 45px;
  font-weight: bold;
  color: white;
  line-height: 110px;
  margin-left: 60px;
  position: absolute;
  cursor: pointer;
}
.headImgBox {
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin-top: 18px;
  overflow: hidden;
  cursor: pointer;
}
.headImg {
  width: 70px;
  height: 70px;
}
 .transition-box {
     border:1px solid gray;
    width: 100px;
    height: 95px;
    background: white;
    border-radius: 4px;
    text-align: center;
    box-sizing: border-box;
    margin-top: 4px;
    margin-left: 29px;
    font-size: 14px;
    font-weight: bold;

  
  }
  .hb{

      width: 129px;
      height: 300px;
      margin-left: 1100px;
  }
  .font1{
      padding-top: 5px;
      padding-bottom: 5px;
      cursor: pointer;
  }
</style>
<script>
export default {
      data: () => ({
      show3: false,
      userId:'',
      password:''
    }),
  methods: {
    select(index) {
      // console.log(`select(${index})`)
      this.$router.push(`/index/${index}`);
    },
    loginout(){
        this.userId=localStorage.userId,
        this.password=localStorage.password
        this.$axios.post("http://192.168.8.191/api/logout",{
            userId:this.userId,
            password:this.password
        }
).then(response=>{
    console.log(response)
    if(response.data.code===0){
        localStorage.clear()
        this.$router.push('/')
    }
    
}).catch(function(error){
    console.log(error)
})
    }

  }
};
</script>