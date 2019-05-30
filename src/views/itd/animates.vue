<template>
  <div class="animates">
    <button v-on:click="show = !show">Toggle</button>
    <div class="flex" style="flex-wrap: wrap">
      <div v-for="item in animateList" :key="item">
        <transition :name="item">
          <p v-if="show">hello</p>
        </transition>
      </div>
    </div>
    <div v-for="(item, index) in geminiList" :key="item+'In'" class="flex">
      <div v-for="(items) in direct" :key="items+index">
        <transition :name="item+'In'+items">
          <p v-if="show">hello</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "animates",
  data() {
    return {
      show: true,
      animateList: [
        "bounce",
        "flash",
        "pulse",
        "rubberBand",
        "shake",
        "swing",
        "tada",
        "wobble",
        "jello",
        "heartBeat",
        "flip",
        "jackInTheBox"
      ],
      geminiList: ["bounce", "fade", "lightSpeed", "zoom", "roll", "slide"],
      direct: ["Down", "Left", "Up", "Right"]
    };
  }
};
</script>

<style lang="scss" scoped>
.animates {
  color: black;
  padding: 10px;
  button: {
    padding: 5px;
  }
  p {
    padding: 5px;
    font-size: 2rem;
  }
}
</style>
