// pages/academy/school/school.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    article:[
      "招生简章",
      "专业详情",
      "分数线",
      "历年真题",
      "成绩查询",
      "学校信息"
    ],
    animationData:{}
  },
  onArticle:function(event){
    var index = event.target.dataset.index;
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
      delay: 0
    });
    animation.left((index * 76) + 'px').step()
    this.setData({
      animationData: animation.export(),
      currentTab: event.target.dataset.index
    })
  },
  
  onLoad: function (options) {
  
  }

  
})