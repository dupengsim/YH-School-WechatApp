// pages/question/otherIndex/otherIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    otherArr: ["提问", "回答", "粉丝"],
    sub_animationData: {},
    subCurrentTab: 0,
  },
  onSubNav: function (event) {
    var index = event.target.dataset.index;
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
      delay: 0
    })
    animation.left((index * 130) + (50 * index) + 106 + 'rpx').step()
    this.setData({
      sub_animationData: animation.export(),
      subCurrentTab: event.target.dataset.index,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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