<template>
    <orderListComponent
    :isAdmin="true"
    :apiUrl="`/member/${id}/orders`"
    />
</template>

<script>
import orderListComponent from '@/components/OrderListComponent.vue'
export default {
    props:['id'],
    components:{
        orderListComponent
    }
}
 
</script>
