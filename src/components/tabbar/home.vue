<template>
    <div>
    <mt-swipe :auto="4000">
  <mt-swipe-item v-for="item in lunbolist" :key="item.id">
      <img :src="item.img" alt="">
  </mt-swipe-item>
 
    </mt-swipe>
     <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		           
		        </ul> 
    </div>
</template>
<script>
export default {
    data () {
        return{lunbolist:[
            {id:1,img:'https://imgcps.jd.com/ling/8217211/6aOe5Yip5rWm576O5ae_5LiT5Zy6/54iG5qy-5Lmw5LiA6LWg5LqM/t-5bd95a756f64f11f63b35cff/3386172c.jpg'},
            {
                id:2,img:'https://img1.360buyimg.com/pop/s590x470_jfs/t28249/29/1349743874/61682/e9a9b4e1/5cdd7303N5d59bd31.jpg!q90!cc_590x470.webp'
            }
        ]}
    },
    created (){
        
    },
    methods : {}
}
        
       

</script>
<style scoped>
    .mint-swipe{
        height: 200px;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .mui-grid-view.mui-grid-9{
        background-color: white;
        border: none
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:none
    }
    ul img{
        width: 60px;
        height: 60px;
    }
    .mui-media-body{font-size: 13px}
</style>
