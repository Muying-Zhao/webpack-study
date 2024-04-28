<template>
    <div class="wrapper">
        <div class="box1">{{ message }}</div>
    </div>
</template>
<script>
export default {
    name: 'TestDemo1',
    setup() {
        const message = 'hello world'
        return {
            message
        }
    }
}
</script>
<style scoped lang="scss">
.wrapper {
    width: 100px;
    height: 100px;
    background: orange;
    .box1{
        background: aquamarine;
    }
}
</style>