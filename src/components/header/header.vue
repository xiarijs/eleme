<template>
  <div class="header">
    <div class="header-wrapper">
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
      <div class="supports-count">
        <span class="num">5个</span>
        <span class="arry"></span>
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
    created () {
      this.getseller();
      this.ClassMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
    },
    methods: mapActions([
      'getseller'
    ])
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../../common/scss/mixin.scss";
  .header{
    background: #000;
    .header-wrapper{
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
        color: #fff;
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
    }
  }
</style>
