<template>


    <div>

   <div class="leftmenu">
    <ul>


        <li><router-link :to="{name:'Viewchilds'}">Child Information </router-link></li>
        <li><router-link :to="{name:'Addstory'}">Child Story</router-link></li>
        <li><router-link :to="{name:'Viewsick'}">Sick Form</router-link></li>
        <li><router-link :to="{name:'Addat'}">Announcement</router-link></li>
        <li><router-link :to="{name:'Pic'}">Upload Picture</router-link></li>

        <li><router-link :to="{name:'Login'}">Log out</router-link></li>



			</ul>




    </div>



        <div class="main">
        <img class=".inner_label" src="../assets/Teacher.jpg">


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
   margin-top: -500px;
}

 .leftmenu{
  background-color: #07cbc9;
	width: 20%;
	height: 100%;
	overflow: hidden;
  padding: 0;
  margin-left:-20px;
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




</style>
