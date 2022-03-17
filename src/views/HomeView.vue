<template>
  <div class="home" :style="{ backgroundColor: RandomColor }">
    <input
      class="button"
      type="button"
      value="新增調色盤"
      @click="palette(1)"
    />
    <input
      class="button"
      type="button"
      value="刪除調色盤"
      @click="palette(-1)"
    />
    <br />
    <div class="content" v-for="i in paletteQty" :key="i">
      <ColorPalette :color="choose[i - 1]" />
      <select v-model="chooseInput[i - 1]" @change="changeType(i - 1)">
        <option disabled style="display: none">請選擇輸入方式</option>
        <option>text</option>
        <option>radio</option>
        <option>select</option>
      </select>
      <input
        v-show="chooseInput[i - 1] === 'text'"
        placeholder="rgb(r,g,b)、white、Hex"
        type="text"
        v-model="textVal[i - 1]"
        @input="changeType(i - 1)"
      />
      <input
        v-show="chooseInput[i - 1] === 'radio'"
        type="radio"
        id="one"
        value="black"
        v-model="radioVal[i - 1]"
        @change="changeType(i - 1)"
      />
      <label v-show="chooseInput[i - 1] === 'radio'" for="one">black</label>
      <input
        v-show="chooseInput[i - 1] === 'radio'"
        type="radio"
        id="two"
        value="white"
        v-model="radioVal[i - 1]"
        @change="changeType(i - 1)"
      />
      <label v-show="chooseInput[i - 1] === 'radio'" for="two">white</label>
      <select
        v-show="chooseInput[i - 1] === 'select'"
        v-model="selectVal[i - 1]"
        @change="changeType(i - 1)"
      >
        <option>red</option>
        <option>green</option>
        <option>blue</option>
      </select>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ColorPalette from "@/components/ColorPalette.vue";

export default {
  name: "HomeView",
  components: {
    ColorPalette,
  },
  data: () => ({
    RandomColor: "",
    paletteQty: 0,
    textVal: [],
    radioVal: [],
    selectVal: [],
    chooseInput: [],
    choose: [],
  }),
  methods: {
    palette(val) {
      if (this.paletteQty === 0 && val === -1) {
        return;
      }
      this.paletteQty += val;
      val > 0 ? this.textVal.push("rgb(255,255,255)") : this.textVal.length--;
      val > 0 ? this.radioVal.push("white") : this.radioVal.length--;
      val > 0 ? this.selectVal.push("red") : this.selectVal.length--;
      val > 0
        ? this.chooseInput.push("請選擇輸入方式")
        : this.chooseInput.length--;
    },
    changeType(index) {
      if (this.chooseInput[index] === "text") {
        this.choose[index] = this.textVal[index];
      } else if (this.chooseInput[index] === "radio") {
        this.choose[index] = this.radioVal[index];
      } else {
        this.choose[index] = this.selectVal[index];
      }
    },
  },
  computed: {},
  created() {
    this.RandomColor = this.GLOBAL.RandomColor();
  },
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
}
.content {
  text-align: start;
  font-size: 1.2rem;
  input,
  select {
    font-size: 1.2rem;
    margin: 20px;
  }
}
.button {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background: #ff4a4a;
  font-size: 1.2rem;
  color: #e6e6e6;
  text-decoration: none;
  margin: 20px;
  &:hover {
    background: #ff5959;
    color: #ffffff;
  }
}
</style>
