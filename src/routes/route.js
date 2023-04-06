import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        name:'home',
        component:()=> import("@/components/Home.vue")
    },
    {
        path:'/pratices',
        name:'pratice',
        component:()=> import("@/components/Pratice.vue")
    },
    {
        path:'/contact',
        name:'contact',
        component:()=> import("@/components/Contact.vue")
    },
    {
        path:'/roadmap',
        name:'roadmap',
        component:()=> import("@/components/Roadmap.vue")
    },
    {
        path:'/support',
        name:'support',
        component:()=> import("@/components/Support.vue")
    },
    {
        path:'/about_us',
        name:'about',
        component:()=> import("@/components/AboutUs.vue")
    },
    {
        path:'/lessons',
        name:'lesson',
        component:()=> import("@/components/Lesson.vue"),
        children:[
            {
                path:'subject/:id',
                name:'subject',
                component:()=> import("@/components/StartCourse.vue"),
            }
        ]
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router;
 