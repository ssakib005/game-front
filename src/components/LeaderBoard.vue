<template>
  <b-row style="margin-top:10px; margin-bottom: 20px">
    <b-col>
      <b-card
        bg-variant="white"
        header="লিডারবোর্ডে"
        text-variant="black"
        header-class="text-center"
        fluidGrow
      >
      <b-card-text class="sub-title">শীর্ষ ৫ সর্বোচ্চ স্কোরর </b-card-text>
        <div class="details" v-for="(d, index) in leaderData">
          <b-row>
            <b-col cols="2">{{ index+1 }}</b-col>
            <b-col cols="6">{{ d.userName }}</b-col>
            <b-col cols="4">
              <span class="user-details">{{ d.score }}</span>
            </b-col>
          </b-row>
        </div>
        <div slot="footer" v-if="!isLogin">
            <b-card-text class="sub-title">আপনার স্কোর</b-card-text>
          <div class="details">
            <b-row>
              <b-col cols="2">{{ position }}</b-col>
              <b-col cols="6">{{ userName }}</b-col>
              <b-col cols="4">
                <span class="user-details">{{ score }}</span>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { eventBus } from '../main';

export default {
  name: "leaderboard",
  data: function() {
    return {
      isLogin: true,
      leaderData: [],
      position: 0,
      userName: "",
      score: 0,
      scoreBoard: {
        id: Number,
        score: Number,
        userID: Number,
        userName: String
      },
      signData: {
        id: Number,
        fulName: String,
        email: String,
        loginType: String
      }
    };
  },
  methods: {
    getData: function() {
      this.signData = JSON.parse(localStorage.getItem("cricket_auth"));
      if (this.signData != null) {
        this.$http
          .get("http://localhost:8080/cricket/score/find/" + this.signData["id"])
          .then(res => {
            if (res.ok) {
              this.isLogin = false;
              this.scoreBoard = res.data;
              this.position = this.scoreBoard["id"];
              this.userName = this.scoreBoard["userName"];
              this.score = this.scoreBoard["score"];
            }
          });
          this.userName = this.signData["fulName"];
      }
    },
    getLeaderboardData: function() {
      this.$http.get("http://localhost:8080/cricket/score/all").then(res => {
        if (res.ok) {
          const resultArray = [];
          for (let key in res.data) {
            this.scoreBoard = res.data[key];
            resultArray.push(this.scoreBoard);
            console.log(this.scoreBoard);
          }
          this.leaderData = resultArray;
        }
      });
    }
  },
  beforeMount() {
    this.getLeaderboardData();
     this.getData();
  },
  created() {
    eventBus.$on('updateLeaderboard', status => {
      if(status){
        this.getLeaderboardData();
        this.getData();
        this.isLogin = false;
        
      }else{
        this.getLeaderboardData();
        this.isLogin = true;
      }
    });
  }
};
</script>

<style scoped>
.sub-title{
    text-align: center;
    color: rgb(90, 85, 85);
    font-size: 14px;
}
.details {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced2d4;
  margin: 5px;
  border-radius: 5px;
  font-size: 12px;
}
.user-details{
  float: right; 
  color: rgb(12, 106, 109);
  font-weight: bold;
}
</style>