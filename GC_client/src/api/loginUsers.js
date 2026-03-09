import {ajax} from "@/api/ajax";

/**
 * 需要登录权限的后端操作
 */
/*退出登录*/
export const logoutUser = () => {
    return ajax("loginUsers/logoutUser");
};
/*后端删除图片*/
export const clearImg = (img) => {
    return ajax("loginUsers/clearAvatar", img, "POST");
};
/*修改用户信息*/
export const editUser = (user) => {
    return ajax("loginUsers/editUser", user, "POST");
};
/*注销session操作*/
export const destroySession = () => {
    return ajax("loginUsers/destroySession");
};
/*关注用户*/
export const focusUser = (focusUserId) => {
    return ajax("loginUsers/focusUser/" + focusUserId);
};
/*取消关注用户*/
export const cancelFocusUser = (focusUserId) => {
    return ajax("loginUsers/cancelFocusUser/" + focusUserId);
};