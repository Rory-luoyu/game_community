import {ajax} from "@/api/ajax";

/**
 * 对帖子数据进行操作（需要用户登录）
 */
/*发布帖子*/
export const releasePost = (post) => {
    return ajax("posts/releasePost", post, "POST");
};
/*修改帖子*/
export const editPost = (post) => {
    return ajax("posts/editPost", post, "POST");
};
/*删除帖子*/
export const deletePost = (postId) => {
    return ajax("posts/deletePost/" + postId, null, "DELETE");
};