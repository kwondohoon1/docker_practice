<template>
    <ItemListComponent
    :isAdmin="ture"
    pageTitle="상품목록"
/>
/>
</template>

<script>
import ItemListComponent from '@/components/ItemListComponent.vue';

export default {
    components: { 
        ItemListComponent 
    }
}
</script>
