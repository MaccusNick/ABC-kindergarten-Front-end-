<template>
  <div class="register">

    <div class="outer_label">
      <img class=".inner_label" src="../assets/logo.png">

    </div>


    <div>
      <el-input placeholder="Username" v-model="name" clearable class="input_style"></el-input>
      <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>

     <div>
      <el-input placeholder="Email address" v-model="email" clearable class="input_style"></el-input>
      <span v-if="error.name" class="err-msg">{{error.email}}</span>
    </div>


    <div>
      <el-input placeholder="Password" v-model="pwd" show-password class="input_style"></el-input>
      <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
    </div>
    <div>
      <el-button type="primary" @click="login" class="login_style">Register</el-button>

    </div>
    <div class="linkword">
      <span v-on:click="ToLogin"> Already have an account? Login Now!</span>

    </div>


  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "Register",
    data(){
      return {
        name: '',
        email:'',
        pwd : '',
        error : {
          name: '',
          email:'',
          pwd : ''
        }
      }
    },
    methods:{
      login(){
         this.$axios.request({
                    url:'https://abckindergarten.herokuapp.com/api/auth/register',
                    method:'POST',
                    data:{
                        username:this.name,
                        email:this.email,
                        password:this.pwd
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }).then(function (arg) {
                    // 拿回结果
                    console.log(arg)
                    alert("Account successfully created")

                }).catch(function (arg) {
                    // 拿到错误信息
                    console.log("error")
                    alert("Don't use repeat UserName or Emaill address")
                })
      },
      ToLogin(){
   this.$router.push('/Login');
},

}



  }
</script>

<style>
  .register{
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
