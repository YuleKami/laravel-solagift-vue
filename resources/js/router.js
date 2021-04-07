import vueRouter from 'vue-router';
import Vue from 'vue';
import Index from "./views/Index";
import Blog from "./views/Blog";
import Post from "./views/Post";
import CreatePost from "./views/CreatePost";
import NewsPost from "./views/NewsPost";

import CreateNews from "./views/CreateNews";
import News from "./views/News";
import Recall from "./views/Recall";
import CreateRecall from "./views/CreateRecall";
Vue.use(vueRouter);


const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/users',
        component: Blog
    },
    {
        path: '/post/:id',
        component: Post
    },
    {
        path: '/register',
        component: CreatePost
    },
    {
        path: '/create-news',
        component: CreateNews
    },
    {
        path: '/news-post/:id',
        component: NewsPost
    },
    {
        path: '/news',
        component: News
    },
    {
        path: '/recall',
        component: Recall
    },
    {
        path: '/create-recall',
        component: CreateRecall
    },
];

export default new vueRouter({
    mode: 'history',
    routes
});
