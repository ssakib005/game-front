<template>
  <div class="top-view">
    
    <div>
      <b-button variant="outline-primary" class="login-btn" @click="openModal" v-if="login">Login</b-button>
      <b-button variant="outline-danger" class="logout-btn" @click="logOut" v-if="!login">Logout</b-button>
    </div>
    
    <v-facebook-login
      class="fb"
      app-id="2162413263843211"
    ></v-facebook-login>
  </div>
</template>

<script>
import { eventBus } from "../main";
import { finished } from "stream";

export default {
  name: "headerview",
  data: function() {
    return {
      login: true,
      signData: {
        id: Number,
        email: String,
        image: String,
        familyName: String,
        fulName: String
      }
    };
  },
  methods: {
    openModal: function() {
      eventBus.openLoginModal("login");
    },
    getUserData: function() {
      // location.removeItem('cricket_auth');
      this.signData = localStorage.getItem("cricket_auth");
      this.signData == null ? (this.login = true) : (this.login = false);
    },
    logOut: function() {
      window.FB.getLoginStatus(response => {
        if (response.status === "connected") {
          FB.logout();
        }
      }, true);
      localStorage.removeItem("cricket_auth");
      eventBus.refreshGame();
      this.login = true;
    }
  },
  beforeMount() {
    this.getUserData();
  },
  created() {
    eventBus.$on("logout", () => {
      this.login = false;
    });
  }
};
</script>

<style scoped>
.fb {
  display: none;
}
.top-view {
  min-height: 50px;
}
.header-icon{
  width: 80%;
}
.login-btn {
  float: right;
  margin-top: 10px;
}
.logout-btn {
  float: right;
  margin-top: 10px;
}
</style>
