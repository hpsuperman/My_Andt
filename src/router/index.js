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
            component:()=>import ('../view/home/home.vue')
        },
        {
            path:'/about',
            name:'about',
            component:()=>import ('../view/about/about.vue')
        },
        {
            path:'/new',
            name:'new',
            component:()=>import("../view/new/new.vue")
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




