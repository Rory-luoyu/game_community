import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
const Post = () => import("@/views/home/Post");
const User = () => import("@/views/home/User");
const Home = () => import("@/views/Home");
const Operate = () => import("@/views/Operate");
const Index = () => import("@/views/home/Index");
const Partition = () => import("@/views/home/Partition");
const NewPost = () => import("@/views/home/NewPost");
const FindPassword = () => import("@/views/operate/FindPassword");
const Register = () => import("@/views/operate/Register");
const PostList = () => import("@/views/home/user/PostList");
const EditUser = () => import("@/views/home/user/EditUser");
const ConnectionList = () => import("@/views/home/user/ConnectionList");
const LikedList = () => import("@/views/home/user/LikedList");
const FansList = () => import("@/views/home/user/FansList");
const FocusList = () => import("@/views/home/user/FocusList");

Vue.use(VueRouter)

const routes = [
    //默认首页
    { path: "/", redirect: "/home" },
    //首页
    {
        path: "/home", component: Home, children: [
            { path: "/", redirect: "index" },
            { name: "index", path: "index", component: Index },
            {
                name: "partition", path: "partition", component: Partition, props($route) {
                    return {
                        partitionId: $route.query.partitionId
                    }
                }
            },
            {
                name: "post", path: "post", component: Post, props($route) {
                    return {
                        postId: $route.query.postId
                    }
                }
            },
            {
                path: "user", component: User, props($route) {
                    return {
                        userId: $route.query.userId
                    }
                }, children: [
                    { name: "user", path: "/", redirect: "postList" },
                    {
                        name: "postList", path: "postList", component: PostList, props($route) {
                            return {
                                userId: $route.query.userId
                            }
                        }
                    },
                    {
                        name: "connectionList", path: "connectionList", component: ConnectionList, props($route) {
                            return {
                                userId: $route.query.userId
                            }
                        }
                    },
                    {
                        name: "likedList", path: "likedList", component: LikedList, props($route) {
                            return {
                                userId: $route.query.userId
                            }
                        }
                    },
                    {
                        name: "fansList", path: "fansList", component: FansList, props($route) {
                            return {
                                userId: $route.query.userId
                            }
                        }
                    },
                    {
                        name: "focusList", path: "focusList", component: FocusList, props($route) {
                            return {
                                userId: $route.query.userId
                            }
                        }
                    },
                    {
                        name: "editUser", path: "editUser", component: EditUser, props($route) {
                            return {
                                userId: $route.query.userId
                            }
                        }
                    },
                ]
            },
            {
                name: "newPost", path: "newPost", component: NewPost, props($route) {
                    return {
                        editPostId: $route.query.editPostId
                    }
                }
            },
        ]
    },
    //操作
    {
        path: "/operate", component: Operate, children: [
            { path: "/", redirect: "findPassword" },
            { name: "findPassword", path: "findPassword", component: FindPassword },
            { name: "register", path: "register", component: Register },
        ]
    }
]

const router = new VueRouter({
    /*mode: "history",*/
    routes,
})

export default router
