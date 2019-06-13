<template>
  <div class="flexibility">
    <div @touchmove.prevent>
      <div id="header-view-template">
        <div
          class="draggable-header-view"
          @touchstart="startDrag"
          @touchmove="onDrag"
          @touchend="stopDrag"
        >
          <svg class="bg" width="1000" height="560">
            <path :d="headerPath" fill="#3F51B5"></path>
          </svg>
          <div class="header">
            <slot name="header"></slot>
          </div>
          <div class="content" :style="contentPosition">
            <p v-for="item in 100" :key="item">就分手</p>
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "flexibility",
  data() {
    return {
      dragging: false,
      c: { x: 120, y: 120 },
      start: { x: 0, y: 0 },
      width: 0
    };
  },
  computed: {
    headerPath: function() {
      return (
        `M0,0 L${this.width},0 ${this.width},120` +
        "Q" +
        this.c.x +
        "," +
        this.c.y +
        " 0,120"
      );
    },
    contentPosition: function() {
      const dy = this.c.y - 120;
      const dampen = dy > 0 ? 2 : 4;
      return {
        transform: "translate3d(0," + dy / dampen + "px,0)"
      };
    }
  },
  methods: {
    startDrag: function(e) {
      e = e.changedTouches ? e.changedTouches[0] : e;
      this.dragging = true;
      this.start.x = e.pageX;
      this.start.y = e.pageY;
    },
    onDrag: function(e) {
      e = e.changedTouches ? e.changedTouches[0] : e;
      if (this.dragging) {
        this.c.x = 120 + (e.pageX - this.start.x);
        const dy = e.pageY - this.start.y;
        const dampen = dy > 0 ? 1.5 : 4;
        if (this.c.y <= 120 + dy / dampen) this.c.y = 120 + dy / dampen;
      }
    },
    stopDrag: function() {
      if (this.dragging) {
        this.dragging = false;
        dynamics.animate(
          this.c,
          {
            x: 120,
            y: 120
          },
          {
            type: dynamics.spring,
            duration: 700,
            friction: 280
          }
        );
      }
    }
  },
  mounted() {
    this.width = document.body.clientWidth;
  }
};
</script>

<style lang="scss" scoped>
.flexibility {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h1 {
    font-weight: 300;
    font-size: 1.5em;
    margin-top: 0;
    text-align: center;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: #f00;
  }

  p.context {
    text-align: center;
    font-size: 1.2em;
  }

  .draggable-header-view {
    background-color: #fff;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    width: 100%;
    // height: 560px;
    margin: 0px auto;
    position: relative;
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    overflow: hidden;
    user-select: none;
    cursor: pointer;
  }

  .draggable-header-view .bg {
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }

  .draggable-header-view .header,
  .draggable-header-view .content {
    position: relative;
    z-index: 1;
    box-sizing: border-box;
  }

  .draggable-header-view .header {
    height: 120px;
    padding: 30px 10px 0;
  }

  .draggable-header-view .content {
    color: #333;
    line-height: 1.5em;
    padding: 0 10px 10px;
  }
}
</style>
