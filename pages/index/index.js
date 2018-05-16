var newData = require("../../data/data.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../image/banner.png',
      '../../image/banner.png',
      '../../image/banner.png',
      '../../image/banner.png',
    ],
    indicator: true,
    interval: 5000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var dynamicList = [
      {
        Type: "简章",
        text: "2018年艺考时间表及注意事项"
      },
      {
        Type: "真题",
        text: "高考政策改革、加分、调整、史上最全汇总"
      },
      {
        Type: "测试",
        text: "2018年九大美院校考时间出炉，你准备好了吗？"
      }
    ];
    var questionItem = [
      {
        src: "../image/avatarDemo.png",
        author: "我是一句播音员",
        title: "作为一句播音员，日常需要花很多的时间训练，有好办法吗？",
        content: "笑靥如花，真情如花，希望如花，生命亦如花。每个人都有自己喜爱的花，每个人都有许多理由善待自己，把一生的光阴凝成时光长河中的一瓣恒久的心香。在盛开的那一刹那，灿烂夺目的它。",
        contentImg1: "../../../image/banner.png",
        contentImg2: "../../../image/banner.png"
      },
      {
        src: "../image/avatarDemo.png",
        author: "我是一句播音员",
        title: "作为一句播音员，日常需要花很多的时间训练，有好办法吗？",
        content: "笑靥如花，真情如花，希望如花，生命亦如花。每个人都有自己喜爱的花，每个人都有许多理由善待自己，把一生的光阴凝成时光长河中的一瓣恒久的心香。在盛开的那一刹那，灿烂夺目的它。笑靥如花，真情如花，希望如花，生命亦如花。每个人都有自己喜爱的花，每个人都有许多理由善待自己，把一生的光阴凝成时光长河中的一瓣恒久的心香。在盛开的那一刹那，灿烂夺目的它。",
        contentImg1: "../../../image/banner.png",
        contentImg2: "../../../image/banner.png"
      },
      {
        src: "../image/avatarDemo.png",
        author: "我是一句播音员",
        title: "作为一句播音员，日常需要花很多的时间训练，有好办法吗？",
        content: "笑靥如花，真情如花，希望如花，生命亦如花。每个人都有自己喜爱的花，每个人都有许多理由善待自己，把一生的光阴凝成时光长河中的一瓣恒久的心香。在盛开的那一刹那，灿烂夺目的它。",
        contentImg1: "../../../image/banner.png",
        contentImg2: "../../../image/banner.png"
      },
    ]
    this.setData({
      dynamicList:dynamicList,
      newData:newData.newData,
      questionItem: questionItem
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
//去问驱蚊器我
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})