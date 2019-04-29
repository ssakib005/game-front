<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <b-row class="modal-container">
            <b-col cols="9" class="nopadding">
              <b-card
                bg-variant="dark"
                header-class="text-center"
                text-variant="white"
                class="text-container nopadding">

              <div slot="header"> Congratulation </div>
                <b-card-text class="nopadding">Your new score is: {{ score }}</b-card-text><br><hr>
                <b-button v-if="!isLogin" @click="refreshGame">Again</b-button>

                <div slot="footer" v-if="isLogin">
                  <small class="text-muted" v-if="!isSignInClick">
                    Want to
                    <b>Join</b> Leaderboard?
                    <b-link @click="displaySignin" class="card-link">Sign in</b-link>
                  </small>
                  <br>
                  <GoogleLogin
                  v-if="isSignInClick"
                    class="g-signin-button"
                    :params="params"
                    :onSuccess="onSuccess"
                    :onFailure="onFailure"
                  >Sign In with Google</GoogleLogin>
                </div>
              </b-card>
            </b-col>
            <b-col cols="3" class="nopadding">
              <b-img
                :src="require('@/assets/close.png')"
                height="20%"
                class="close-icon"
                @click="closeCongoModal"
              ></b-img>
              <b-img
                :src="require('@/assets/cel.png')"
                height="200"
                width="100%"
                center
                fluid
                class
              ></b-img>
            </b-col>
          </b-row>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";

import { eventBus } from "../main";

import auth from "@/components/Auth.vue";

export default {
  name: "scoreviewmodal",
  props: {
    score: Number,
    isLogin: Boolean
  },
  data: function() {
    return {
      name: "Sakib",
      params: {
        client_id:
          "1025638494646-drbrc0n5uoo9q2nu868ibkgb4mjdd7nv.apps.googleusercontent.com",
        redirect_uri: "http://localhost:8080"
      },
      signData: {
        id: Number, 
        fulName: String,
        email: String,
        loginType: String
      },
      isSignInClick: false
    };
  },
  methods: {
    refreshGame: function() {
      eventBus.refreshGame();
    },
    displaySignin: function() {
      this.isSignInClick = true;
    },
    closeCongoModal: function() {
      this.refreshGame();
    },
     onSuccess(googleUser) {
      this.signData["email"] = googleUser.getBasicProfile().getEmail();
      this.signData["fulName"] = googleUser.getBasicProfile().getName();
      this.signData["loginType"] = "google";

      this.submit();
    },
    onFailure(error){
      console.log(error);
    },
    submit(){
      this.$http.post("http://localhost:8090/user/login", JSON.stringify(this.signData))
      .then(response => {
        if(response.ok){
          console.log(response);
          this.signData = response.data;
          localStorage.removeItem("cricket_auth");
          localStorage.setItem('cricket_auth', JSON.stringify(this.signData));
          console.log(JSON.parse(localStorage.getItem('cricket_auth')));
          eventBus.enableLogout();
          eventBus.loginUpdateApp(true);
          eventBus.updateDatabase(); 
        }
      })
    }
  },
  components: {
    auth,
    GoogleLogin
  }
};
</script>

<style scoped>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  width: 100%;
  border: 0px;
  background-color: red;
  color: #fff;
}

.close-icon {
  float: right;
  margin-bottom: 20px;
}

.image-container {
  background-color: black;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: black;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.nopadding {
  padding: 0 !important;
  margin: 0 !important;
}

.text-container {
  width: 100%;
  margin: 0px 0px;
  padding: 20px 30px;
  background-color: black;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h5 {
  margin-top: 0;
  color: white;
  width: 100%;
  text-align: center;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
