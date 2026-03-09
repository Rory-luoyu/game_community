import {ajax} from "@/api/ajax";

/**
 * shows路径下为可视数据，无需登录
 */
/*获取帖子数据*/
export const getPostList = (postPage) => {
    return ajax("shows/getPostList", postPage, "POST");
};
/*获取首页轮播图数据*/
export const getNewOfficial = () => {
    return ajax("shows/getNewOfficial");
};
/*获取帖子数据*/
export const getPostData = (postPage) => {
    if (postPage.postId) {
        return ajax("shows/getPostData", postPage, "POST");
    }
};
/*获取帖子简要数据*/
export const getPost = (postId) => {
    return ajax("shows/getPost/" + postId);
};
/*根据用户Id获取用户信息*/
export const getUserById = (id) => {
    return ajax("shows/getUserById/" + id);
};
/*根据评论id获评论信息*/
export const getCommentById = (id) => {
    return ajax("shows/getCommentById/" + id);
};
/*获取评论列表*/
export const getCommentsByPage = (page) => {
    return ajax("shows/getCommentsByPage", page, "POST");
};
/*获取用户的粉丝数据*/
export const getUserFans = (userId) => {
    return ajax("shows/getUserFans/" + userId);
};
/*获取用户的粉丝数据*/
export const getUserFocus = (userId) => {
    return ajax("shows/getUserFocus/" + userId);
};