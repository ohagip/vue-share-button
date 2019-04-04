/**
 * VueShareButton
 */

/**
 * windowを開く
 * @param {string} url windowのURL
 * @param {number} width windowの幅
 * @param {number} height windowの高さ
 */
function openWindow(url, width, height) {
  const w = width || 600;
  const h = height || 400;
  const l = window.screen.width / 2 - w / 2;
  const t = window.screen.height / 2 - h / 2;
  window.open(
    url,
    'shareWindow',
    `scrollbars=yes, width=${w}, height=${h}, left=${l}, top=${t}`
  );
}

/**
 * Twitterシェア
 * @param {string} url シェアURL
 * @param {string} text シェアテキスト
 * @param {string} hash  シェアのハッシュ
 */
function twitter(url, text, hash) {
  const shareText = encodeURIComponent(text);
  const shareHash = encodeURIComponent(hash);
  const shareUrl = `http://twitter.com/share?url=${url}&text=${shareText}&hashtags=${shareHash}`;
  openWindow(shareUrl, 500, 355);
}

/**
 * Facebookシェア
 * @param {string} url シェアURL
 */
function facebook(url) {
  const shareUrl = `http://www.facebook.com/sharer.php?u=${url}`;
  openWindow(shareUrl, 560, 715);
}

/**
 * LINEシェア
 * @param {string} url シェアURL
 */
function line(url) {
  const shareUrl = `https://social-plugins.line.me/lineit/share?url=${url}`;
  openWindow(shareUrl, 510, 510);
}

/**
 * onClickBtn
 */
function onClickBtn() {
  const s = this['__shareButton'];

  switch (s.type) {
    case 'twitter':
      twitter(s.url, s.text, s.hash);
      break;
    case 'facebook':
      facebook(s.url);
      break;
    case 'line':
      line(s.url);
      break;
  }
}

export default class VueShareButton {
  constructor() {}
}

VueShareButton.install = function (Vue) {
  Vue.directive('share-button', {
    inserted (el, binding, vnode) {
      const s = {
        onClickBtn: onClickBtn.bind(vnode)
      };

      if (typeof binding.value === 'object') {
        s.type = binding.value.type;
        s.url = binding.value.url;
        s.text = binding.value.text;
        s.hash = binding.value.hash;
      }

      el.addEventListener('click', s.onClickBtn);

      vnode['__shareButton'] = s;
    },

    unbind (el, binding, vnode) {
      const s = vnode['__shareButton'];

      el.removeEventListener('click', s.onClickBtn);

      delete vnode['__shareButton'];
    }
  });
};