<template>


    <div>

   <div class="leftmenu">
    <ul>


        <li><router-link :to="{name:'Atview'}">Announcement </router-link></li>
        <li><router-link :to="{name:'StoryView'}">Child Story</router-link></li>
        <li><router-link :to="{name:'Createsick'}">Sick Form</router-link></li>
        <li><router-link :to="{name:'Paymentview'}">Payment Check</router-link></li>

        <li><router-link :to="{name:'Login'}">Log out</router-link></li>



			</ul>




    </div>



        <div class="main">
        <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in 6" :key="item">

    </el-carousel-item>
  </el-carousel>


      </div>



    </div>





</template>



<script>
export default {

    data() {
      return {

      };
    },

  methods:{






  }
}









</script>




<style>
.main{

   margin-left: 300px;
   margin-top: -300px;
}

 .leftmenu{
  background-color: #07cbc9;
	width: 20%;
	height: 100%;
	overflow: hidden;
  padding: 0;
  margin-left:-40px;
  margin-bottom: -40px;



  }

   ul{
  list-style-type: none;
  float: left;

	padding-right:80px;
	line-height: 80px;
	font-weight: bold; }

  li{
    	height: 80px;
  }



 .leftmenu ul li a{
	text-decoration: none;
	color: white;
	display: block;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;



}


 .leftmenu ul li a:hover {
background-color: #1ED5C3;


}







.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
     background-image: url(../assets/child1.jpg);
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
      background-image: url(../assets/child2.jpg);
  }









</style>
