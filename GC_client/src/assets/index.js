// 静态资源管理

// 图片资源
export const images = {
  backTop: require('./img/backTop.png'),
  logo: require('./img/logo.png'),
  noPost: require('./img/noPost.png')
};

// 字体图标
export const fontIcon = {
  css: require('./font-icon/iconfont.css'),
  eot: require('./font-icon/iconfont.eot'),
  svg: require('./font-icon/iconfont.svg'),
  ttf: require('./font-icon/iconfont.ttf'),
  woff: require('./font-icon/iconfont.woff'),
  woff2: require('./font-icon/iconfont.woff2')
};

// 静态资源预加载
export function preloadImages() {
  Object.values(images).forEach(src => {
    const img = new Image();
    img.src = src;
  });
}
