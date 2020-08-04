<template>


    <div>

   <div class="leftmenu">
    <ul>


        <li><router-link :to="{name:'Addteacher'}">Teacher update</router-link></li>
         <li><router-link :to="{name:'Addts'}">Teahcer Allocation </router-link></li>
        <li><router-link :to="{name:'Viewteacher'}">Teacher Report</router-link></li>
        <li><router-link :to="{name:'Addchild'}">Child update</router-link></li>
        <li><router-link :to="{name:'Viewchild'}">Display Child Report</router-link></li>
        <li><router-link :to="{name:'Addclass'}">Add Class</router-link></li>


        <li><router-link :to="{name:'Login'}">Log out</router-link></li>



			</ul>




    </div>



        <div class="main">
        <img class=".inner_label" src="../assets/business.jpg">


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
   margin-top: -600px;
}

 .leftmenu{
  background-color: #07cbc9;
	width:21%;
	height: 100%;
	overflow: hidden;
  padding: 0;
  margin-left:-20px;
  margin-bottom: -20px;



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
