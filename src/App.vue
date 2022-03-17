<template>
  <div id="app">
    <div>
      <div class="nav">
        <router-link class="nav__item" to="/" :class="{ isActive: now('/') }"
          >調色盤</router-link
        >
        <router-link
          class="nav__item"
          to="/ApiPage"
          :class="{ isActive: now('/ApiPage') }"
          >看看api！</router-link
        >
      </div>
      <router-view class="view" />
    </div>
    <div class="footer">
      Copyright © {{ new Date().getFullYear() }} <strong>JIN-RONG GUO</strong>.
      All rights reserved. 版權所有© {{ new Date().getFullYear() }}
      <strong>JIN-RONG GUO</strong>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data: () => ({
    RandomColor: "",
  }),
  methods: {
    now(pathname) {
      if (location.pathname === pathname) return true;
    },
  },
  computed: {},
  async created() {
    this.$store.dispatch("getapi");
    this.RandomColor = this.GLOBAL.RandomColor();
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap");
#app {
  font-family: "Noto Sans TC", sans-serif;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #6f9630;
}
.nav {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  &__item {
    font-size: 1.5rem;
    padding: 10px;
    display: inline-block;
    background: #e7c25e;
    text-decoration: none;
    color: white;
    border-radius: 15px;
    margin-left: 10px;
    &:hover {
      background: #fa8e00;
    }
  }
}
.isActive {
  font-size: 1.7rem;
  padding: 18px;
  border-radius: 20px;
  border: none;
  background: #fa8e00;
}
.view {
  width: 700px;
  height: 500px;
  overflow: auto;
  border-radius: 25px;
}
.footer {
  position: fixed;
  bottom: 2%;
  color: rgba(255, 255, 255, 0.568);
}
</style>
