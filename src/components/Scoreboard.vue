<template>
  <b-row style="margin-top:10px; margin-bottom: 20px">
    <b-col>
      <b-card
        bg-variant="white"
        body-bg-variant="white"
        header="স্কোরবোর্ড"
        fluidGrow
        text-variant="black"
        header-text-variant="black"
        header-class="text-center"
        >
        <div>
          <b-row>
            <b-col>
              <b-card-text>রান: </b-card-text>
            </b-col>
            <b-col>
              <b-card-text style="float: right">{{ score }}</b-card-text>
            </b-col>
          </b-row>
          <hr style="background-color: yellow; height: 2px">
          <b-row>
            <b-col cols="4">
              <p style="float: left">উইকেট:</p>
            </b-col>
            <b-col style="float: right;">
              <div :class="{notOut: !isWicketFirst, out: isWicketFirst}" style="float: right"></div>
              <div :class="{notOut: !isWicketSecond, out: isWicketSecond}" style="float: right"></div>
              <div :class="{notOut: !isWicketThird, out: isWicketThird}" style="float: right"></div>
              <div :class="{notOut: !isWicketFourth, out: isWicketFourth}" style="float: right"></div>
              <div :class="{notOut: !isWicketFifth, out: isWicketFifth}" style="float: right"></div>
            </b-col>
          </b-row>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { eventBus } from "../main"; 

export default {
  name: "scoreboard",
  props: {
    status: Number
  },
  data: function() {
    return {
      score: 0,
      wicket: 0,
      isWicketFirst: false,
      isWicketSecond: false,
      isWicketThird: false,
      isWicketFourth: false,
      isWicketFifth: false
    };
  },
  methods: {
    run: function() {
      this.score += this.status;
    }
  },
  created() {
    eventBus.$on("changeStatus", run => {
      if (run != -1) {
        this.score += run;
      } else {
        this.wicket += 1;
        switch (this.wicket) {
          case 1:
            this.isWicketFirst = true;
            break;
          case 2:
            this.isWicketSecond = true;
            break;
          case 3:
            this.isWicketThird = true;
            break;
          case 4:
            this.isWicketFourth = true;
            break;
          case 5:
            this.isWicketFifth = true;
            eventBus.feedbackStatus(this.score);
            break;
        }
      }
    });
    eventBus.$on('refresh', () => {
      this.score= 0,
      this.wicket= 0,
      this.isWicketFirst= false,
      this.isWicketSecond= false,
      this.isWicketThird= false,
      this.isWicketFourth= false,
      this.isWicketFifth= false
    });
  }
};
</script>

<style scoped>

.card-header{
  font-size: 15px;
}


.notOut {
  background-color: #4caf50;
  border: none;
  height: 20px;
  width: 20px;
  display: inline-block;
  padding: 10px;
  margin: 4px 2px;
  border-radius: 50%;
}
.out {
  background-color: red;
  border: none;
  height: 20px;
  width: 20px;
  display: inline-block;
  padding: 10px;
  margin: 4px 2px;
  border-radius: 50%;
}
</style>
