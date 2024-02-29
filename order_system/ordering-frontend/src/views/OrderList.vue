<template>
    <orderListComponent
        :isAdmin="true"
        apiUrl="/orders"

    />
</template>

<script>
import orderListComponent from '@/components/OrderListComponent.vue'
export default {
    components:{
        orderListComponent
    }

}
</script>
