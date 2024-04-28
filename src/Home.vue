<template>
    <div class="wrapper">
      <div class="wrapper__box">hello world</div>
      
    </div>
</template>
<script>
export default {
    name:'Home',
    data(){
       return {} 
    }
}
</script>
<style scoped lang="scss">
@mixin error-style {  
  background: #007bff;   
}  
  
.wrapper{
    background: orange;
    &__box{
        @include error-style;
    }
}
</style>