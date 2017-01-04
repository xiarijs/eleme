<template>
  <div class="header">
    我是头部！！！{{count}}
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        count: 'count'
      })
    },
    created () {
      console.log(this.$store);
    }
  };
</script>

<style lang="sass" rel="stylesheet/sass">

</style>
