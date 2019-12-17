<template>
    <div class="info clearfix">
        <div class="tops" >
            <div v-html="datas.data.content">

            </div>
            <div >
                <ul>
                    <li v-for="(item , index) in datas.data.replies" :key="item.id">
                        <img :src="item.author.avatar_url" alt="">
                        {{ item.author.loginname }}
                        <sub>第{{ index + 1 }} 楼</sub>
                        <span style="color:red;">❤ {{ item.ups.length }}</span>
                        <p v-html="item.content"></p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="aside">
            <div class="asideT">
                <h2>
                    个人信息
                </h2>
                <div>
                    <img :src="userInfo.avatar_url" alt="">123
                </div>
                <div>
                    积分{{ userInfo.score }}
                </div>
            </div>
            <div class="asideC">
                <h2>最近的主题</h2>
                <ul>
                    <nuxt-link v-for="item in userInfo.recent_topics" 
                    tag="li"
                    :key="item.id" 
                    :to="`/info/${item.id}?user=${userInfo.loginname}`">
                   
                        {{ item.title }}
                   </nuxt-link>
                </ul>
            </div>
            <div class="asideB">
                <h2>作者最近回复</h2>
                <ul>
                    <li v-for="item in userInfo.recent_replies" :key="item.id">
                        {{ item.title }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    async asyncData({route}){
       var { data } = await axios.get(`https://cnodejs.org/api/v1/topic/${route.params.id}`);
       var userInfo = await axios.get(`https://cnodejs.org/api/v1/user/${route.query.user}`);
       return {
           datas:data,
           userInfo:userInfo.data.data
       }
    },
    data() {
        return {

        };
    },
    created() {

    },
    methods: {

    },
};
</script>

<style scoped lang="scss">
.info{
    width: 90%;
    margin: 10px auto;
    .tops{
        width: calc(100% - 150px);
        float: left;
        background: #fff;
        padding: 10px;
    }
    .aside{
        width: 100px;
        background: #fff;
        
        float: right;
    }
}
</style>
