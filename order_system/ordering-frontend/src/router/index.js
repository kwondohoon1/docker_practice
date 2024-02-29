import {createRouter, createWebHistory} from 'vue-router';
import LoginComponent from '@/views/LoginComponent.vue';
import BasicComponent from '@/components/BasicComponent.vue';
import ItemList from '@/views/ItemList.vue';
// export default인경우에는 {} 필요없고, 여러개 요소가 있을경우에는 {}필요.
import {memberRoutes} from './memberRouter.js';
import {orderRoutes} from './orderRouter.js';
import { ItemRoutes } from './ItemRouter.js';
const routes = [
    {
        // url경로지정
        path: '/',
        // 이 라우터의 이름
        name: 'HOME',
        component : ItemList,
    },
    {
        path: '/basic',
        name: 'BasicComponent',
        component : BasicComponent,
    },
    {
        path: '/login',
        name: 'Login',
        component : LoginComponent,
    },
    // ...은 스프레드 연산자로 불린다. 주로, 배열요소를 다른 배열요소에 합할때 사용
    ...memberRoutes,
    ...orderRoutes,
    ...ItemRoutes,
];    

const router = createRouter({
    // vue router 는 내부적으로 두가지 방식의 히스토리 관리를 제공
    // 1)createWebHistory, createHashHistory
    history: createWebHistory(),
    routes
});
export default router;