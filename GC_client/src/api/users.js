import {ajax} from "@/api/ajax";

/**
 * utils路径下为一些公有工具类接口
 */
/*请求后端，重置后端session生命周期*/
export const refreshSession = () => {
    return ajax("utils/refreshSession");
};
/*请求后端session中loginUser的登陆状态*/
export const hasLoginUser = () => {
    return ajax("utils/hasLoginUser");
};

/**
 * users路径下为用户的操作
 */
/*根据密码登录*/
export const loginByPassword = (user) => {
    return ajax("users/doLoginByPassword", user, "POST");
};
/*根据验证码登录*/
export const loginByVCode = (user) => {
    return ajax("users/doLoginByCode", user, "POST");
};
/*type为请求验证码的方式，分为登录和注册（login/register）*/
export const getVCode = (userMail, type) => {
    return ajax("users/getCode/" + userMail + "/" + type);
};
/*注册用户*/
export const registerUser = (user) => {
    return ajax("users/register", user, "POST");
};
/*验证验证码操作*/
export const verifyCode = (user) => {
    return ajax("users/verifyCode", user, "POST");
};
/*使用cookie登录*/
export const loginByCookie = () => {
    return ajax("users/doLoginByCookie");
};
/*修改密码*/
export const changePassword = (user) => {
    return ajax("users/changePassword", user, "POST");
};