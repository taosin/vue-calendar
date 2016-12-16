<!-- 2016-09-01 -->
<template>

<!-- <div v-show="show" class="xsxsxs" @click="show=false">
-->  <div class="c-date-container">
<div v-show="show" class="c-xsxsxs" @click="show=false"></div>
<!-- 输入框 -->
<input type="text" @focus="show=true"  v-model="datetime" class="date-input" :placeholder="options.placeholder">
<!-- main -->
<div class="c-main" v-show="show" transition="c-main" transition-mode="out-in">
  <div class="c-top c-clearfix">
    <!-- choose year -->
    <div class="c-left">
      <span @click="updateYear(-1)">
        <svg width="16" height="16" viewBox="0 -2 14 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g class="transform-group"><g transform="scale(0.015625, 0.015625)"><path d="M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872l-318.016 318.048 318.016 318.016c18.752 18.752 18.752 49.12 0 67.872C696.544 907.328 684.256 912 671.968 912z" fill="#5e7a88"></path></g></g></svg>
      </span>
      <input class="" type="text" v-model="current.year">
      <span @click="updateYear(1)">
        <svg width="16" height="16" viewBox="0 -2 14 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g class="transform-group"><g transform="scale(0.015625, 0.015625)"><path d="M761.056 532.128c0.512-0.992 1.344-1.824 1.792-2.848 8.8-18.304 5.92-40.704-9.664-55.424L399.936 139.744c-19.264-18.208-49.632-17.344-67.872 1.888-18.208 19.264-17.376 49.632 1.888 67.872l316.96 299.84-315.712 304.288c-19.072 18.4-19.648 48.768-1.248 67.872 9.408 9.792 21.984 14.688 34.56 14.688 12 0 24-4.48 33.312-13.44l350.048-337.376c0.672-0.672 0.928-1.6 1.6-2.304 0.512-0.48 1.056-0.832 1.568-1.344C757.76 538.88 759.2 535.392 761.056 532.128z" fill="#5e7a88"></path></g></g></svg>
      </span>
    </div>
    <!-- choose month -->
    <div class="c-right">
      <span @click="updateMonth(-1)">
        <svg width="16" height="16" viewBox="0 -2 14 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g class="transform-group"><g transform="scale(0.015625, 0.015625)"><path d="M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872l-318.016 318.048 318.016 318.016c18.752 18.752 18.752 49.12 0 67.872C696.544 907.328 684.256 912 671.968 912z" fill="#5e7a88"></path></g></g></svg>
      </span>
      <input class="" type="text" v-model="month">
      <span @click="updateMonth(1)">
        <svg width="16" height="16" viewBox="0 -2 14 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g class="transform-group"><g transform="scale(0.015625, 0.015625)"><path d="M761.056 532.128c0.512-0.992 1.344-1.824 1.792-2.848 8.8-18.304 5.92-40.704-9.664-55.424L399.936 139.744c-19.264-18.208-49.632-17.344-67.872 1.888-18.208 19.264-17.376 49.632 1.888 67.872l316.96 299.84-315.712 304.288c-19.072 18.4-19.648 48.768-1.248 67.872 9.408 9.792 21.984 14.688 34.56 14.688 12 0 24-4.48 33.312-13.44l350.048-337.376c0.672-0.672 0.928-1.6 1.6-2.304 0.512-0.48 1.056-0.832 1.568-1.344C757.76 538.88 759.2 535.392 761.056 532.128z" fill="#5e7a88"></path></g></g></svg>
      </span>
    </div>
  </div>
  <div class="weekdays">
    <span class="cell" v-for="(index, weekday) in current.weekdays" track-by="$index">{{weekday}}</span>
  </div>
  <!-- choose date -->
  <div class="middle clearfix">
    <span class="cell" v-bind:style="{ width: start * 30 + 'px' }"></span>
    <span class="cell {{currentDay-1 === $index?'current-day':''}}" v-for="i in days" track-by="$index" @click="chooseDate($index+1)">{{i+1}}</span>
  </div>

  <div class="bottom clearfix">
    <!-- 准确时间 -->
    <div class="time left"></div>
    <!-- 操作按钮 -->
    <div class="c-op">
      <span class="c-tool-bar c-cancel" @click="cancel">取消</span>
      <span class="c-tool-bar c-submit" @click="ok">确定</span>
    </div>
  </div>
