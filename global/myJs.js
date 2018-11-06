/**
 * Created by xiaobai on 2018/8/30.
 */
/**
 * Created by xiaobai on 2018/5/17.
 */
let myJs = {
  //清除字符串空格  type 1-所有空格  2-前后空格  3-前空格 4-后空格
  trim: function (str, type) {
    switch (type) {
      case 1:
        return str.replace(/\s+/g, '')
      case 2:
        return str.replace(/(^\s*)|(\s*$)/g, '')
      case 3:
        return str.replace(/(^\s*)/g, '')
      case 4:
        return str.replace(/(\s*$)/g, '')
      default:
        return str
    }
  },
  //首字母大小写切换
  /*type
   1:首字母大写
   2：首页母小写
   3：大小写转换
   4：全部大写
   5：全部小写
   * */
  changeCase: function (str, type) {
    function ToggleCase (str) {
      var itemText = ''
      str.split('').forEach(
        function (item) {
          if (/^([a-z]+)/.test(item)) {
            itemText += item.toUpperCase()
          } else if (/^([A-Z]+)/.test(item)) {
            itemText += item.toLowerCase()
          } else {
            itemText += item
          }
        })
      return itemText
    }

    switch (type) {
      case 1:
        return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
          return v1.toUpperCase() + v2.toLowerCase()
        })
      case 2:
        return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
          return v1.toLowerCase() + v2.toUpperCase()
        })
      case 3:
        return ToggleCase(str)
      case 4:
        return str.toUpperCase()
      case 5:
        return str.toLowerCase()
      default:
        return str
    }
  },
  //字符串替换(字符串,要替换的字符,替换成什么)
  replaceAll: function (str, AFindText, ARepText) {
    let raRegExp = new RegExp(AFindText, 'g')
    return str.replace(raRegExp, ARepText)
  },
  //checkType('165226226326','phone')
  //false
  //大家可以根据需要扩展
  checkType: function (str, type) {
    switch (type) {
      case 'email':
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
      case 'phone':
        return /^1[3|4|5|7|8][0-9]{9}$/.test(str)
      case 'tel':
        return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
      case 'number':
        return /^[0-9]$/.test(str)
      case 'english':
        return /^[a-zA-Z]+$/.test(str)
      case 'chinese':
        return /^[\u4E00-\u9FA5]+$/.test(str)
      case 'lower':
        return /^[a-z]+$/.test(str)
      case 'upper':
        return /^[A-Z]+$/.test(str)
      default :
        return true
    }
  },
  //checkPwd('12asdASAD')
  //3(强度等级为3)
  checkPwd: function (str) {
    var nowLv = 0
    if (str.length < 6) {
      return nowLv
    }

    if (/[0-9]/.test(str)) {
      nowLv++
    }

    if (/[a-z]/.test(str)) {
      nowLv++
    }

    if (/[A-Z]/.test(str)) {
      nowLv++
    }

    if (/[.|-|_]/.test(str)) {
      nowLv++
    }

    return nowLv
  },
  //字符串重复次数
  countStr: function (str, strSplit) {
    return str.split(strSplit).length - 1
  },
  //时间处理成 ..之前
  timeFormat: function (dateTimeStamp) {
    let result
    let minute = 1000 * 60
    let hour = minute * 60
    let day = hour * 24
    // var halfamonth = day * 15
    let month = day * 30
    let year = month * 12
    let now = new Date().getTime()
    let diffValue = now - (new Date(dateTimeStamp).getTime())

    if (diffValue < 0) {
      return
    }
    let yearC = diffValue / year
    let monthC = diffValue / month
    let weekC = diffValue / (7 * day)
    let dayC = diffValue / day
    let hourC = diffValue / hour
    let minC = diffValue / minute
    if (yearC >= 1) {
      result = '' + window.parseInt(yearC) + '年前'
    } else if (monthC >= 1) {
      result = '' + window.parseInt(monthC) + '月前'
    } else if (weekC >= 1) {
      result = '' + window.parseInt(weekC) + '周前'
    } else if (dayC >= 1) {
      result = '' + window.parseInt(dayC) + '天前'
    } else if (hourC >= 1) {
      result = '' + window.parseInt(hourC) + '小时前'
    } else if (minC >= 1) {
      result = '' + window.parseInt(minC) + '分钟前'
    } else {
      result = '刚刚'
    }
    return result
  },
  /**
   * 日期格式化类（必须掌握）
   * API:
   * G  Era 标志符  Text  AD
   y  年  Year  1996; 96
   M  年中的月份  Month  July; Jul; 07
   w  年中的周数  Number  27
   W  月份中的周数  Number  2
   D  年中的天数  Number  189
   d  月份中的天数  Number  10
   F  月份中的星期  Number  2
   E  星期中的天数  Text  Tuesday; Tue
   a  Am/pm 标记  Text  PM
   H  一天中的小时数（0-23）  Number  0
   k  一天中的小时数（1-24）  Number  24
   K  am/pm 中的小时数（0-11）  Number  0
   h  am/pm 中的小时数（1-12）  Number  12
   m  小时中的分钟数  Number  30
   s  分钟中的秒数  Number  55
   S  毫秒数  Number  978
   z  时区  General time zone  Pacific Standard Time; PST; GMT-08:00
   Z  时区  RFC 822 time zone  -0800

   */
  timeUsualFormat: function (date) {
    let year = new Date(date).getFullYear()
    let month = (new Date(date).getMonth() + 1).toString().length === 1 ? '0' + (new Date(date).getMonth() + 1) : (new Date(date).getMonth() + 1)
    let dates = (new Date(date).getUTCDate()).toString().length === 1 ? '0' + new Date(date).getUTCDate() : new Date(date).getUTCDate()
    let hour = new Date(date).getHours().toString().length === 1 ? '0' + new Date(date).getHours() : new Date(date).getHours()
    let minutes = new Date(date).getMinutes().toString().length === 1 ? '0' + new Date(date).getMinutes() : new Date(date).getMinutes()
    let seconds = new Date(date).getSeconds().toString().length === 1 ? '0' + new Date(date).getSeconds() : new Date(date).getSeconds()
    let tims = year + '/' + month + '/' + dates + '' + ' ' + hour + ':' + minutes + ':' + seconds
    return tims
  },
  //按输入格式 显示时间
  timeFormatChange: function (date, format) {
    let _newDate = new Date(date)
    let o = {
      'M+': _newDate.getMonth() + 1, //月份
      'd+': _newDate.getDate(), //日
      'h+': _newDate.getHours(), //小时
      'm+': _newDate.getMinutes(), //分
      's+': _newDate.getSeconds(), //秒
      'q+': Math.floor((_newDate.getMonth() + 3) / 3), //季度
      'S': _newDate.getMilliseconds() //毫秒
    }
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (_newDate.getFullYear() + '').substr(4 - RegExp.$1.length))
    }

    for (let k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return format
  },
  //比较函数
  compareObj: function (obj1, obj2) {
    if (obj1 === obj2) {
      return true
    }
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false
    }
    for (let k in obj1) {
      if (obj1[k] !== obj2[k]) {
        return false
      }
    }
    return true
  },
  //对象数组去重
  removeDuplicate: function (arr, atr) {
    let hash = {}
    const newArr = arr.reduceRight((item, next) => {
      hash[next.atr] ? '' : hash[next.atr] = true && item.push(next)
      return item
    }, [])
    return newArr
  },
