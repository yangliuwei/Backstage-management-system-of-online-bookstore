<!-- by your name -->
<template>
  <div>
    <p class="font">请输入您的账号</p>
    <el-input placeholder="请输入帐号" name="userName" class="top" v-model="userId"></el-input><br>
    <el-button style="margin-top: 12px;" @click="next" class="gbtn top1">下一步</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      partNum: "part2",
      userId:''
    };
  },
  methods: {
    next() {
      this.$emit("next", this.partNum, this.active,this.userId);
    }
  }
};
</script>
<style scoped>
.font {
  color: white;
  padding-top: 60px;
}
.top {
  padding-top: 20px;
}
.top1 {
  margin-top: 30px !important;
}
.el-button {
  line-height: 8px;
  color: white;
  padding: 12px 50px;
}
</style>