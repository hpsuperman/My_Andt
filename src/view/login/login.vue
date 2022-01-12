<template>
  <div class="menhu">
    <div class="from-wrap">
      <a-form-model
        class="form-model"
        ref="ruleForm"
        v-bind="layout"
      >
       <a-form-model-item >
      <div>QQT SRM 系统</div>
        </a-form-model-item>
       <a-form-model-item >
          <a-input type="text" placeholder="请输入ELS账号"/>
        </a-form-model-item>
        <a-form-model-item >
          <a-input type="password" placeholder="密码" autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item>
          <a-button type="primary">登录</a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      layout: {
        labelCol: { span: 5 },
        wrapperCol: { span: 24 },
      },
    };
  },
};
</script>

<style lang="scss">
@import "./login.scss";
</style>