<template>
    <div class="boxs">
        <div class="box">
            <div class="per">
                请输入用户名<input type="text" v-model="user" name="" id="">
            </div>
            <div class="per">
                请输入密码<input type="text" v-model="pass" name="" id="">
            </div>
            <div class="">
                <button @click="login">登陆</button>
                <nuxt-link to="/register" tag="button">注册</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
import cookies from "js-cookie"
import { mapMutations } from "vuex";
export default {
    data() {
        return {
            user:"",
            pass:""
        };
    },
    created() {
        console.log(this)
    },
    methods: {
        ...mapMutations({
            setUser:"setUser"
        }),
        login(){
            var obj = {
                name:this.user,
                passwd:this.pass
            }
            axios.post("https://api.apiopen.top/developerLogin",qs.stringify(obj))
            .then(res =>{
                console.log(res);
                cookies.set("token",JSON.stringify(res.data.result));
                 this.setUser(res.data.result.email)
                if(res.data.code == 200){
                    this.$router.push("/");
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
