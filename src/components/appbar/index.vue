<template>
  <div class="appbar">
    <mu-appbar style="width: 100%;" color="transparent">
      <mu-button icon slot="left" v-if="menu">
        <mu-icon value="keyboard_arrow_left"></mu-icon>
      </mu-button>{{title}}
      <slot></slot>
    </mu-appbar>
  </div>
</template>

<script>
export default {
  name: "appbar",
  props: {
    title: {
      type: String,
      default: 'title'
    },
    menu: {
      type: Boolean,
      default: false,
    }
  }
};
</script>

<style lang="scss" scoped>
.appbar {
  width: 100%;
  position: fixed;
  top: 30px;
  z-index: 10;
  background-color: transparent;
  .mu-elevation-4 {
    box-shadow: none;
  }
}
</style>