</div>
</div>
</div>
</template>
<script>
  import _ from 'underscore'
  const util = require('./util')

  const defaultOptions = {
  }

  export default {
    props: {
      options: {
        type: Object,
        twoWay: false
      },
      date: {
        type: String,
        twoWay: true
      }
    },
    data () {
      return {
        opts: _.extend({}, this.options, defaultOptions),    // configrations
        // 当前显示的时间
        current: {
          weekdays: [],
          year: 0,
          month: 0,
          day: 0,
          hours: 0,
          mintues: 0,
          seconds: 0,
          days: 0
        },
        days: 0,
        month: 0,
        start: 0,
        show:false,
        currentDay:0,
        datetime:''
      }
    },

    created () {
      this.current = util.initDate(this.opts)
      this.days = this.current.days
      this.month = this.current.month + 1
      this.currentDay = this.date ? util.formatDate(new Date(this.date), 'dd') : util.formatDate(new Date(), 'dd')
    },
    watch:{
      datetime(){
      }
    },
    computed: { 
       // 获取当月的天数
       days () {
        return util.getDays(this.current.year)[this.current.month]
      },

       //  每个月的第一天是星期几
       start () {
        var date = new Date()
        date.setFullYear(this.current.year)
        date.setMonth(this.current.month)
        date.setDate(1)
        return date.getDay()
      }
    },

    methods: {

      // 更新年
      updateYear (op) {
        this.current.year = parseInt(this.current.year, 10);
        this.current.year += op
      },

      // 更新月
      updateMonth (op) {
        this.current.month += op
        this.current.month = this.current.month % 12
        this.month = this.current.month + 1
      },

      // 显示
      show () {

      },

      // 确认选择
      ok () {
        if(this.currentDay){
          const str = this.current.year + ' ' + this.month + ' ' + this.currentDay;
          this.datetime = util.formatDate(new Date(str), 'yyyy-MM-dd').toString();
        }else{
          this.datetime = util.formatDate(new Date(), 'yyyy-MM-dd').toString();
        }
        this.show = false;
        this.date = this.datetime;
      },

      // 取消按钮
      cancel () {
        this.show = false;
      },
      chooseDate(index){
        this.currentDay = index;
      }
    }
  }

</script>
<style type="text/css">
 .c-left {
  float: left;
}
.date-input{
  width: 240px;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding-left: 10px;
  position: relative;
}
.date-input:focus,
.c-left input:focus, .c-right input:focus{
  outline: none;
}
.c-right {
  float: right;
}
.c-left input, .c-right input{
  width: 50px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 2px;
  height: 20px;
}
.c-clearfix:after {
  content: ' ';
  display: block;
  clear: both;
}

.flex {
  display: flex;

}
.flex > .flex-item-1 {
  flex: 1;
}

.top {

}
.c-date-container{
  position: relative;;
}
.c-xsxsxs{
  background: none;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.3);
  /*background-color: #ccc;*/
  position: fixed;
  top: 0;
  left: 0;
}
.c-main {
  width: 240px;
  border: solid 1px #ddd;
  padding: 10px 12px;
  position: absolute;
  margin-top: 20px;
  transition: all .5s ease;
  border-radius: 5px;
  z-index: 9999;
  background-color: #fff;
}
.c-main-enter, .c-main-leave {
  opacity: 0;
  transform: translate3d(0,-10px, 0);
}
.cell {
  vertical-align: middle;
  text-align: center;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  float: left;
  line-height: 30px;
  cursor: pointer;
}
.current-day{
  background: #E05555;;
  color: #fff;
  transition: background .5s;
}

.middle {
  height: 210px;
  .cell:hover {
    background: #eee;
  }
}
.c-op{
  margin-top: 10px;
  text-align: center;
}
.c-tool-bar{
  border: 1px solid #333;
  padding: 5px 10px;
  border-radius: 5px;
}
.c-cancel{
  background-color: red;
  color: white;
  cursor: pointer;
}
.c-submit{
  border: none;
  background: #529DF5;
  color: #fff;
  text-align: center;
  cursor: pointer;
}
</style>