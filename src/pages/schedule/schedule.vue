<template>
 <div>
     <div class="schdule-top" style="font-size: 0.36rem; text-align: center;line-height: 0.9rem;font-family: 'microsoft yahei';color: #101010 100%;">
     	  我的日程安排
     	  <img src="../../assets/images/icon_button.png"/>
     </div>

     <div class="calendar">
     	  <table border="1px"cellspacing="0" cellpadding="0">
     	  	 <tr >
     	  	 	<td colspan="7" class="calendar-one">{{d1}}</td>

     	  	 </tr>
     	  	 <tr >
     	  	 	<td>日</td>
     	  	 	<td>一</td>
     	  	 	<td>二</td>
     	  	 	<td>三</td>
     	  	 	<td>四</td>
     	  	 	<td>五</td>
     	  	 	<td>六</td>

     	  	 </tr>
     	  	 <tr >
     	  	 	<td></td>
     	  	 	<td></td>
     	  	 	<td></td>
     	  	 	<td></td>
     	  	 	<td></td>
     	  	 	<td></td>
     	  	 	<td></td>
     	  	 </tr>
     	  	 <tr >
     	  	 	<td></td>
     	  	 	<td></td>
     	  	 	<td></td>
     	  	 	<td></td>
     	  	 	<td></td>
     	  	 	<td></td>
     	  	 	<td></td>
     	  	 </tr>


     	  </table>
     </div>

 	<div class="order">
 		<ul>
 			<li>
 				<span>15:30-16:30</span>
 				<span>南山海雅百货店</span>
 				<span>已预约</span>
 			</li>
 		</ul>
 	</div>




 </div>
</template>

<script>
    export default {
    	data(){
    		return{
    			d1:''
    		}

    	},
        created(){
     	    var datelist = new Date();
            var d1=datelist.getFullYear();
            console.log(d1)

            var d2=datelist.getMonth()+1;
            var d3=datelist.getDay();


        },
    }
</script>

<style scoped lang="scss">
	 .schdule-top{
	 	width: 7.5rem;
	 	height: 0.9rem;
	 	background: #F2F2F2 100%;
	 	position: fixed;
	 	z-index: 10;
	 	    img{
	 		width: 0.48rem;
	 		height: 0.48rem;
	 		position: absolute;
	 		margin-left: 1.8rem;
	 		margin-top: 0.2rem;
	 	}

	 }
	 .calendar{
	 	width: 100%;
	 	height: 3.08rem;
	 	position: relative;

	 	top:1.12rem;
	 	table>tr>td{
	 		width: 1.04rem;
	 		height: 0.68rem;
	 		font-size: 0.01rem;
	 		text-align: center;
	 		line-height: 0.68rem;
	 	}

	 }
	 .order{
	 	width: 100%;

	 	position: relative;
	 	top:1.3rem;
	 	background: cadetblue;
	 	ul>li{
	 		display: flex;
	 		flex-direction: row;
	 		span{
	 			flex:1;
	 			font-size: 0.32rem;
	 		}
	 		span:nth-of-type(3){
	 			  text-align: right;
	 		      margin-right: 5%;
	 		}
	 	}




	 }
</style>
