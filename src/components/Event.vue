<template>
  <div class="timeTableEntry">
    <div class="calendar">
        <div class="calendarHead">
        </div>
        <div class="calendarContent">
        </div>
    </div>
    <div class="timeTableItemList">
        <div class="timeTableItem">
            <b><p v-html="event.title" /></b><br>
            <p v-html="event.content" />
            <p v-html="event.customdate" />
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .timeTableEntry {
    margin-bottom: 15px;
    padding: 10px 6px;
    border-radius: 13px;
    -webkit-box-shadow: 0 2px 8px 0 #d8d8d8;
    box-shadow: 0 2px 8px 0 #d8d8d8;
  }
  .calendar {
    width: 62px;
    height: 62px;
    background-color: #f3f3f3;
    border-radius: 10px;
    position: absolute;
    .calendarHead {
      width: 62px;
      height: 23px;
      position: absolute;
      background-color: #ffd175;
      border-radius: 10px 10px 0 0;
      font-size: 16px;
      letter-spacing: 1px;
      padding-left: 4px;
      color: #fff;
      text-align: center;
    }
    .calendarContent {
      width: 62px;
      position: absolute;
      top: 18px;
      font-size: 30px;
      letter-spacing: -1px;
      padding-right: 2px;
      color: #4c566b;
      text-align: center;
    }
  }
  .timeTableItemList {
    margin-left: 80px;
    min-height: 70px;
  }
</style>