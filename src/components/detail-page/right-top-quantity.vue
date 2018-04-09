<template>
    <div class="right-top-quantity">
        <input type="button" value="-" class="jian" @click="count(-1)"><input type="text" class="number" v-model.number="number"><input type="button" value="+" class="jia" @click="count(+1)">
    </div>
</template>

<script>
    export default {
        data(){
            return{
                number:1,
            }
        },
        methods:{
            count(i){
                this.number=this.number+i;
                if(this.number<0){
                    this.number=0
                }
                this.$emit('calculation',this.number)
            }
        },
        computed:{
            
        }
    }
</script>

<style scoped>
.right-top-quantity{
    display: inline-block;
}
.right-top-quantity input{
    width: 27px;
    height: 27px;
    box-sizing: border-box;
    border: 1px solid #e3e3e3;
    background: #ffffff;
}
.right-top-quantity .jia:hover,.right-top-quantity .jian:hover{
    background: #4fc08d;
    color: #ffffff;
}
.right-top-quantity .number{
    border-left: 0;
    border-right: 0;
    text-align: center;
}
</style>