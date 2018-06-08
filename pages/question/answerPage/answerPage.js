// pages/question/answerPage/answerPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textLength:0,
    content:""
  },
  upPic: function(event){
    wx.chooseImage({
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'], 
      success: function(res) {
        var tempFilePaths = res.tempFilePaths
      },
    })
  },
  textAreaBlur: function (evt) {
    this.setData({
      content: evt.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onHide: function(options) {
    
  },
 
  onUnload: function (options) {
    if(this.data.content.length != 0){
      wx.showModal({
        title: '',
        content: '确认退出？已撰写内容会保存草稿',
        cancelText:"退出",
        confirmText:"继续回答",
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }

      })
    }
  },

  
})