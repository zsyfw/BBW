<script setup lang="ts"></script>

<template>
  <scroll-view scroll-y class="index">
    <swiper indicator-dots autoplay circular class="banner">
      <swiper-item>
        <image src="../../static//banner/banner1.jpg" mode="aspectFit" />
      </swiper-item>
      <swiper-item>
        <image src="../../static//banner/banner2.jpg" mode="aspectFit" />
      </swiper-item>
      <swiper-item>
        <image src="../../static//banner/banner3.jpg" mode="aspectFit" />
      </swiper-item>
      <swiper-item>
        <image src="../../static//banner/banner4.jpg" mode="aspectFit" />
      </swiper-item>
      <swiper-item>
        <image src="../../static//banner/banner5.jpg" mode="aspectFit" />
      </swiper-item>
    </swiper>
    <view class="work">
      <view class="place_an_order">
        <image
          class="place_an_order_image"
          src="../../static//images//下单.png"
          mode="scaleToFill"
        />
        <view class="place_an_order_text">发布任务</view>
      </view>
      <view class="Receiving_orders">
        <image
          class="Receiving_orders_image"
          src="../../static//images//接单.png"
          mode="scaleToFill"
        />
        <view class="Receiving_orders_text">接受任务</view>
      </view>
    </view>
  </scroll-view>
</template>

<style lang="scss">
.index {
  //整体
  height: 1200rpx;
  background: lightgoldenrodyellow;

  .banner {
    //轮播图
    width: 100%;
    height: 350rpx;
  }

  .work {
    //接单发单部分
    width: 100%;
    height: 200rpx;
    display: flex;
    justify-content: space-between;
    margin-top: 10rpx;

    image {
      //接单发单部分图片
      height: 150rpx;
      width: 150rpx;
    }

    .place_an_order {
      //发单部分
      margin-left: 80rpx;

      .place_an_order_image {
        //发单部分图片
        opacity: 0.7;
      }

      .place_an_order_text {
        //发单部分文字
        margin-left: 10rpx;
        font-size: 30rpx;
      }
    }

    .Receiving_orders {
      //接单部分
      margin-right: 70rpx;

      .Receiving_orders_image {
        //接单部分图片
        opacity: 1;
      }

      .Receiving_orders_text {
        //接单部分文字
        margin-left: 10rpx;
        font-size: 30rpx;
      }
    }
  }
}
</style>
