// pages/question/question.js
var newData = require("../../data/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: ["问答", "我的问答"],
    animationData: {},
    sub_animationData:{},
    currentTab: 0,
    subCurrentTab:0,
    myQuestionArr: ["我的提问", "我的回答", "我的粉丝", "收藏夹"],
    questionItem:{}
  },
  onArticle: function (event) {
    var index = event.target.dataset.index;
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
      delay: 0
    });
    animation.left((index * 76) + 112 + 'px').step()
    this.setData({
      animationData: animation.export(),
      currentTab: event.target.dataset.index,
    })
  },
  onSubNav:function(event) {
    var index = event.target.dataset.index;
    var animation = wx.createAnimation({
      duration:500,
      timingFunction: 'ease-out',
      delay:0
    })
    animation.left((index * 130) + (50*index) + 'rpx').step()
    this.setData({
      sub_animationData: animation.export(),
      subCurrentTab: event.target.dataset.index,
    })
  },
  onQuestionList: function (event) {
    wx.navigateTo({
      url: 'questionList-noA/questionList-noA',
    })
  },
  onQuestionListAnswer: function (event) {
    wx.navigateTo({
      url: 'questionList/questionList',
    })
  },
  onQuestionTab: function (event) {
    wx.navigateTo({
      url: 'questionBtn/questionBtn',
    })
  },
  onMqAnswerNoTap: function(event) {
    wx.navigateTo({
      url: 'myQuestionList-noA/myQuestionList-noA',
    })
  },
  onOtherIndex: function(event) {
    wx.navigateTo({
      url: 'otherIndex/otherIndex',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      questionItem: newData.questionItem
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
