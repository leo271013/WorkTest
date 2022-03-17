<template>
  <div class="palette">
    <div class="circle" :style="{ backgroundColor: color }"></div>
  </div>
</template>

<script>
export default {
  name: "ColorPalette",
  props: {
    color: String,
  },
};
</script>
<style scoped lang="scss">
.palette {
  display: inline-block;
  padding-left: 10%;
}
input {
  font-size: 1.5rem;
}
.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transform: translateY(35%);
}
</style>
