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
                class="text-container nopadding"
              >
                <div slot="header"><strong>অভিনঁদন</strong></div>
                <b-card-text class="body-text">আপনার স্কোর হচ্ছে :  <strong>{{ score }}</strong></b-card-text>
                <hr>
                <!-- <b-button v-if="!isLogin" @click="refreshGame" class="again-button">পুনরায়</b-button> -->
                <b-button @click="refreshGame" class="again-button">পুনরায়</b-button>
                <div slot="footer" v-if="isLogin" :class="style">
                  <small class="text-muted" v-if="!isSignInClick">
                    লিডারবোর্ডে যোগ দিতে চান?
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
                  <br>
                  <br>
                  <v-facebook-login
                    v-if="isSignInClick"
                    app-id="2162413263843211"
                    @login="getUserData"
                    @logout="getUserData"
                    @connect="conect"
                    :token-style="tokenStyle"
                  ></v-facebook-login>
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
import VFacebookLogin from "vue-facebook-login-component";

import { eventBus } from "../main";

import auth from "@/components/Auth.vue";

export default {
  name: "scoreviewmodal",
  props: {
    score: Number,
    isLogin: Boolean
  },
  computed: {
    
    style: function() {
      return{
        display: this.view
      }
    },
    tokenStyle: function(){
      return{
        display: "none"
      }
    }
  },
  data: function() {
    return {
      view: "",
      name: "Sakib",
      email: "",
      fulName: "",
      conect: false,
      isFacebook: false,
      isGoogle: false,
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
    getUserData() {
      FB.api("/me/?fields=email,name", function(response) {
        if (response != null) {
          // console.log(response);
          // console.log("Successful login for: " + response.name);
          // console.log("Successful login for: " + response.email);

          this.email = response.email;
          this.fulName = response.name;
          if (this.fulName == undefined) {
            eventBus.updateFacebookData(false);
          } else {
            // this.isFacebook = true;
            eventBus.updateFacebookData(true, this.fulName, this.email);
          }
        }
      });
    },
    refreshGame: function() {
      eventBus.refreshGame();
    },
    displaySignin: function() {
      this.view = "none";
      this.isSignInClick = true;
    },
    closeCongoModal: function() {
      this.refreshGame();
    },
    onSuccess(googleUser) {
      this.signData["email"] = googleUser.getBasicProfile().getEmail();
      this.signData["fulName"] = googleUser.getBasicProfile().getName();
      this.signData["loginType"] = "google";
      this.isGoogle = true;
      this.submit();
    },
    onFailure(error) {
      console.log(error);
    },
    submit() {

      if (this.isFacebook || this.isGoogle) {
        if (this.isFacebook) {
          this.signData["fulName"] = this.fulName;
          this.signData["email"] = this.email;
          this.signData["loginType"] = "facebook";
        }
         this.$http
        .post("http://localhost:8090/user/login", JSON.stringify(this.signData))
        .then(response => {
          if (response.ok) {
            console.log(response);
            this.signData = response.data;
            localStorage.removeItem("cricket_auth");
            localStorage.setItem("cricket_auth", JSON.stringify(this.signData));
            console.log(JSON.parse(localStorage.getItem("cricket_auth")));
            eventBus.enableLogout();
            eventBus.loginUpdateApp(true);
            eventBus.updateDatabase();
          }
        });
      }
    }
  },
  mounted() {
    eventBus.$on("update", (status, name, email) => {
      if (status) {
        this.isFacebook = true;
        this.email = email;
        this.fulName = name;
        this.submit();
      }
    });
  },
  components: {
    auth,
    GoogleLogin,
    VFacebookLogin
  }
};
</script>

<style scoped>

.body-text{
  padding-top: 10px;
  padding-bottom: 10px;
}


.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 10px;
  width: 100%;
  border: 0px;
  background-color: red;
  color: #fff;
  border-radius: 5px;
}

.again-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 10px;
  width: 100%;
  border: 0px;
  background-color: rgb(2, 116, 104);
  color: white;
  border-radius: 5px;
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
  width: 435px;
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
