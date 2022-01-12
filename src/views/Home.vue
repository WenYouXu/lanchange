<template>
  <div class="home">
    <div>This is home page
      <button>{{$t('m.loginTxt')}}</button>
      <button @click="change">切换语言</button>
    </div>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
   methods:{
     change(){
       if(this.$i18n.locale === 'en'){
         this.$i18n.locale = 'zh'
       }else{
         this.$i18n.locale = 'en'
       }
     }
   }
}
</script>
