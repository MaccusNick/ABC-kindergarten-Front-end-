<template>
  <div class="main">

  <div class="firstsection">
			<h2>ABOUT</h2>
			<hr>
			<div class="information">
			<p>ABC Kindergarten Kindergarten provide a caring and vibrant learning environment for 3 to 5 year olds - a place where they are valued as individuals.</p>
			</div>


	</div>

  <div class="secondsection">
    <div class="middlesection">
      <img src="../assets/bb3.jpg">

    </div>


    <div class="leftsection">
      <h2>A WORD<br/> ABOUT US</h2>
      <div class="aboutus">
          <p>
            ABC Kindergarten is a private kindergarten that offers classes for three, four, and five year olds. We focus on phonics and mathematics. Even though we are a half day program, a lot of learning goes on in our classes. We follow the public school calendar, but have our own advanced curriculum.

          </p>

      </div>

    </div>

    <div class="rightsection">

      <div class="rstudents">
        <h1>200</h1>
        <p>Children</p>
      </div>
      <div class="rteachers">
        <h1>6</h1>
        <p> Fully-qualified teachers</p>

      </div>



      </div>


    <div class="thirdsection">
      <div class="sec1">
        <img src="../assets/classroom.jpg">
      </div>
      <div class="sec2">
        <h2>Classroom</h2>
        <p id="p2">ABC Kindergarten provide a comfortable Classroom for children</p>
        <p id="p3">Creativity is extremely important at this stage, we choose lovely and creatively decorations and themes to spice up classroom.</p>
      </div>


       <div class="sec3">
         <img src="../assets/playground.jpg">
      </div>
      <div class="sec4">
        <h2>Playground</h2>
        <p id="p2">ABC kindergarten is a place where young children and their parents can be involved, make precious memories. </p>
        <p id="p3">Our playground is a huge, natural garden with plants and flowers, and lots of space to climb, run m enjoy the sunshine.</p>
      </div>



       <div class="sec5">
        <h2>Lunch</h2>
        <p id="p2">
          Nice food is a source of comfort, so having a list of delicious and nutritious meals is very important.
        </p>
        <p id="p3">
          We provide
              Sunbutter and jam sandwich, applesauce pouch, cheese stick
              Turkey and cheese sandwich, snap pea crisps.


        </p>
      </div>



       <div class="sec6">
         <img src="../assets/food.jpg">
      </div>



       <div class="sec7">
        <h2>Facilities</h2>
        <p id="p2">
          We provide spacious indoor facilities for children to have activities.

        </p>
        <p id="p3">
          There is a peaceful, homely space with plenty of room to dance, imagine and create.


        </p>
      </div>



       <div class="sec8">
         <img src="../assets/indoor.jpg">

      </div>



    </div>


  </div>

    <div class="gallery">

      <div class="gword">
			<h2>CRAFT</h2>
			<hr>
			<p class="gstyle">
				Check our children's lovely craft.Craft activities foster communication, imagination and attention. These activities can improve the manual dexterity of children. It also encourages children to play with their friends in a relaxed environment.
			</p>
		</div>


      <div class="gbar">
			<div class="gb1">
				 <img src="../assets/Aqua.png">
				<p id="gbw">AQUARIUM</p>
			</div>
			<div class="gb2">
				 <img src="../assets/radio.jpg">
				<p id="gbw">RADIO</p>
			</div>
			<div class="gb3">
         <img src="../assets/bird.jpg">
				<p id="gbw">BUNNY AND BIRD</p>
			</div>



 				<div class="gb1">
				 <img src="../assets/Pink.jpg">
				<p id="gbw">DESSERT</p>
			</div>
			<div class="gb2">
           <img src="../assets/dinosaur.jpg">
				<p id="gbw">DINOSAUR</p>
			</div>
			<div class="gb3">
				 <img src="../assets/monster.jpg">
				<p id="gbw">MONSTER</p>
			</div>



		</div>















    </div>





  </div>

</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to the main vue '
      }
    }
  }
</script>

