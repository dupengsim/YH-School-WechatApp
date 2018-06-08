Page({
  data: {
    selectPerson: true,
    firstPerson: '播音',
    selectArea: false,
    selectArr: ["播音", "编导", "表演", "美术", "音乐", "舞蹈", "书法", "空乘"],
    article: ["气息训练", "自备稿件", "即兴评述", "攻略技巧", "收藏夹"],
    animationData: {},
    currentTab: 0,
    dataList:[
      "习近平“典”燃科技强国引擎",
      "“大朋友”习近平和小朋友",
      "上合组织与“一带一路”怎么有效对接？习近平主席这样说",
      "各地各高校深入学习贯彻习近平总书记在北京大学考察时重要讲话精神 以青春之我肩负起国家民族的希望希望希望希望希望希望希望希望",
      "商务部迅速回应白宫声明  中方的这个声明亮了！",
      "中共中央办公厅　国务院办公厅印发《关于进一步加强科研诚信建设的若干意见》",
      "三部门：住房公积金缴存总额已超12万亿元",
      "中国海军公布水下特战利器，超多罕见镜头",
      "习近平“典”燃科技强国引擎",
      "“大朋友”习近平和小朋友",
      "上合组织与“一带一路”怎么有效对接？习近平主席这样说",
      "各地各高校深入学习贯彻习近平总书记在北京大学考察时重要讲话精神 以青春之我肩负起国家民族的希望希望希望希望希望希望希望希望",
      "商务部迅速回应白宫声明  中方的这个声明亮了！",
      "中共中央办公厅　国务院办公厅印发《关于进一步加强科研诚信建设的若干意见》",
      "三部门：住房公积金缴存总额已超12万亿元",
      "中国海军公布水下特战利器，超多罕见镜头"
    ]
  },
  //点击选择类型
  clickPerson: function () {
    var selectPerson = this.data.selectPerson;
    if (selectPerson == true) {
      this.setData({
        selectArea: true,
        selectPerson: false,
      })
    } else {
      this.setData({
        selectArea: false,
        selectPerson: true,
      })
    }
  },
  //点击切换
  mySelect: function (e) {
    this.setData({
      firstPerson: e.target.dataset.me,
      selectPerson: true,
      selectArea: false,
    })
  },
  onArticle: function (event) {
    var index = event.target.dataset.index;
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
      delay: 0
    });
    animation.left((index * 76) + 'px').step()
    this.setData({
      animationData: animation.export(),
      currentTab: event.target.dataset.index,
      selectPerson: true,
    })
  },
  onLoad: function () { },
})