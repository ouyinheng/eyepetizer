<template>
  <div class="Skeleton">
    <div class="flex between">
      <div class="skeleton-btn"></div>
      <div class="skeleton-btn"></div>
    </div>
    <div class="skeleton-card mt-4"></div>
    <div class="skeleton-item mt-4"></div>
    <div class="skeleton-item mt-4"></div>
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
  .skeleton {
    width: 100%;
    &-btn,
    &-card,
    &-item {
      border-radius: 10px;
      background: rgb(194, 207, 214);
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%
      );
      background-size: 20rem 20rem;
      animation: skeleton-stripes 0.5s linear infinite;
    }
    &-btn {
      width: 45%;
      height: 3rem;
    }
    &-card {
      width: 100%;
      height: 10rem;
    }
    &-item {
      width: 100%;
      height: 15rem;
      display: flex;
      .icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: gainsboro;
      }
      .name {
        width: 100%;
        p {
          padding: 10px;
          background-color: gainsboro;
        }
      }
    }
  }

  @keyframes skeleton-stripes {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 20rem 0;
    }
  }
}
</style>

