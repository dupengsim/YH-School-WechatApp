// pages/question/questionList/questionList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Onswitch: false,
    animationData: {}

  },
  onRevert: function (event) {
    if (this.data.Onswitch) {
      this.setData({
        Onswitch: false
      })
    } else {
      this.setData({
        Onswitch: true
      })
    }
  },
  onAnswertap: function(event){
    wx.navigateTo({
      url: '../answerPage/answerPage',
    })
  },
  onReply: function(event){
    wx.navigateTo({
      url: '../replyPage/replyPage',
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
    var animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 1000,
      timingFunction: "linear",
      delay: 0

    })
    this.animation = animation
    animation.height(200).step()

    this.setData({
      animationData: animation.export()
    })

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