<template>
  <div class="register">

    <div class="outer_label">
      <img class=".inner_label" src="../assets/logo.png">

    </div>



    <div class="table">
          <el-table :data="sickData"
    border
    style="width: 69%">
    <template slot="empty">
      Ready to view the announcement?

    </template>



    <el-table-column
      prop="Title"
      label="Title"
      width="240">
    </el-table-column>

      <el-table-column
      prop="Content"
      label="Content"
      width="240">
    </el-table-column>

    <el-table-column
      prop="Date"
      label="Date"
      width="200">
    </el-table-column>

  </el-table>


    </div>


    <div>
        <div>

      <el-button type="primary" @click="showparent" class="login_style">View</el-button>
    </div>

     <div>

      <el-button type="primary" @click="back" class="login_style">Back to last page</el-button>
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
        sickData:[]
      }
    },
    methods:{

              showparent(){
         this.$axios.request({
                    url:'https://abckindergarten.herokuapp.com/api/AnnouncementView/',
                    method:'GET',
                    data:{

                    },
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                .then((res) => {

                 this.sickData=res.data








                })
                .catch(err => {
                  console.log("error")

                }

                )
      },

      back(){
        this.$router.push('/Parent');

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
  .login_style{
    width: 200px;
    margin-top: 30px;

  }

  .outer_label {
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

.table {
  margin-left: 300px;
  margin-top: 100px;
}



</style>
