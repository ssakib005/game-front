<template>
  <b-container class="game-container">
    <b-row>
      <b-col id="game">
        <b-img
          :src="require('@/assets/game_material.png')"
          center
          fluid
          height="450%"
          width="450%"
          :style="style"
          id="img"
        ></b-img>
        <b-img
          :src="require('@/assets/pencil.png')"
          center
          fluid
          height="60%"
          width="60%"
          class="indicator"
        ></b-img>
        <hr style="background-color: black; height:2px">
        <div class="button-positions">
          <b-img 
          :src=getImage(buttonIcon)
          height="60px" @click="playOrStop"></b-img>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "gameview",
  data: function() {
    return {
      degree: 0,
      blur: 0,
      isStop: false,
      run: 0,
      status: "Status",
      isPlay: false,
      buttonIcon: "play.png"
    };
  },
  computed: {
    style: function() {
      return {
        transform: "rotate(" + this.degree + "deg)",
        filter: "blur(" + this.blur + "px)",
        top: 0
      };
    }
  },
  methods: {
    getImage(pic){
      return require('../assets/'+pic)
    },
    roatedAnimation: function() {
      if (!this.isStop) {
        this.blur = 30;
        this.style;
        setTimeout(this.roatedAnimation, 0);
        if (this.degree > 360) {
          this.degree = 0;
        } else {
          this.degree++;
        }
      } else {
        this.isStop = false;
      }
    },

    stopAnimation: function() {
      this.blur = 0;
      this.isStop = true;
      this.resetStatus();
    },

    playOrStop: function(){
      if(!this.isPlay){
        this.roatedAnimation();
        this.isPlay = true;
        this.buttonIcon = "stop.png";
      }else{
        this.stopAnimation();
        this.isPlay = false;
        this.buttonIcon = "play.png";
      }
    },

    resetStatus() {
      if (this.degree >= 0 && this.degree <= 21) {
        this.status = "LBW";
        this.run = -1;
      } else if (this.degree > 21 && this.degree <= 45) {
        this.status = "4 Run";
        this.run = 4;
      } else if (this.degree > 45 && this.degree <= 90) {
        this.status = "Bold Out";
        this.run = -1;
      } else if (this.degree > 90 && this.degree <= 112) {
        this.status = "Dot Ball";
        this.run = 0;
      } else if (this.degree > 112 && this.degree <= 135) {
        this.status = "Run Out";
        this.run = -1;
      } else if (this.degree > 135 && this.degree <= 180) {
        this.status = " 1 Run";
        this.run = 1;
      } else if (this.degree > 180 && this.degree <= 202) {
        this.status = "Hit Wicket";
        this.run = -1;
      } else if (this.degree > 202 && this.degree <= 225) {
        this.status = "Dot Ball";
        this.run = 0;
      } else if (this.degree > 225 && this.degree <= 247) {
        this.status = "Wide";
        this.run = 1;
      } else if (this.degree > 247 && this.degree <= 270) {
        this.status = "3 Run";
        this.run = 3;
      } else if (this.degree > 270 && this.degree <= 292) {
        this.status = "Catch Out";
        this.run = -1;
      } else if (this.degree > 292 && this.degree <= 315) {
        this.status = "6 Run";
        this.run = 6;
      } else if (this.degree > 315 && this.degree <= 338) {
        this.status = "No Ball";
        this.run = 1;
      } else if (this.degree > 338 && this.degree <= 360) {
        this.status = "2 Run";
        this.run = 2;
      }
      eventBus.scoreStatus(this.run);
    }
  },
  created(){
    eventBus.$on('refresh', () => {
      this.degree = 0;
    });
  }
};
</script>

<style scoped>
.button-positions {
  margin: auto;
  width: 50%;
  text-align: center;
}

.game-container {
  margin-top: 0px;
  position: relative;
}

.indicator {
  position: absolute;
  top: 1%;
  left: 49.2%;
}
</style>

