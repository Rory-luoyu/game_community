import {ajax} from "@/api/ajax";

/**
 * 对评论数据进行操作（需要用户登录）
 */
/*发表评论*/
export const commentPost = (comment) => {
    return ajax("comments/commentPost", comment, "POST");
};
/*评论帖子*/
export const commentComment = (comment) => {
    return ajax("comments/commentComment", comment, "POST");
};