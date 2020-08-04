<template>
  <div class="register">

    <div class="outer_label">
      <img class=".inner_label" src="../assets/logo.png">

    </div>


    <div>
      <el-input placeholder="Firstname" v-model="Fname" clearable class="input_style"></el-input>
      <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>

     <div>
      <el-input placeholder="Lastname" v-model="Lname" clearable class="input_style"></el-input>
      <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>





    <div>
      <el-input placeholder="PhoneNumber" v-model="pn"  class="input_style"></el-input>
      <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
    </div>




     <div>
      <el-input placeholder="Email address" v-model="email" clearable class="input_style"></el-input>

    </div>

       <div>
      <el-select placeholder="Manager" v-model="mg" clearable class="input_style">
           <el-option
        v-for="item in mnoptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
></el-option>
      </el-select>

    </div>


    <div>
      <el-button type="primary" @click="login" class="ltyle">Update Teacher data</el-button>
    </div>

     <div>

      <el-button type="primary" @click="back" class="ltyle">Return</el-button>
    </div>





  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "Register",
    data(){
      return {
        Fname: '',
        Lname: '',
        pn : '',
        email:'',
        mg:null,
        mnoptions: [{
          value: "01",
          label:"Alexander Benjamin"
        }],

        error : {
        Fname: '',
        Lname: '',
        pn : '',
        email:'',
        }
      }
    },
    methods:{
      login(){
         this.$axios.request({
                    url:'https://abckindergarten.herokuapp.com/api/TeacherView/',
                    method:'POST',
                    data:{
                        FirstName:this.Fname,
                        LastName:this.Lname,
                        Email:this.email,
                        PhoneNumber:this.pn,
                        manager:this.mg
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }).then(function (arg) {
                    // 拿回结果
                    console.log(arg)
                    alert('Information Update successfully')

                }).catch(function (arg) {
                    // 拿到错误信息
                    console.log("error")
                    alert("Don't use repeat UserName or Emaill address")
                })
      },


       back(){
        this.$router.push('/Manager');

      }


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
  .ltyle{
    width: 200px;
    margin-top: 10px;
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
