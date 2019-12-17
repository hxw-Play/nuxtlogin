<template>
    <div class="boxs">
        <div class="box">
            <div class="per">
                请输入邮箱<input type="text" v-model="user" name="" id="">
            </div>
            <div class="per">
                请输入用户名<input type="text" v-model="pass" name="" id="">
            </div>
            <div class="per">
                请输入密码<input type="text" v-model="pass1" name="" id="">
            </div>
            <div class="">
                <button @click="login">注册</button>
                <nuxt-link to="/login" tag="button">登陆</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
import cookies from "js-cookie"
export default {
    data() {
        return {
            user:"",
            pass:"",
            pass1:""
        };
    },
    created() {

    },
    methods: {
        login(){
            var obj = {
                name:this.pass,
                passwd:this.pass1,
                email:this.user
            }
            axios.post("https://api.apiopen.top/developerRegister",qs.stringify(obj))
            .then(res =>{
                if(res.data.code == 200){
                    this.$router.push("/login");
                }else{
                    alert(res.data.message)
                }
            })
        }
    },
    components: {

    },
};
</script>

<style scoped lang="scss">
.boxs{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .box{
        padding: 20px;
        background: #fff;
    }
}
</style>
