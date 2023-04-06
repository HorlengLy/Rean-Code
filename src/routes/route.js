import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        name:'home',
        component:()=> import("@/Views/Home.vue")
    },
    {
        path:'/pratices',
        name:'pratice',
        component:()=> import("@/Views/Pratice.vue")
    },
    {
        path:'/contact',
        name:'contact',
        component:()=> import("@/Views/Contact.vue")
    },
    {
        path:'/roadmap',
        name:'roadmap',
        component:()=> import("@/Views/Roadmap.vue")
    },
    {
        path:'/support',
        name:'support',
        component:()=> import("@/Views/Support.vue")
    },
    {
        path:'/about_us',
        name:'about',
        component:()=> import("@/Views/AboutUs.vue")
    },
    {
        path:'/lessons',
        name:'lesson',
        component:()=> import("@/Views/Lesson.vue"),
        children:[
            {
                path:'',
                name:'lesson.indroducts',
                component:()=> import("@/components/LessonIntro.vue"),
            },
            {
                path:':subject',
                name:'lesson.subject',
                component:()=> import("@/components/LessonContain.vue"),
            }
        ]
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router;
 