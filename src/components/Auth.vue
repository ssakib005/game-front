<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <h5>Sign In</h5>
            </div>
            <div class="modal-body">
              <GoogleLogin class="g-signin-button"
              :params="params" 
              :onSuccess="onSuccess" 
              :onFailure="onFailure">Sign In with Google
              </GoogleLogin>
              <br>
              <br>
              <v-facebook-login app-id="1087532861266711"></v-facebook-login>
            </div>
            <div class="modal-footer">
              <b-button @click="closeModal">Close</b-button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import  GoogleLogin  from 'vue-google-login';
import VFacebookLogin from 'vue-facebook-login-component'

import { eventBus } from '../main';
import { close, truncate } from 'fs';
import { win32 } from 'path';

export default {
  components:{
    GoogleLogin,
    VFacebookLogin
  },
  name: "auth",
  data() {
    return {
      score: 0,
      email: '',
      password: '',
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
      }
    };
  },
  methods: {
    
    onSuccess(googleUser) {
      this.signData["email"] = googleUser.getBasicProfile().getEmail();
      this.signData["fulName"] = googleUser.getBasicProfile().getName();
      this.signData["loginType"] = "google";

      // localStorage.setItem('cricket_auth',this.signData);
      this.submit();
    },
    onFailure(error){
      console.log(error);
    },
    closeModal: function(){
      eventBus.closeLoginModal();
    },
    submit(){
      this.$http.post("http://localhost:8090/user/login", JSON.stringify(this.signData))
      .then(response => {
        if(response.ok){
          console.log(response);
          this.signData = response.data;
          localStorage.removeItem('cricket_auth');
          localStorage.setItem('cricket_auth', JSON.stringify(this.signData));
          console.log(JSON.parse(localStorage.getItem('cricket_auth')));
          eventBus.enableLogout();
          eventBus.loginUpdateApp(true);
        }
      })
    }
  },
};
</script>

<style scoped>
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 10px;
  width: 100%;
  border: 0px;
  background-color:red;
  color: white;
  border-radius: 5px;
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
  width: 300px;
  margin: 0px auto;
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
