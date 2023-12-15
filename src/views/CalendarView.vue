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
          <li v-for="date in dates" :key="date">
            <p class="date">{{ date }}</p>
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
  methods: {
    init(){
      const selectedDate = new Date();

      this.currYear = selectedDate.getFullYear();
      this.currMonth = selectedDate.getMonth() + 1; // 0 based
      this.currDate = selectedDate.getDate();

      this.getFisrtLastDay();

    },
    goPrev(month){
      if(month == 1){
        this.currMonth = 12;
        this.currYear -= 1;
      }else {
        this.currMonth -= 1;
      }
    },
    goNext(month) {
        if(month == 12){
        this.currMonth = 1;
        this.currYear += 1;
      }else {
        this.currMonth += 1;
      }
    },
    // buildCalendar(month,year) {

    // },
    getFisrtLastDay(){
// month, year
      // 이전 달의 마지막 날짜와 요일 구하기
      // let firstDate = new Date(this.currYear,this.currMonth - 1, 1).getDate();
      // let firstDay = new Date(this.currYear,this.currMonth , 0).getDay();

      // let lastDate = new Date(this.currYear,this.currMonth, 0).getDate();
      // console.log(lastDate, firstDate,firstDay);


      // 이전 달의 마지막 날 날짜와 요일 구하기
        let startDay = new Date(this.currYear, this.currMonth - 1, 0);
        let prevDate = startDay.getDate();
        let prevDay = startDay.getDay();

        // 이번 달의 마지막날 날짜와 요일 구하기
        let endDay = new Date(this.currYear, this.currMonth, 0);
        let nextDate = endDay.getDate();
        let nextDay = endDay.getDay();

        console.log(typeof prevDate)
        console.log(prevDay,nextDate,nextDay);

        let prevDates = [];
        for(let prev = prevDate - prevDay; prev <= prevDate ; prev++) {
          prevDates.push(prev);
        }

        let currDates = [];
        for(let date = 1; date <= nextDate ; date++) {
          currDates.push(date);
        }

        let nextDates = [];
        for(let next = 1; next <= 6 - nextDay ; next++) {
          nextDates.push(next);
        }

        return this.dates=[
          ...prevDates,
          ...currDates,
          ...nextDates,
        ]

    }
    // getFirstLast(){

    // }


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
      cursor: pointer;
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
        text-align: left;
        font-size: 16px;
        font-weight: 500;
      }
      &:first-of-type > .date {
        color: #d63333;
      }
       &:last-of-type > .date {
        color: #3367d6;
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