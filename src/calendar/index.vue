<!-- 2016-09-01 -->
<template>
  <div class="vue-date-container">
    <!-- 输入框 -->
    <input type="text" @focus="show=true"  v-model="datetime">
    <!-- main -->
    <div class="c-main" v-show="show">
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
        <div class="op right">
          <span class="tool-bar" @click="cancel">取消</span>
          <span class="tool-bar" @click="ok">确定</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from 'underscore'
  import util from './util'

  const defaultOptions = {
  }

  export default {
    props: ['options'],
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
    },

    computed: {
      /**
       * 月份对应的天数
       */
       days () {
        return util.getDays(this.current.year)[this.current.month]
        
      },

      /**
       * 每个月的第一天是星期几
       */
       start () {
        var date = new Date()
        date.setFullYear(this.current.year)
        date.setMonth(this.current.month)
        date.setDate(1)
        return date.getDay()
      }
    },

    methods: {
      updateYear (op) {
        this.current.year += op
      },

      updateMonth (op) {
        this.current.month += op
        this.current.month = this.current.month % 12
        this.month = this.current.month + 1
      },
      show () {

      },

      // 确认选择
      ok () {
        const str = this.current.year + ' ' + this.current.month + ' ' + this.currentDay;
        this.datetime = util.formatDate(new Date(str), 'yyyy-MM-dd hh:mm:ss');
      },

      // 取消按钮
      cancel () {

      },

      chooseDate(index){
        this.currentDay = index;
        alert(index);
      }
      }
  }

  </script>
  <style type="text/css">
   .c-left {
    float: left;
  }

  .c-right {
    float: right;
  }
  .c-left input, .c-right input{
    width: 50px;
    text-align: center;
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
  .c-main {
    width: 210px;
    border: solid 1px #ccc;
    padding: 10px 12px;
  }
  .cell {
    vertical-align: middle;
    text-align: center;
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    float: left;
    line-height: 30px;
  }
  .current-day{
    background: red;
    color: #fff;
    transition: background .5s;
  }

  .middle {
    height: 210px;
    .cell:hover {
      background: #eee;
    }
  }
</style>