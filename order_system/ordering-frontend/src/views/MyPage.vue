<template>
    <div class="container">
        <div class="page-header text-center" style="margin-top: 20px"><h1>나의 정보</h1></div>
        <table class="table">
            <tr>
                <td>이름</td>
                <td>{{memberInfo.name}}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{{memberInfo.email}}</td>
            </tr>
            <tr>
                <td>도시</td>
                <td>{{memberInfo.city}}</td>
            </tr>
            <tr>
                <td>상세주소</td>
                <td>{{memberInfo.street}}</td>
            </tr>
            <tr>
                <td>우편번호</td>
                <td>{{memberInfo.zipcode}}</td>
            </tr>
        </table>
        

    </div>
    <orderListComponent
        apiUrl="/member/myorders"
    />
</template>

<script>
import orderListComponent from '@/components/OrderListComponent.vue'
import axios from 'axios';
export default {
    components:{
        orderListComponent
    },
    data(){
        return{       
            memberInfo: [],
        }

    },
    created(){
        this.fetchMember();
    },
    methods:{
        async fetchMember(){
            try{
            const token = localStorage.getItem('token');
        const headers = {Authorization: `Bearer ${token}`};
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/member/myInfo`, {headers});
        this.memberInfo = response.data;
        }catch(error){
            console.log(error)
        }
        }
    }

}
</script>
