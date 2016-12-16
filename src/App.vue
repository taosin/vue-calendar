<template>
  <div id="app">
  <calendar :options="options" :date.sync="datetime"></calendar>
  {{datetime}}
  </div>
</template>

<script>
import calendar from './calendar/index'
export default {
  components: {
    calendar
  },
  data () {
    return {
      options: {
        placeholder: '请选择日期'
      },
      datetime: '2016-12-18'
    }
  }
}
</script>

<style>
/*html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}*/
</style>
