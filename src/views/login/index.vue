<template>
  <div class="login">
    <img src="@/assets/logo.png" alt class="logo">
    <mu-form ref="form" :model="form" class="mu-demo-form">
      <mu-form-item prop="phone" :rules="emailRules">
        <mu-text-field class="font-md" v-model="form.phone" color="#ff4545" placeholder="请输入邮箱号码"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="password" :rules="passwordRules">
        <mu-text-field
          class="font-md"
          v-model="form.password"
          color="#ff4545"
          placeholder="请输入密码"
          :action-icon="visibility ? 'visibility_off' : 'visibility'"
          :action-click="() => (visibility = !visibility)"
          :type="visibility ? 'password' : 'text'"
        ></mu-text-field>
      </mu-form-item>
      <mu-button round full-width color="#ff4545" @click="submit">登录</mu-button>
    </mu-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Store from "@/vuex";
export default {
  name: "login",
  computed: {
    ...mapGetters({ auths: "getAuths" })
  },
  data() {
    return {
      visibility: true,
      form: {
        phone: "",
        password: ""
      },
      emailRules: [
        { validate: val => !!val, message: "请输入手机号码" },
        { validate: val => val.length >= 3, message: "邮箱长度大于3" }
      ],
      passwordRules: [
        { validate: val => !!val, message: "请输入密码" },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: "密码长度大于3小于10"
        }
      ]
    };
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    submit() {
      this.$refs.form.validate().then(result => {
        if (result) {
            this.login(this.form).then( res => {
                // console.log(res)
                this.$router.push('/home')
            })
        } else {
          return;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: white;
  box-sizing: border-box;
  padding: 10px 30px;
  .logo {
    display: block;
    width: 80px;
    height: 80px;
    margin: 80px auto 40px;
    background-color: transparent;
  }
}
</style>
