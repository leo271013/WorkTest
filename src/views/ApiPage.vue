<template>
  <div class="apipage" :style="{ backgroundColor: RandomColor }">
    <input type="text" placeholder="搜尋" v-model="searchWords" />
    <table>
      <tr v-for="i in Search" :key="i.name">
        <td>{{ i.name }}</td>
        <td>is from</td>
        <td>{{ i.city }}</td>
      </tr>
    </table>
    <span class="note"
      >api :
      <a
        href="https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
        target="_blank"
        rel="noreferrer noopenner"
        >https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8</a
      ></span
    >
  </div>
</template>
<script>
export default {
  data: () => ({
    RandomColor: "",
    searchWords: "",
  }),
  methods: {},
  computed: {
    FirstApi() {
      return this.$store.state.FirstApi;
    },
    Search() {
      return this.FirstApi.filter(
        (searchResult) =>
          searchResult.name
            .toLowerCase()
            .match(this.searchWords.toLowerCase()) ||
          searchResult.city.toLowerCase().match(this.searchWords.toLowerCase())
      );
    },
  },
  created() {
    this.RandomColor = this.GLOBAL.RandomColor();
  },
};
</script>

<style lang="scss" scoped>
.apipage {
  text-align: center;
  input {
    margin: 30px;
    font-size: 1.2rem;
  }
}
table {
  margin: auto;
  font-size: 2rem;
  color: white;
  border-spacing: 20px 10px;
}
.note {
  a {
    color: black;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
}
</style>
