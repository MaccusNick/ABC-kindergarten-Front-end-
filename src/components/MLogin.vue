<template>
  <div class="login">

    <div class="outer_label">
      <img class=".inner_label" src="../assets/logo.png">

    </div>


    <div>
      <el-input placeholder="Username" v-model="name" clearable class="input_style"></el-input>
      <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>
    <div>
      <el-input placeholder="Password" v-model="pwd" show-password class="input_style"></el-input>
      <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
    </div>
    <div>
      <el-button type="primary" @click="login" class="login_style">Login</el-button>
    </div>

  </div>


</template>

<script>
  import axios from "axios";
  export default {
    name: "Login",
    data(){
      return {
        name: '',
        pwd : '',
        token: localStorage.getItem('user-token') || null,
        error : {
          name: '',
          pwd : ''
        }
      }
    },
    methods:{
      login(){
         this.$axios.request({
                    url:'https://abckindergarten.herokuapp.com/api/auth/login',
                    method:'POST',
                    data:{
                        username:this.name,
                        password:this.pwd
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                .then(resp => {

                  this.token = resp.data.token;

                  console.log(this.token)
                   alert("Login successfully")
                  localStorage.setItem('user-token', resp.data.token)
                  this.$router.push('/Manager');

                })
                .catch(err => {
                   alert("Incorrect password please try again")
                  localStorage.removeItem('user-token')
                }

                )
      },


      ToRegister(){
   this.$router.push('/Register');
},

    ToTeacher(){
   this.$router.push('/Teacher');
},

    ToManager(){
   this.$router.push('/Manager');
},






    }
  }
</script>

<style>
  .login{
    margin-top: 200px;
  }
  .input_style{
    width: 200px;
    margin-bottom: 10px;
  }
  .login_style{
    width: 200px;
  }

  .outer_label {
  margin-top: 5%;
  position: relative;
  left: 0;
  top: -200px;

  width: 100%;
  height: 220px;
  text-align: center;


}

  .inner_label {
  position: absolute;
  left:0;
  right: 0;
  bottom: 0px;
  top:0;
  margin: auto;
  height: 100px;

}

.linkword {
  margin-top: 30px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 15px;
  color: #07cbc9;
}


</style>
