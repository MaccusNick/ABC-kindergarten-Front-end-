<template>
  <div class="register">

    <div class="outer_label">
      <img class=".inner_label" src="../assets/logo.png">

    </div>



     <div>
      <el-input placeholder="Description" v-model="Content" clearable class="input_style" type="textarea"></el-input>
      <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>





    <div  class="date">

         <el-date-picker
      v-model="De"
      type="datetime"
      placeholder="Select post time">
    </el-date-picker>

    </div>


      <div  class="teacher">
      <el-select placeholder="Child select" v-model="Child" clearable class="input_style">
           <el-option
        v-for="item in childoptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
></el-option>
      </el-select>

    </div>




    <div>


    <div>
      <el-button type="primary" @click="login" class="login_style">Update ChildrenStory</el-button>
    </div>

     <div>

      <el-button type="primary" @click="back" class="login_style">Return</el-button>
    </div>
    </div>



  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "Register",
    data(){
      return {
        Content: '',
        De : null,
        Child:null,

         childoptions: [{
          value: "01",
          label:"Justin Faith"
        },

        {
          value: "02",
          label:"Joel George"
        },

        {
          value: "03",
          label:"Mason Gavin"
        },

        {
          value: "04",
          label:"Noah Diana"
        },

         {
          value: "05",
          label:"Nick Gael"
        },
 {
          value: "06",
          label:"Olive Jacob"
        },
 {
          value: "07",
          label:"Otto jasmine"
        },
 {
          value: "08",
          label:"Paul Jose"
        },
 {
          value: "09",
          label:"Paris Jennifer"
        },
 {
          value: "10",
          label:"Steven Jake"
        },





        ],

        error : {

        }
      }
    },
    methods:{
      login(){
         this.$axios.request({
                    url:'https://abckindergarten.herokuapp.com/api/StoryView/',
                    method:'POST',
                    data:{

                        StoryContent:this.Content,
                       CreateDate:this.De,
                       child:this.Child

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
                    alert("Please Fill all the required fields")
                })
      },


             ToLogin(){

},
 back(){
        this.$router.push('/Teacher');

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
     margin-top: 30px;

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
