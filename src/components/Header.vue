<template>
    <div class="top-view">
        <b-button 
        variant="outline-primary" 
        class="login-btn"
        @click="openModal" v-if="login">Login</b-button>

        <b-button 
        class="logout-btn"
        @click="logOut" v-if="!login">Logout</b-button>
    </div>
</template>

<script>
import { eventBus } from "../main"; 
import { finished } from 'stream';

export default {
    name: "headerview",
    data: function(){
        return{
            login: true,
            signData: {
                id: Number,
                email: String,
                image: String,
                familyName: String,
                fulName: String
            }
        }
    },
    methods: {
        openModal: function(){
            eventBus.openLoginModal("login");
        },
        getUserData: function(){
            this.signData = localStorage.getItem('cricket_auth');
            this.signData == null ? this.login = true : this.login = false;
        },
        logOut: function(){
            localStorage.removeItem('cricket_auth');
            eventBus.refreshGame();
            this.login = true;
        }
        
    },
    beforeMount(){
        this.getUserData();
    },
    created(){
        eventBus.$on('logout', () => {
            this.login = false;
        });
    }
    
}
</script>

<style scoped>

.top-view{
   height: 50px;
}
.login-btn{
float: right; 
margin-top: 10px
}
.logout-btn{
float: right; 
margin-top: 10px;
background-color: red;
color: white;
}

</style>
