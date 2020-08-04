<template>
  <div class="register">

    <div class="outer_label">
      <img class=".inner_label" src="../assets/logo.png">

    </div>








     <div>
      <el-select placeholder="Choose Child" v-model="child" clearable class="input_style">
           <el-option
        v-for="item in childoptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
></el-option>
      </el-select>

    </div>



  <div>
      <el-select placeholder="classroom" v-model="cm" clearable class="input_style">
           <el-option
        v-for="item in cmoptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
></el-option>
      </el-select>


    </div>







    <div>
      <el-button type="primary" @click="login" class="login_style">Confirm</el-button>

    </div>


  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "Register",
    data(){
      return {
        cm:"",
        child:null,
        childoptions: [{
          value: "Justin Faith",
          label:"Justin Faith"
        }, {
          value: "Joel George",
          label: "Joel Georhe"
        }, {
          value: "Mason Gavin",
          label: "Mason Gavin"
        }, {
          value: "Noah Diana",
          label: "Noah Diana"
        },
        {
          value: "Nick Gael",
          label:"Nick Gael"
        }, {
          value: "Olive Jacob",
          label: "Olive Jacob"
        }, {
          value: "Paul",
          label: "Jose"
        }, {
          value: "Paris Jennifer",
          label: "Paris Jennifer"
        }





        ],
         cmoptions: [{
          value: "1",
          label:"ClassroomA"
        }, {
          value: "2",
          label: "ClassroomB"
        }, {
          value: "3",
          label: "ClasssroomC"
        }, {
          value: "4",
          label: "ClassroomD"
        }],



        error : {

        }
      }
    },
    methods:{
      login(){
         this.$axios.request({
                    url:'https://abckindergarten.herokuapp.com/api/CameraView/',
                    method:'POST',
                    data:{

                        Location:this.teacher,
                        classroom:this.cm,
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }).then(function (res) {
                    // 拿回结果
                    console.log(res)
                    alert("Class Assigned to the child  Successfully")



                }).catch(function (arg) {
                    // 拿到错误信息
                    console.log("error")
                    alert("Class already Assigned to the teacher")
                })
      },
             ToLogin(){
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
  margin-bottom: 20px;
}




</style>
