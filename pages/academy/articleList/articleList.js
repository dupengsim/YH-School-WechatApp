// pages/academy/articleList/articleList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeColor:"#28AEEB",
    backgroundColor: "#D8D8D8",
    musicSrc: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    currentProgress:0,
    currentTime: 0,
    isPlayingMusic: false
  },
 
  funtimeupdate: function (u) {
    this.setData({
      currentProgress: (Math.floor(u.detail.currentTime) / Math.floor(u.detail.duration))*100,
      currentTime: Math.floor(u.detail.currentTime / 60) + ':' + Math.floor(u.detail.currentTime % 60) 
    })
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  onCollectionTap: function(event) {
    var articleCollected = wx.getStorageSync
  },
  //音乐播放
  audioPlay: function (e) {
    if (this.data.isPlayingMusic){
      this.audioCtx.pause()
      this.setData({
        isPlayingMusic: false
      })
    } else {
      this.audioCtx.play();
      this.setData({
        isPlayingMusic: true
      })
    }
    
  },
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio')

  },

})