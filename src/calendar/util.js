const util = {
  weekdays: ['日', '一', '二', '三', '四', '五', '六'],
  getDays:function(year) {
    if (this.isLeap(year)) return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]  // 闰年
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]   // 平年
  },
  // 闰年
  isLeap:function(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  },

  getStart:function (date) {
    date.setDate(1)
    return date.getDay()
  },
  /**
   * 初始化
   * @param{object} opts 用户提供的初始化信息
   */
  initDate:function (opts) {
    const dateNow = new Date()
    const year = dateNow.getFullYear()
    const month = dateNow.getMonth()  // from 0 to 11

    return {
      year: year,
      month: month,
      day: dateNow.getDate(),
      hours: dateNow.getHours(),
      mintues: dateNow.getMinutes(),
      seconds: dateNow.getSeconds(),
      days: this.getDays(year)[month],
      weekdays: this.weekdays,
      weekday: dateNow.getDay()
    }
  },
  // 日期格式化
  formatDate:function(input, format) {
    if (!input || !format) {
      return ''
    }
    input = new Date(new Date(input).getTime())
    var date = {
      'M+': input.getMonth() + 1,
      'd+': input.getDate(),
      'h+': input.getHours(),
      'm+': input.getMinutes(),
      's+': input.getSeconds(),
      'q+': Math.floor((input.getMonth() + 3) / 3),
      'S+': input.getMilliseconds()
    }
    if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (input.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in date) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ('00' + date[k]).substr(('' + date[k]).length))
      }
    }
    return format
  }
}
module.exports = util;