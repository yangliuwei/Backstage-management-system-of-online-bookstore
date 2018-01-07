<!-- by your name -->
<template>
    <div>
        <p class="font">请输入您绑定的手机</p>
        <el-input placeholder="完整的手机号码" type="text" name="phone" class="top" v-model="phone"></el-input><br>
        <el-button style="margin-top: 12px;" @click="next" class="gbtn top1">下一步</el-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
      partNum: "part3",
      phone: ""
    };
  },
  methods: {
    next() {
      this.$emit("next", this.partNum, this.active,this.phone);
    }
  }
};
</script>
<style scoped>
.font {
  color: white;
  padding-top: 60px;
}
.font1 {
  color: white;
  padding-top: 30px;
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