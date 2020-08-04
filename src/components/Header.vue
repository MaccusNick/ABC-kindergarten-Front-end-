 <template>
 <el-row>
 <el-col :span="24">
  <div class="header_style">
    <div class="logo">
      <img class="headlogo" src="../assets/logo3.png">

    </div>


    <div>
    <ul>


        <li><router-link :to="{name:'Main'}">HOME</router-link></li>
        <li><router-link :to="{name:'Game'}">PUZZLE GAME</router-link></li>
				<li><router-link :to="{name:'Contact'}">CONTACT</router-link></li>
				<li><router-link :to="{name:'Login'}">LOGIN</router-link></li>
        <li><router-link :to="{name:'Register'}">REGISTER</router-link></li>
        <div v-if="this.$store.state.token">
            <a href="">{{this.$store.state.username}}</a>
        </div>


			</ul>
    </div>


  </div>




  </el-col>
  </el-row>
  </template>
  <style>
  .header_style{
  background-color:#07cbc9;
	width: 100%;
	height: 80px;
	overflow: hidden;
  padding: 0;
  margin-left:0px;



  }

  .header_style ul{
  list-style-type: none;
  float: right;

	padding-right:80px;
	line-height: 80px;
	font-weight: bold; }

  .header_style ul li{
    float: left;
	margin-left: 30px;
	height: 80px;
  }

 .header_style ul li a{
	text-decoration: none;
	color: white;
	display: block;


}


 .header_style ul li a:hover {
background-color: #1ED5C3;


}




.header_style .logo{
  float: left;
  top:18px;
  position: relative;
  margin-top: -18px;
  margin-left: 0px;
}


  </style>
