import App from '../App'
export default [{
    path:'/',
    component: App,
    children:[
        {
            path:'/',
            component:()=>import ('../view/login/login.vue'),
            meta: {  keepAlive: true  },// 需要被缓存
        },
        {
            path:'/login',
            name:'login',
            component:()=>import ('../view/login/login.vue'),
        },
        {
            path:'/home',
            name:"home",
            component:()=>import ('../view/home')
        },
        {
            path:'/about',
            name:'about',
            component:()=>import ('../view/about')
        }
    ]
}]


// import {createRouter,createWebHashHistory} from 'vue-router';
// import Home from '../view/Home.vue';

// const routes =[
//     {
//         path:'/',
//         name:'Home',
//         component:Home
//     },
//     {
//         path:'/about',
//         name:'about',
//         component:()=>
//         import("../view/about")
//     }
// ];
// const router =createRouter({
//     history:createWebHashHistory(),
//     routes
// })

// export default router;




