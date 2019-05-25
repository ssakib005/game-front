<template>
  <div>
    <b-container fluid>
      <headerview></headerview>
      <b-img
          :src="require('@/assets/head.png')"
          center
          fluid
          height="200%"
          width="200%"
        ></b-img>
      <b-row>
        <authview v-if="modal"></authview>
        <scoreviewmodal v-if="congoModal" :score="run" :isLogin="isLogin"></scoreviewmodal>
        <b-col md="3">
          <scoreboard></scoreboard>
        </b-col>
        <b-col md="6">
          <gameview></gameview>
        </b-col>
        <b-col md="3">
          <leaderboard></leaderboard>
        </b-col>
      </b-row>
      <b-row>
        <footerview></footerview>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { eventBus } from "./main";

import headerview from "@/components/Header.vue";
import gameview from "@/components/Game.vue";
import leaderboard from "@/components/LeaderBoard.vue";
import scoreboard from "@/components/Scoreboard.vue";
import authview from "@/components/Auth.vue";
import scoreviewmodal from "@/components/ScoreViewModal.vue";
import footerview from "@/components/Footer.vue";

export default {
  name: "app",
  data: function() {
    return {
      modal: false,
      btnLogin: true,
      congoModal: false,
      run: 0,
      isLogin: true,
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
      },
      userId: Number
    };
  },

  methods: {
    getUserData: function() {
      this.signData = JSON.parse(localStorage.getItem("cricket_auth"));
      if(this.signData == null){
        this.isLogin = true
        eventBus.updateLeaderboard(false);
      }else{
        this.isLogin = false
        eventBus.updateLeaderboard(true);
      }
    },
    updateScoreToDatabase: function(){
      this.signData = JSON.parse(localStorage.getItem('cricket_auth'));
      this.scoreBoard["score"] = this.run;
      this.scoreBoard["userID"] = this.signData["id"];
      this.scoreBoard["userName"] = this.signData["fulName"];
      this.$http.post("http://localhost:8080/cricket/score/add", JSON.stringify(this.scoreBoard))
      .then(responce => {
        console.log(responce);
      })
    },
    
  },

  beforeMount() {
    this.getUserData();
  },
  created() {
    eventBus.$on("feedback", status => {
      this.congoModal = true;
      this.run = status;
      if(!this.isLogin){
        this.updateScoreToDatabase();
      }
      
    });
    eventBus.$on("openModal", login => {
      this.modal = true;
    });
    eventBus.$on("closeModal", () => {
      this.modal = false;
    });
    eventBus.$on("refresh", () => {
      this.getUserData();
      this.modal = false;
      this.btnLogin = true;
      this.congoModal = false;
      this.run = 0;
    });
    eventBus.$on('loginStatus', status => {
      if(status){
        this.getUserData();
      this.isLogin = false;
      this.modal = false;
      }
    });

    eventBus.$on('updateDatabase',() => {
      this.updateScoreToDatabase();
    });
  },
  components: {
    headerview,
    gameview,
    leaderboard,
    scoreboard,
    authview,
    scoreviewmodal,
    footerview
  }
};
</script>

<style scoped>
</style>



