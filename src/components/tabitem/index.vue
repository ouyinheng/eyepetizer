<template>
  <a class="ly-tab-item" :style="$parent.value === id ? activeStyle : {color: 'black'}" @click="onItemClicked">
    <div class="ly-tab-item-icon" v-if="$parent.fixBottom">
      <slot name="icon"></slot>
    </div>
    <div class="ly-tab-item-label">
      <slot></slot>
    </div>
  </a>
</template>

<script>
export default {
  name: "LyTabItem",
  computed: {
    activeStyle() {
      return {
        color: '#ff4545'
      };
    }
  },
  data() {
    return {
      id: (this.$parent.$children.length || 1) - 1
    };
  },
  methods: {
    onItemClicked() {
      this.$parent.$emit("input", this.id);
    }
  }
};
</script>

<style>
.ly-tab-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;
}
.ly-tab-item-icon {
  margin: 0 auto 5px;
}
</style>