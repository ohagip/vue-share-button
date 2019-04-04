# vue-share-button
シェアボタンのカスタムディレクティブ  

[DEMO](https://ohagip.github.io/vue-share-button/)

## Install
```
npm install git+https://github.com/ohagip/vue-share-button.git
```
or  
`./src/vue-share-button.js`をコピペ

## Usage
```js
import VueShareButton from 'vue-share-button'
Vue.use(VueShareButton)
```

```vue
<button v-share-button="twitterShareData">Twitter</button>
<button v-share-button="facebookShareData">Facebook</button>
<button v-share-button="lineShareData">LINE</button>
```

```js
twitterShareData = {
  type: 'twitter',
  url: 'https://ohagip.github.io/vue-share-button/',
  text: 'シェアボタンのカスタムディレクティブ',
  hash: ''
};

facebookShareData = {
  type: 'facebook',
  url: 'https://ohagip.github.io/vue-share-button/'
};

lineShareData = {
  type: 'line',
  url: 'https://ohagip.github.io/vue-share-button/'
};
```

---
##Vue CLI npm script

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
