<template>
  <div class="addat">

    <div class="outer_label">
      <img class=".inner_label" src="../assets/logo.png">

    </div>


    <div>
      <el-input placeholder="Title" v-model="Title" clearable class="input_style" type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"></el-input>
      <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>

     <div>
      <el-input placeholder="Content" v-model="Content" clearable class="input_style" type="textarea"></el-input>
      <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>





    <div  class="date">

         <el-date-picker
      v-model="De"
      type="datetime"
      placeholder="Select date and time">
    </el-date-picker>

    </div>


       <div  class="teacher">
      <el-select placeholder="Teacher" v-model="teacher" clearable class="input_style">
           <el-option
        v-for="item in mnoptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
></el-option>
      </el-select>

    </div>


    <div>
      <el-button type="primary" @click="login" class="astyle">Update Announcement</el-button>
    </div>

    <div>

      <el-button type="primary" @click="back" class="astyle">Return</el-button>
    </div>





  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "Register",
    data(){
      return {
        Title: '',
        Content: '',
        De : null,
        teacher:null,
        mnoptions: [{
          value: "01",
          label:"Andrew Brandon"
        },

        {
          value: "02",
          label:"Ava Blake"
        },

        {
          value: "03",
          label:"Brooke Chole"
        },

        {
          value: "04",
          label:"Connor Carlos"
        },






        ],

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
                    url:'https://abckindergarten.herokuapp.com/api/AnnouncementView/',
                    method:'POST',
                    data:{
                        Title:this.Title,
                        Content:this.Content,
                        Date:this.De,
                        teacher:this.teacher
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }).then(function (arg) {
                    // 拿回结果
                    console.log(arg)
                    alert('Information Update successfully')

                }).catch(function (arg) {

                    console.log("error")
                    alert("Please fill vaild data")
                })
      },


             back(){
        this.$router.push('/Teacher');

      }


    }
  }
</script>

<style>
  .addat{
    margin-top: 200px;
  }
  .input_style{
    width: 200px;
    margin-bottom: 10px;
  }
  .astyle{
    width: 200px;
    margin-top: 20px;

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


.date {
  margin-top: 10px;
}

.teacher{
  margin-top: 20px;
}



</style>
