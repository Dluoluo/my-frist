<template>
    <div class="mask" v-show="maskIsShow">
        <transition name="transalert">
            <div class="alert" v-show="maskIsShow">
                <div class="close"><span @click="closeMask">X</span></div>
                <slot name="landed"></slot>
                <slot name="login"></slot>
                <slot name="on"></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props:{
        maskIsShow:Boolean
    },
    methods:{
        closeMask(){
            this.$emit('closeMasks')
        }
    }
};
</script>

<style scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.alert {
  width: 730px;
  position: fixed;
  left: 50%;
  margin-left: -365px;
  padding: 5px;
  background: #ffffff;
  border: 2px solid #464068;
  box-sizing: border-box;
  transform: translateY(150px);
}
.close {
  text-align: right;
}
.close span {
  display: inline-block;
  font-size: 15px;
  padding: 10px;
  cursor: pointer;
}
.close span:hover {
  color: #5cc495;
}
.transalert-enter-active,
.transalert-leave-active {
  transition: all 1s;
}
.transalert-enter,
.transalert-leave-to {
  transform: translateY(0px);
}
.transalert-enter-to,
.transalert-leave {
  transform: translateY(150px);
}
</style>    