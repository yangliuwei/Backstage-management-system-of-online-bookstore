<!-- by your name -->
<template>
  <div>
      <i class="el-icon-back loginPage" @click="loginPage"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  methods:{
      loginPage() {
      this.$router.push("/");
    },
  }
}

</script>
<style scoped>
</style>