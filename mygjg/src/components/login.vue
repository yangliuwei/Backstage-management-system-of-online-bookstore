<template>
  <div class="bg top1">
    <div class="center cbox">
      <span class="title">登 录</span>
      <form>
        <div>
          <label class="font">帐号:</label>
          <el-input placeholder="请输入帐号" name="username" v-model.trim="userId"></el-input>
        </div>
        <div class="top">
          <label class="font">密码:</label>
          <el-input type="password" placeholder="请输入密码" name="password" v-model.trim="password"></el-input>
          <br>
          <div class="link">
            <span class="font2" @click="forget">找回密码</span>
            <span class="font2" @click="register">注册帐号</span>
          </div>
        </div>
        <el-button type="primary" class="btn gbtn" @click="submitForm">登录</el-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      userId: "",
      password: ""
    };
  },
  methods: {
    submitForm() {
      let self = this; //这个this指向vue实例
      this.$axios
        .post("http://192.168.8.191/api/login", {
          userId: this.userId,
          password: this.password
        })
        .then(function(response) {
          console.log(response);
          if (response.data.code === 0) {
            localStorage.userId=self.userId
            localStorage.password=self.password
            self.$router.push("/index");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    register() {
      this.$router.push("/register");
    },
    forget() {
      this.$router.push("/forget");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top1 {
  padding-top: 130px;
}
.center {
  margin: 0 auto;
  width: 400px;
  height: 250px;
  padding: 20px;
  padding-top: 30px;
}
.title {
  font-size: 30px;
  font-weight: bold;
  display: inline-block;
  margin: 0 0 30px 168px;
  color: white;
}

.font {
  font-size: 15px;
  padding-left: 30px;
  color: white;
}
.top {
  margin-top: 10px;
}
.btn {
  padding: 9px 125px;
  margin: 18px 0 0 67px;
}
.link {
  display: inline-block;
  margin-left: 255px;
  padding-top: 10px;
}
.font2 {
  font-size: 10px;
  cursor: pointer;
  color: white;
}
.font2:hover {
  color: rgb(210, 208, 224);
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
