<template>
  <div class="register">

    <div class="outer_label">
      <img class=".inner_label" src="../assets/logo.png">

    </div>



    <div>
          <el-table :data="parentData"
    border
    style="width: 100%">
    <template slot="empty">
      Ready to view the valuable data?

    </template>



    <el-table-column
      prop="FirstName"
      label="Firstname"
      width="180">
    </el-table-column>
    <el-table-column
      prop="LastName"
      label="Lastname"
      width="180">
    </el-table-column>
    <el-table-column
      prop="PhoneNumber"
      label="Phonenumber">
    </el-table-column>
    <el-table-column
      prop="Email"
      label="Email">
    </el-table-column>
  </el-table>


    </div>


    <div>
        <div>

      <el-button type="primary" @click="showparent" class="login_style">View</el-button>
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
        parentData:[]
      }
    },
    methods:{

              showparent(){
         this.$axios.request({
                    url:'https://abckindergarten.herokuapp.com/api/ParentView/',
                    method:'GET',
                    data:{

                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                .then((res) => {

                 this.parentData=res.data








                })
                .catch(err => {
                  console.log("error")

                }

                )
      },



        }
  }
</script>

<style>
  .register{
    margin-top: 100px;
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
