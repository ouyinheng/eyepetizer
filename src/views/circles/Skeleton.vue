<template>
  <div class="Skeleton">
    <div class="flex between">
      <div class="skeleton-btn"></div>
      <div class="skeleton-btn"></div>
    </div>
    <mu-list class>
      <div style="width: 100%;" class="pb-2" v-for="item in 2" :key="item">
        <div class="flex">
          <div class="header pb-1">
            <div class="icon" style="width: 40px;height: 40px;border-radius:50%;background-color: #f2f4f5"></div>
          </div>
          <div class="right pt-2 pb-4">
            <div class="text ml-1 pl-2">
              <p class="mb-1" style="background:#f2f4f5;width: 120px;height: 10px;"></p>
              <p class="" style="background:#f2f4f5;width: 100px;height: 10px;"></p>
            </div>
            <p class="mt-2 ml-2" style="line-height: 1.5rem;background:#f2f4f5;width: 300px;height: 40px;"></p>
            <section class="mt-4 ml-2" style="background:#f2f4f5;width: 300px;height: 150px;"></section>
          </div>
        </div>
        <mu-divider></mu-divider>
      </div>
    </mu-list>
  </div>
</template>

<script>
export default {
  name: "Skeleton"
};
</script>

<style lang="scss" scoped>
.Skeleton {
  // height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  background-color: white;
  .skeleton {
    width: 100%;
    &-btn,
    &-card,
    &-item {
      border-radius: 10px;
      background: #f2f4f5;
      background-image: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.5) 50%,
          rgba(255, 255, 255, 0) 80%
        )
        0% 0% / 30% 100% no-repeat;
      background-repeat: no-repeat;
      animation: backpos 0.9s ease-in-out 0s infinite;
    }
    &-btn {
      width: 45%;
      height: 3rem;
    }
  }
}
</style>

