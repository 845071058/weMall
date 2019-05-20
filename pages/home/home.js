// pages/home/home.js
const ajax = require('../../utils/ajax.js');
const utils = require('../../utils/util.js');
var sectionData = [];
var ifLoadMore = null;
var page = 1;//默认第一页
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbars: null,
    currentTab: 0,
    banners: [{
        "url": "http://192.168.5.6:9999/images/201905181558169428313221.jpg"
    }, {
        "url": "http://192.168.5.6:9999/images/201905181558169428313221.jpg"
      }, {
        "url": "http://192.168.5.6:9999/images/201905181558169428313221.jpg"
      }, {
        "url": "http://192.168.5.6:9999/images/201905181558169428313221.jpg"
      }, {
        "url": "http://192.168.5.6:9999/images/201905181558169428313221.jpg"
      }, {
        "url": "http://192.168.5.6:9999/images/201905181558169428313221.jpg"
      }],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    menus: null,
    brands: null,
    hidden: false,
    bnrUrl: [{
      "url": "http://192.168.5.6:9999/images/201905181558169428313221.jpg"
    }, {
        "url": "http://192.168.5.6:9999/images/201905181558169428313221.jpg"
      },{
        "url": "http://192.168.5.6:9999/images/201905181558169428313221.jpg"
      }, {
        "url": "http://192.168.5.6:9999/images/201905181558169428313221.jpg"
      }]

  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    var that = this;
    //加载navbar导航条
    that.navbarShow();
    //加载banner轮播
    //that.bannerShow();
    //加载menu分类导航菜单
    //that.menuShow();
    //加载新品特卖
    //that.brandShow();

    //加载福利专场
    //that.newGoodsShow();
  },
  navbarShow: function () {
    var that = this;
    console.log(1);
    ajax.request({
      method: 'GET',
      url: 'test/test',
      success: data => {
        // that.setData({
        //   navbars: data.result
        // })
        console.log(1)
      }
    })
  }
})