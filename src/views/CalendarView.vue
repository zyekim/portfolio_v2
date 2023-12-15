<template>
  <div class="calendar-page">
    <h1>calendar</h1>
    <div class="calendar">
      <div class="calendar__nav">
        <button class="calendar__arrow calendar__arrow--prev" @click="goPrev(currMonth)">&lt;</button>
        <button class="calendar__date">
          <span>{{ currYear }}</span>년
          <span>{{ currMonth }}</span>월
        </button>
        <button class="calendar__arrow calendar__arrow--next" @click="goNext(currMonth)">&gt;</button>
      </div>
      <ul class="calendar__day">
        <li
          v-for="day in ['일','월','화','수','목','금','토']"
          :key="day"
        >
        {{ day }}
        </li>
      </ul>
      <div class="calendar__weeks">
        <ul class="calendar__week">
          <li v-for="(date, idx) in dates" :key="idx"
          :class="getDateColor(date.isCurrMonth,idx)">
            <p class="date">{{ date.date }}</p>
          </li>
        </ul>
      </div>
    </div>
    <p style="text-align:left;padding: 10px 0 10px 10px;"><b style="font-size: 25px">10</b> 일</p>
    <div class="schedule">
      <div class="schedule__item color1">
        일정 1
      </div>
      <div class="schedule__item color2">
        일정 2
      </div>
      <div class="schedule__item color3">
        일정 3
      </div>
      <div class="schedule__item schedule__item-add">
        일정추가 <button>+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarView',
  data() {
    return {
      currDate: 0,
      currYear: 0,
      currMonth: 0,
      dates: [],
    }
  },
  created() {
    this.init()
  },
  // watch: {
  //   currYear: function(value){
  //     console.log(value)
  //   }
  // },
  methods: {
    init(){
      const selectedDate = new Date();

      this.currYear = selectedDate.getFullYear();
      this.currMonth = selectedDate.getMonth() + 1; // 0 based
      this.currDate = selectedDate.getDate();

      this.buildCalendar(this.currMonth, this.currYear);

    },
    goPrev(month){
      if(month == 1){
        this.currMonth = 12;
        this.currYear = this.currYear - 1;
      }else {
        this.currMonth -= 1;
      }

      this.buildCalendar(this.currMonth, this.currYear);
    },
    goNext(month) {
      if(month == 12){
        this.currMonth = 1;
        this.currYear = this.currYear + 1;
      }else {
        this.currMonth += 1;
      }
      this.buildCalendar(this.currMonth, this.currYear);
    },

    // },
    buildCalendar(month,year){

      // 이전 달의 마지막 날 날짜와 요일 구하기
        let startDay = new Date(year, month - 1, 0);
        let prevDate = startDay.getDate();
        let prevDay = startDay.getDay();

        // 이번 달의 마지막날 날짜와 요일 구하기
        let endDay = new Date(year, month, 0);
        let nextDate = endDay.getDate();
        let nextDay = endDay.getDay();

        console.log(typeof prevDate)
        console.log(prevDay,nextDate,nextDay);

        let prevDates = [];
        for(let prev = prevDate - prevDay; prev <= prevDate ; prev++) {
          let data = {
            date : prev,
            isCurrMonth : false,
          }
          prevDates.push({...data});
        }

        let currDates = [];
        for(let date = 1; date <= nextDate ; date++) {
          let data = {
            date : date,
            isCurrMonth : true,
          }
          currDates.push({...data});
        }

        let nextDates = [];
        for(let next = 1; next <= 6 - nextDay ; next++) {
          let data = {
            date : next,
            isCurrMonth : false,
          }
          nextDates.push({...data});
        }

        return this.dates=[
          ...prevDates,
          ...currDates,
          ...nextDates,
        ]

    },
    getDateColor(isCurrMonth,idx) {
      // date
      if(!isCurrMonth) {
        if(idx%7 == 0) return 'holiday opacity'
        else if(idx%7 == 6) return 'saturday opacity'
        else return 'opacity'
      }else{
        if(idx%7 == 0) return 'holiday';
        else if(idx%7 == 6) return 'saturday';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar-page {
  margin: 0 auto;
  width: 100%;
  max-width: 430px;

  h1 {
    padding: 15px 0;
    font-size: 22px;
    font-weight: bold;
    line-height: 1.5;
  }
}

.calendar {
  width: 100%;
  &__nav {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    button {
      padding: 10px;
      border: 0;
      outline: none;
      background-color: transparent;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.25;
      &.calendar__arrow {
        cursor: pointer;
        &:active ,
        &:hover {
          background-color: #eee;
          border-radius: 4px;
        }
      }
    }
  }

  &__day {
    padding: 10px 0;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border-bottom: 1px solid #eee;
    li {
      font-size: 14px;
      color: rgb(110, 110, 110);
      &:first-of-type {
        color: #d63333;
      }
      &:last-of-type {
        color: #3367d6;
      }
    }
  }

  &__weeks {
    padding-top: 15px;
    box-shadow: 0 11px 13px -17px rgba(0, 0, 0, 0.8);
  }

  &__week{
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    li {
      padding: 8px 6px;
      height: 90px;

      .date {
        position: relative;
        text-align: left;
        font-size: 14px;
        font-weight: 500;
        &:before {
          content: "";
          position: absolute;
          left: -3px;
          top: -1px;
          width: 25px;
          height: 25px;
          border-radius: 100%;
          background-color: transparent;
          z-index: -1;
        }
      }
      &.holiday > .date{
        color: #d63333;
      }
      &.saturday > .date {
        color: #3367d6;
      }
      &.opacity > .date {
        opacity: 0.4;
      }
      &.today > .date {
        color: #fff;
        &:before{
          background-color: #8fe096;
        }
      }
    }
  }
}
.schedule {
  display: flex;
  flex-flow: column nowrap;
  flex-flow: 1;
  row-gap: 10px;
  &__item{
    padding: 10px;
    min-height: 30px;
    border-radius: 4px;
    color: #fff;
    &.color1{
      background-color: rgb(250, 217, 71);
    }
    &.color2{
      background-color: rgb(250, 92, 71);
    }
    &.color3{
      background-color: rgb(131, 228, 168);
    }
  }
}
</style>