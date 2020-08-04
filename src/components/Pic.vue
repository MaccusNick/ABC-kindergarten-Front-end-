<template>







    <div class="picc">

    <div class="outer_label">
      <img class=".inner_label" src="../assets/logo.png">

    </div>



<el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>



      <div>

      <el-button type="primary" @click="back" class="login_style">Return</el-button>
    </div>




  </div>

















</template>



<script>
export default {

    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },

  methods:{




      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },

       back(){
        this.$router.push('/Teacher');

      }





  }
}









</script>




<style>

.login_style{
    width: 200px;
    margin-top: 100px;

  }

  .outer_label{
    margin-top: -100px;
  }



















</style>
