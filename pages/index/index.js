//index.js
//获取应用实例
const app = getApp()
const movies = [
  {
    url:'/img/movie1.jpg',
    name:'泰坦尼克号',
    director:'姜大伟',
    description:'When Galsang flowers Blood / When Ge Sanghua '
  },
  {
    url:'/img/movie2.jpg',
    name:'我不是药神',
    director:'徐峥',
    description:'普通中年男子程勇（徐峥 饰）经营着一家保健品店，失意又失婚。不速之客吕受益'
  }
]
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 1000,
    duration: 1000,
    movies:movies
  },
})