// 包含对象的数组位置
  findIndex: function (arr, item, atr, atr2) {
    for (let i = 0; i < arr.length; i++) {
      if (eval('arr[' + i + '].' + atr) === eval('item.' + atr2)) {
        return i
      }
    }
    return false
  },
  // 包含对象的数组去重
  findIt: function (arr, item, atr, atr2) {
    for (let i = 0; i < arr.length; i++) {
      if (eval('arr[' + i + '].' + atr) === eval('item.' + atr2)) {
        return true
      }
    }
    return false
  },
  // 文件大小
  sizeFormat: function (value) {
    var newVal
    if (value >= 0) {
      if (value < 1024) {
        return value + 'B'
      } else if (value >= 1024 && value < 1024 * 1024) {
        newVal = value / 1024
        return newVal.toFixed(2) + 'KB'
      } else if (value >= 1024 * 1024 && value < 1024 * 1024 * 1024) {
        newVal = value / (1024 * 1024)
        return newVal.toFixed(2) + 'MB'
      } else if (value >= 1024 * 1024 * 1024 && value < 1024 * 1024 * 1024 * 1024) {
        newVal = value / (1024 * 1024 * 1024)
        return newVal.toFixed(2) + 'GB'
      } else if (value >= 1024 * 1024 * 1024 * 1024 && value < 1024 * 1024 * 1024 * 1024 * 1024) {
        newVal = value / (1024 * 1024 * 1024 * 1024)
        return newVal.toFixed(2) + 'TB'
      } else if (value >= 1024 * 1024 * 1024 * 1024 * 1024 && value < 1024 * 1024 * 1024 * 1024 * 1024 * 1024) {
        newVal = value / (1024 * 1024 * 1024 * 1024 * 1024)
        return newVal.toFixed(2) + 'PB'
      } else if (value >= 1024 * 1024 * 1024 * 1024 * 1024 * 1024 && value < 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024) {
        newVal = value / (1024 * 1024 * 1024 * 1024 * 1024 * 1024)
        return newVal.toFixed(2) + 'EB'
      } else if (value >= 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 && value < 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024) {
        newVal = value / (1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024)
        return newVal.toFixed(2) + 'ZB'
      } else if (value >= 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 && value < 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024) {
        newVal = value / (1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024)
        return newVal.toFixed(2) + 'YB'
      }
    } else {
      return '0B'
    }
  },
  inputValLength: function (value, length) {
    //length代表可以输入得小数位数
    value = value.replace(/[^\d.]/g, '')  //清除“数字”和“.”以外的字符
    value = value.replace(/\.{2,}/g, '.') //只保留第一个. 清除多余的
    value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
    let str = '^(\\-)*(\\d+)\\.([0-9]{1,' + length + '}).*$'//给正则表达式代入动态参数 ，注意--反斜杠需要转义
    let reg = new RegExp(str)
    value = value.replace(reg, '$1$2.$3')//只能输入两个小数-- reg=/^(\-)*(\d+)\.([0-9]{1,2}).*$/
    if (value.indexOf('.') < 0 && value !== '') { //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
      value = parseFloat(value)
    }
    return value
  },
  connectSocket: function (host) {
    window.webSocket = new WebSocket(host)
    window.webSocket.onopen = evt => {
      console.log('webSocket连接成功')
      let data = {type: 'bind'}
      let json = JSON.stringify(data)
      window.webSocket.send(json)
    }
    /* 连接关闭 */
    window.webSocket.onclose = evt => { console.log('webSocket连接关闭') }
    /* 接收服务器推送消息 */
    window.webSocket.onmessage = evt => {
      let data = JSON.parse(evt.data)
      console.log(data)
    }
    /* 连接发生错误时 */
    window.webSocket.onerror = (evt, e) => { console.log(evt) }
  },
  strLength: function (text) {
    let txt = text + ''
    let vv = txt.replace(/[^\x00-\xff]/g, 'aa')
    return vv.length
  }
}
export default myJs
