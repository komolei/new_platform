<template>
    <div class="header">
        header
        <!-- <el-row>
          <el-button type="info" @click="getLogInStatus"></el-button>
          <el-button type="success" @click="changeLogInStatus"></el-button>
        </el-row> -->

    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import store from "@/store/index";
import api from "../../fetch/api";
import vLogin from "components/login/login";
import vRegister from "components/login/register";
export default {
  name: "headerNav",
  components: {
    vLogin,
    vRegister
  },
  props: [],
  data() {
    return {
      userInfo: {
        name: "komolei"
      }
    };
  },
  computed: {
    ...mapGetters({
      logInStatus: "getLogInStatus"
    })
  },
  methods: {
    ...mapActions(["changeIsLogInStatus"]),
    getLogInStatus() {
      console.log("this.logIn status is1:", this.logInStatus);
      console.log("this.logIn status is2:", this.$store.getters.getLogInStatus);
    },
    changeLogInStatus() {
      store.dispatch("changeIsLogInStatus", true);
      console.log("this.logIn status is:", this.logInStatus);
    }
  }
};
</script>

<style lang="scss" scoped>
div.header {
}
</style>
