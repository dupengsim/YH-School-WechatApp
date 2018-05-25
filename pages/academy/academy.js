var newData = require("../../data/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    searchVal: "",
    pHeight: "",
    currentTab: 1,
    isSelect: false,
    isScore: false,
    isSpecialty: false,
    pitchOnVal: "",
    isBg: false,
    isActive: 0,
    turnOff: '',
    animationData: {},
  },

  /**
   * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    let that = this;
    that.setData({
      areaType: newData.areaType,
    });
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight),
          that.setData({
            pHeight: res.windowHeight - 40,
          })
      },
    })
  },
  showMask: function (event) {
    this.setData({
      isShow: true,
      searchVal: ""
    })
  },
  hideMask: function (event) {
    this.setData({
      isShow: false
    })
  },
  switchNav: function (event) {
    this.setData({
      currentTab: event.target.dataset.current - 1,
      isBg: false,
      isSelect: false,
      isScore: false,
      isSpecialty: false,
      turnOff: event.target.dataset.text,
    })
  },
  onSelect: function (event) {
    this.setData({
      isSelect: true,
      isBg: true,
      isScore: false,
      isSpecialty: false
    })
  },
  onScore: function (event) {
    this.setData({
      isScore: true,
      isBg: true,
      isSelect: false,
      isSpecialty: false
    })
  },
  onSpecialty: function (event) {
    this.setData({
      isSpecialty: true,
      isBg: true,
      isSelect: false,
      isScore: false
    })
  },
  hidealpha: function (event) {
    this.setData({
      isSelect: false,
      isScore: false,
      isSpecialty: false,
      isBg: false
    })
  },
  pitchOn: function (event) {
    console.log(event.currentTarget.dataset.text);
  },
  setActive: function (event) {
    var index = event.target.dataset.index;
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
      delay: 0
    });
    animation.left((index * 146) + 52 + 'px').step()
    this.setData({
      animationData: animation.export()
    })
    this.setData({
      isActive: index,
    })
  },
  onSchoolTap:function(event) {
    wx.navigateTo({
      url: '../../pages/academy/school/school',
    })
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