# vue-s-calendar

> a component of calendar for vue

## Useage

```bash
npm install vue-s-calendar

```

## eg:

```html
<template>
  <div>
    <Calendar :options="options" :date.sync="datetime"></Calendar>
  </div>
</template>

<script>
import Calendar from 'vue-s-calendar/src/calendar/index'
export default {
  components: {
    Calendar
  },
  data () {
    return {
      options: {
        placeholder: '请选择日期'
      },
      datetime: ''
    }
  }
}
</script>
```
