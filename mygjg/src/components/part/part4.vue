<!-- by your name -->
<template>
    <div>
        <i class="el-icon-circle-check font2"></i>
        <p class="font3">密码重置成功</p>
      
        <button class="gbtn btn" @click="loginPage">返回</button>
    </div>
</template>

<script>
export default {
   props:['forgerValue'],
  data() {
    return {
     
    };
  },
  methods:{
      loginPage() {
        let that = this
         this.$axios
        .post("http://192.168.8.191/api/forget", this.$props.forgerValue)
        .then(function(response) {
          console.log(response)
          if (response.data.code === 0) {
           that.$router.push("/");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      
    }
  }
};
</script>
<style scoped>
.font2 {
  color: white;
  font-size: 80px;
  padding-top: 60px;
}
.font3 {
  color: white;
  padding-top: 20px;
  font-size: 30px;
}
.btn {
  border: 1px solid;
  border-color: rgb(38, 59, 16);
  border-radius: 4px;
  width: 100px;
  height: 33px;
  margin-top: 20px;
  cursor: pointer;
}
.el-button {
  line-height: 8px;
  color: white;
  padding: 12px 50px;
}
</style>