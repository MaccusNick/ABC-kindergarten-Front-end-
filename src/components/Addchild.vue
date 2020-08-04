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
      <el-select placeholder="parent" v-model="parent" clearable class="input_style">
           <el-option
        v-for="item in parentoptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
></el-option>
      </el-select>

    </div>

    <div>
      <el-checkbox placeholder="ChildStatus" v-model="cs"  class="input_style">Check In</el-checkbox>
      <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
    </div>



    <div>
      <el-button type="primary" @click="login" class="login_style">Change</el-button>

    </div>
    <div class="linkword">
      <span v-on:click="ToLogin"> Back to Last Page</span>
    </div>
      <div>
        {{info}}
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
        cs: false,
        parent:null,
        cm:null,
        info:null,
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

         parentoptions: [{
          value: "01",
          label:"Daniel Faith"
        }, {
          value: "02",
          label: "David George"
        }, {
          value: "03",
          label: "Dylan Gavin"
        }, {
          value: "04",
          label: "Frank Gael"
        }],


        error : {
        Fname: '',
        Lname: '',
        cs: '',
        parent:null,
        cm:null,
        }
      }
    },
    methods:{
      login(){
         this.$axios.request({
                    url:'https://abckindergarten.herokuapp.com/api/ChildView/',
                    method:'POST',
                    data:{
                        FirstName:this.Fname,
                        LastName:this.Lname,
                        ChildStatus:this.cs,
                        parent:this.parent,
                        classroom:this.cm,
                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }).then(function (res) {
                    // 拿回结果
                    console.log(res)
                    alert("Child Check In Successfully")



                }).catch(function (arg) {
                    // 拿到错误信息
                    console.log("error")
                    alert("Please fill all the required fields")
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





</style>
