<template>
    <div>
      <div id="app">
        <div class="img-box" v-bind:class="{imgburst:ended}"></div>
        <div v-show="!ended">Egg shell left ：{{health}} %</div>
        <div v-show="ended">Hello puppy！</div>
        <div class="progress">
          <div class="progress-child" v-bind:style="{width: health + '%'}"></div>
        </div>
        <div class="button-box">
          <button class="btn1" v-on:click="blow" v-bind:class="{disabled: ended}" >Break</button>
          <button v-on:click="restart">Restart</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "game",
      data(){
          return{
            health: 100,
            ended: false
          }
      },
      methods: {
        blow: function(){
          this.health -= 10;
          if(this.health <= 0){
            this.ended = true;
            this.health = 0
          }
          // console.log(this.health,this.ended)
        },
        restart: function(){
          this.health = 100;
          this.ended = false;
          // console.log(this.health,this.ended)
        }
      }
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    font-family: Georgia, 'Times New Roman', Times, serif

  }
  em,i {
    font-style: normal
  }
  li {
    list-style: none
  }
  img {
    border: 0;
    vertical-align: middle
  }
  button {
    cursor: pointer
  }
  a {
    color: #666;
    text-decoration: none
  }
  a:hover {
    color: #c81623
  }
  div{
    text-align: center;
    margin-bottom: 5px;
  }
  .img-box{
    width: 340px;
    height: 539px;
    margin: 0 auto;
    background: url("../assets/dog.gif") no-repeat;
  }
  .imgburst{
     width: 280px;
    height: 539px;
    margin: 0 auto;
    background: url("../assets/dog2.gif") no-repeat;
  }
  .progress{
    width: 200px;
    height: 20px;
    margin: 0 auto;
    overflow: hidden;
    background: #fff;
    border-radius: 5px;
    border: 2px solid whitesmoke;
  }
  .progress-child{
    width: 100px;
    height: 20px;
    background: #07cbc9;
  }
  .button-box{
    width: 213px;
    margin: 20px auto;
    overflow: hidden;
  }
  button{
    padding: 10px 20px;
    margin-left: 10px;
    border-radius: 5px;
    border: 1px solid #999;
    background: #07cbc9;
    color:cornsilk;
  }
  button:hover,button:focus{
    outline: none;}
  button:hover{
    background: #4488ff;
    border-color: #4488ff;
    color: #fff;
  }
  .btn1:hover{
    background: red;
    border-color: red;
  }
  button.disabled{
    cursor: not-allowed;
    background: #999
  }

</style>
