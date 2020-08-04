<template>
  <div class="register">

    <div class="outer_label">
      <img class=".inner_label" src="../assets/logo.png">

    </div>


    <div>
      <el-input placeholder="Capacity" v-model="cp" clearable class="input_style"></el-input>
      <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>


       <div>
      <el-select placeholder="Schedule" v-model="se" clearable class="input_style">
           <el-option
        v-for="item in tsoptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
></el-option>
      </el-select>

    </div>


    <div>
      <el-button type="primary" @click="login" class="login_style">Add Classroom</el-button>
    </div>
    <div>

      <el-button type="primary" @click="back" class="login_style">Return</el-button>
    </div>




  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "Register",
    data(){
      return {
        cp: '',
        se:null,
        tsoptions: [{
          value: "01",
          label:"9:30-10:30"
        },
        {
          value: "02",
          label:"11:00-12:00"
        },

        {
          value: "03",
          label:"13:00-14:00"
        },

        {
          value: "04",
          label:"14:30-15:30"
        },

        ],

        error : {
        }
      }
    },
    methods:{
      login(){
         this.$axios.request({
                    url:'https://abckindergarten.herokuapp.com/api/ClassroomView/',
                    method:'POST',
                    data:{
                        Capacity:this.cp,
                        tSchedule:this.se,

                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }).then(function (arg) {
                    // 拿回结果
                    console.log(arg)

                     alert("Class added successfully")

                }).catch(function (arg) {
                    // 拿到错误信息
                    console.log("error")
                    alert("This time has been booked")
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
  .login_style{
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
