<!-- by your name -->
<template>
    <div>
        <p class="font1">重置密码</p>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="新的密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <el-button style="margin-top: 12px;" @click="submitForm('ruleForm2')" class="gbtn top1">下一步</el-button>
    </div>
</template>

<script>
export default {
  data() {
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
    return {
      ruleForm2: {
        pass: "",
        checkPass: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      },
      active:3,
      partNum:'part4',
      
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
           this.$emit('next',this.partNum,this.active,this.ruleForm2)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.font1 {
  color: white;
  padding-top: 30px;
} 
.top1 {
  margin-top: 30px !important;
}
.el-button {
  line-height: 8px;
  color: white;
  padding: 12px 50px;
}
.demo-ruleForm {
  padding-top: 30px;
}
.el-input{
  width: 70% !important;
    margin-right: 60px !important;
}
.el-form-item{
  margin-left: 45px !important;
}


</style>