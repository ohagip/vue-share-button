<template>
  <div id="app">
    <button class="btn" v-share-button="twitterShareData">Twitter</button>
    <button class="btn" v-share-button="facebookShareData">Facebook</button>
    <button class="btn" v-share-button="lineShareData">LINE</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      twitterShareData: {
        type: 'twitter',
        url: 'https://ohagip.github.io/vue-share-button/',
        text: 'シェアボタンのカスタムディレクティブ',
        hash: ''
      },
      facebookShareData: {
        type: 'facebook',
        url: 'https://ohagip.github.io/vue-share-button/'
      },
      lineShareData: {
        type: 'line',
        url: 'https://ohagip.github.io/vue-share-button/'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  display: inline-block;
  margin: 0 10px;
  width: 100px;
  height: 100px;
  font-size: 16px;
  font-weight: bold;
  line-height: 98px;
  color: #fff;
  border: solid 2px #000;
  background-color: #000;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  transition: all .2s ease;
}
.btn:hover {
  color: #000;
  background-color: #fff;
}
</style>
