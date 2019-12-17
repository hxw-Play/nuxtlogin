<template>
  <div class="mians">
    <div class="top">
      <img :src="imgs" alt="">
      <span>{{ $store.state.userInfo }}</span>
    </div>  
    <div class="main">
      <nuxt />
    </div>
  </div>
</template>
<script>
import imgs from "@/assets/imgs/logo.svg"
export default {
    data () {
      return {
        imgs
      }
    }
}
</script>
<style lang="scss">
.mians{
  height: 100%;
  display: flex;
  flex-direction: column;
  .top{
    height:50px;
    background: #333;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
      height: 28px;
    }
    span{
      display: block;
      height: 50px;
      line-height: 50px;
    }
  }
  .main{
    flex: 1;
  }
}
</style>
<style>
html,body{
  height: 100%;
};
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
