<template>
  <div class="register">

    <div class="outerlabel">
      <img class=".inner_label" src="../assets/logo.png">

    </div>



    <div class="teachertable">
          <el-table :data="parentData"
    border
    style="width: 80%">
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

      <el-button type="primary" @click="showparent" class="ltyle">Display Teacher Report</el-button>
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
        parentData:[]
      }
    },
    methods:{

              showparent(){
         this.$axios.request({
                    url:'https://abckindergarten.herokuapp.com/api/TeacherView/',
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

      back(){
        this.$router.push('/Manager');

      }



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
  .ltyle{
    width: 200px;
    margin-top: 20px;

  }

  .outerlabel {
  margin-top: 5%;
  position: relative;
  left: 0;
  top: -100px;

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

.teachertable {
  margin-left: 200px;
  margin-top: 150px;
}



</style>
