<template>
    <div class="index">
      <!-- <vHeader></vHeader> -->
            <el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header>
      <v-header></v-header>

    </el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container>
        {{info}}
    </div>
</template>

<script>
import vHeader from "components/header/header";
export default {
  name: "index",
  components: {
    vHeader
  },
  data() {
    return {
      info: "index"
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