<style>
  .main {

    width: 100%;
	  height: auto;

  }

  .main .firstsection h2{
    font-size: 40px;
    padding-bottom: 0px;
    margin-bottom: 10px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    padding-top: 20px;
    font-weight:bold;
  }


   .main .firstsection hr{
    color: #07cbc9;
	  width: 8%;
    margin-left: auto;
	  margin-right: auto;
  }

  .main .firstsection .information{
    width: 30%;
    margin: 0 auto;
  }

  .main .firstsection .information p{
   font-size: 16px;
	font-family: Georgia, 'Times New Roman', Times, serif;
	padding-top: 0px;
	color: #07cbc9;
	padding-bottom: 0px;


  }

  .main .secondsection .middlesection{
    margin: 0 auto;
    position: relative;
  }

  .main .secondsection .leftsection{
    width: 370px;
	  height: 280px;
    margin-top: -400px;
    margin-left: 80px;
    float: left;
    position: absolute;

  }


  .main .secondsection .aboutus{
  overflow: hidden;
	position: relative;
  width: 90%;
	height: 200px;
	border: 2px black solid;
	padding-top: 30px;
	padding-right:40px;
	padding-left: 20px;
	margin-left: 50px;
	margin-top: 0px;
	position: relative;
	background-color: white;
	opacity: 0.7;

  font-size: 15px;
	font-family:Georgia, 'Times New Roman', Times, serif;



  }

  .main .secondsection h2{
    font-family: Palatino Linotype;
    font-size:25px ;
    font-weight: 100;
    margin-right: 200px;

  }

  .main .secondsection .rightsection{
  width: 238px;
	height: 308px;
	float: right;
	position: absolute;
	margin-top: -350px;
	margin-left: 1120px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;


  }

  .rstudents{
    width: 238px;
	height: 144px;
	border:1px  #07cbc9 solid;
	margin-bottom: 20px;
  font-weight: bold;
  }

  .rteachers{
    width: 238px;
	height: 144px;
	border:1px  #07cbc9 solid;
	margin-bottom: 20px;
  font-weight: bold;
  }

  .thirdsection{
	width: 100%;
	height: 100%;
	padding-top: 120px;
}



  .sec1,.sec2,.sec3,.sec4,.sec5,.sec6,.sec7,.sec8 {
	background-color:#07cbc9 ;

	width: 25%;
	height: 252px;
	float: left;
  overflow: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  }


.sec2 h2{
  text-align: left;
	padding-left: 28px;
	padding-top: 0;
  color: white;
  font-weight: bold;
}

.sec4 h2{
  text-align: left;
	padding-left: 30px;
	padding-top: 0px;
  color: white;
}

.sec5 h2{
  text-align: left;
	padding-left: 30px;
	padding-top: 0px;
  color: white;
}

.sec7 h2{
  text-align: left;
	padding-left: 30px;
	padding-top: 0px;
  color: white;
}


#p2{
	font-size: 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
	padding-top: 10px;
	padding-bottom: 20px;
  padding-left: 26px;
   padding-right: 20px;
}

#p3{
	font-size: 12px;
  padding-left: 20px;
  padding-right: 20px;
  color:white;

}


.gallery{
	width: 100%;
	height: auto;
	overflow: hidden;
}


.gallery .gword h2{
	padding-bottom: 0px;
  margin-bottom: 10px;
	font-size: 40px;
  font-family:Georgia, 'Times New Roman', Times, serif;
}

.gallery .gword hr{
	color: #07cbc9;
	width: 8%;
	margin-left: auto;
	margin-right: auto;



}

.gallery .gword p{
	font-size: 16px;
	font-family:Georgia, 'Times New Roman', Times, serif;
	padding-top: 10px;
	color: #07cbc9;
	padding-bottom: 20px;


}
.gstyle{
	width: 40%;
	margin: 0 auto;



}


.gbar{
	width: 100%;
	padding-left: 200px;
}

.gb1,.gb2,.gb3{
	float: left;
	width: 360px;
	height: 304px;
	background-color: black;
	margin-left: 30px;
	border:1px white solid;
	margin-bottom: 25PX;
}

#gbw{
	font-size: 14px;
	font-family:Georgia, 'Times New Roman', Times, serif;
	color: white;
	padding-right: 200px;
	padding-top: 20px;
}





</style>
