<!-- by your name -->
<template>
  <div class="bg">
    <el-container>
      <el-header>
        <component v-bind:is="back"></component>
      </el-header>
      <el-main>
        <el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
          <el-step title="输入帐号"></el-step>
          <el-step title="手机验证"></el-step>
          <el-step title="重置密码"></el-step>
          <el-step title="找回成功"></el-step>
        </el-steps>
        <div class="center cbox fontcenter" id="part">
          <component v-bind:is="showWho" @next="change" :forgerValue="forgerValue"></component>
        </div>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import part1 from "../components/part/part1";
import part2 from "../components/part/part2";
import part3 from "../components/part/part3";
import part4 from "../components/part/part4";
import back from "../components/back.vue";
export default {
  components: { part1, part2, part3, part4, back },
  data() {
    return {
      showWho: part1,
      active: 0,
      back: back,
      forgerValue: {
        userId: "",
        password: "",
        passwordTwo: "",
        phoneNum: ""
      }
    };
  },
  methods: {
    change(partNum, active, fValue) {
      this.showWho = partNum;
      this.active = active;
      switch (active) {
        case 1:
          this.forgerValue.userId = fValue;
          break;
        case 2:
          this.forgerValue.phoneNum = fValue;
          break;
        case 3:
          this.forgerValue.password = fValue.pass;
          this.forgerValue.passwordTwo = fValue.checkPass;
          break;
      }
    }
  }
};
</script>
<style scoped>
.fontcenter {
  text-align: center;
}
</style>
