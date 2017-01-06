<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}} / {{seller.deliveryTime}}分钟送达</div>
        <div class="supports" v-if="seller.supports">
          <span class="icon" :class="ClassMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="supports-count" v-if="seller.supports" @click="openDetail">
        <span class="num">{{seller.supports.length}}个</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="openDetail">
      <span class="icon"></span><span class="text">{{seller.bulletin}}</span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" alt="">
    </div>
    <div class="detail" v-show="showDetail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <div class="content">
              <span class="star-item"></span>
              <span class="star-item"></span>
              <span class="star-item"></span>
              <span class="star-item"></span>
              <span class="star-item"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="closeDetail">
        <span class="icon-close"></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: mapGetters([
      'count',
      'seller'
    ]),
    data () {
      return {
        showDetail: false
      };
    },
    created () {
      this.getseller();
      this.ClassMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
    },
    methods: {
      ...mapActions([
        'getseller'
      ]),
      openDetail () {
        this.showDetail = true;
      },
      closeDetail () {
        this.showDetail = false;
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../../common/scss/mixin.scss";
  .header{
    position: relative;
    color: #fff;
    background: rgba(7,17,27,0.5);
    .content-wrapper{
      position: relative;
      padding: 24px 12px 18px 24px;
      font-size: 0;
      .avatar{
        display: inline-block;
        vertical-align: top;
        img{
          display: block;
          width: 64px;
          height: 64px;
          border-radius: 2px;
        }
      }
      .content{
        display: inline-block;
        margin-left: 16px;
        .title{
          margin: 2px 0 8px;
          .brand{
            display: inline-block;
            width: 30px;
            height: 18px;
            margin-right: 6px;
            vertical-align: top;
            @include bg-image("brand");
            background-size: 30px 18px;
            background-repeat: no-repeat;
          }
          .name{
            display: inline-block;
            line-height: 18px;
            font-size: 16px;
            font-weight: bold;
          }
        }
        .description{
          margin-bottom: 10px;
          font-size: 12px;
        }
        .supports{
          .icon{
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            vertical-align: top;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.decrease{
              @include bg-image("decrease_1");
            }
            &.discount{
              @include bg-image("discount_1");
            }
            &.guarantee{
              @include bg-image("guarantee_1");
            }
            &.invoice{
              @include bg-image("invoice_1");
            }
            &.special{
              @include bg-image("special_1");
            }
          }
          .text{
            display: inline-block;
            line-height: 12px;
            font-size: 10px;
          }
        }
      }
      .supports-count{
        position: absolute;
        right: 12px;
        bottom: 14px;
        padding: 0 8px;
        line-height: 24px;
        font-size: 0;
        color: #fff;
        background-color: rgba(0,0,0,0.2);
        border-radius: 14px;
        .num{
          vertical-align: top;
          font-size: 10px;
        }
        .icon-keyboard_arrow_right{
          margin-left: 2px;
          font-size: 10px;
          vertical-align: middle;
        }
      }
    }
    .bulletin-wrapper{
      position: relative;
      height: 28px;
      padding: 0 22px 0 12px;
      line-height: 28px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      background: rgba(7,17,27,0.2);
      .icon{
        display: inline-block;
        width: 22px;
        height: 12px;
        vertical-align: top;
        margin-top: 8px;
        margin-right: 4px;
        @include bg-image('bulletin');
        background-size: 22px 12px;
        background-repeat: no-repeat;
      }
      .text{
        font-size: 12px;
      }
      .icon-keyboard_arrow_right{
        position: absolute;
        top: 50%;
        right: 12px;
        margin-top: -5px;
        font-size: 12px;
      }
    }
    .background{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(10px);
      overflow: hidden;
    }
    .detail{
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      height: 100%;
      overflow: auto;
      background: rgba(7,17,27,0.8);
      .detail-wrapper{
        width: 100%;
        min-height: 100%;
        .detail-main{
          margin-top: 64px;
          padding-bottom: 64px;
          .name{
            margin-bottom: 16px;
            line-height: 18px;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
          }
        }
      }
      .detail-close{
        position: relative;
        width: 32px;
        height:32px;
        margin: -64px auto 0;
        font-size: 32px;
        clear: both;
      }
    }
  }
</style>
