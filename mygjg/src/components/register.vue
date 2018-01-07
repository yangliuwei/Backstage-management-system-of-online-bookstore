<template>
  <div class="bg">
    <el-container>
      <el-header>
        <component v-bind:is="back"></component>
      </el-header>
      <el-main>
        <div class="center cbox">
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="帐号" prop="name">
              <el-input type="text" v-model="ruleForm2.name" auto-complete="off" name="userId"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" name="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" name="repassword"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input type="email" v-model="ruleForm2.email" auto-complete="off" name="email" ></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
              <el-input type="text" v-model="ruleForm2.phone" auto-complete="off" name="phoneNum" ></el-input>
            </el-form-item>
            <!-- <el-form-item label="头像" prop="avatar">
              <el-input type="text" auto-complete="off" name="avatar" v-model.trim="avatar"></el-input>
            </el-form-item>
            <el-form-item label="位置信息" prop="location">
              <el-input type="text" auto-complete="off" name="location" v-model.trim="location"></el-input>
            </el-form-item> -->
            <div class="btnbox">
              <el-form-item>
                <el-button type="primary" @click="submitForm" class="btn gbtn">提交</el-button>
                <el-button @click="resetForm('ruleForm2')" class="btn2">重置</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import back from "../components/back";
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入帐号"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        callback();
      }
    };
    return {
      // avatar: "",
      // location: "",
      back: back,
      ruleForm2: {
        name: "",
        pass: "",
        checkPass: "",
        email: "",
        phone: "",
        avatar: "",
        location: ""
      },
      rules2: {
        name: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        email: [{ validator: validateEmail, trigger: "blur" }],
        phone: [{ validator: validatePhone, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm() {
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     alert("submit!");
      //     this.$router.push('/')
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
      this.$axios.post("http://192.168.8.191/api/register", {
        userId: this.ruleForm2.name,
        password: this.ruleForm2.pass,
        passwordTwo: this.ruleForm2.checkPass,
        email: this.ruleForm2.email,
        phoneNum: this.ruleForm2.phone,
        // avatar: 1,
        // location: 1
      }).then(response=>{
        console.log(response)
        this.$router.push('/')
      }).catch(function(error){
        console.log(error)
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.center {
  margin: 60px auto;
  width: 400px;
  height: 400px;
  padding-top: 50px;
}
.btn {
  line-height: 8px;
}
.btn2 {
  height: 33px;
  line-height: 7px;
}
.btnbox {
  margin: 0px 0px 0px 22px;
  padding-top: 60px;
}
</style>
