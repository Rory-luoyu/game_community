import {ajax} from "@/api/ajax";

/**
 * 用户对帖子以及评论进行的操作
 */
/*点赞帖子*/
export const likePost = (action) => {
    return ajax("actions/likePost", action, "POST");
};
/*取消点赞帖子*/
export const cancelLikePost = (action) => {
    return ajax("actions/cancelLikePost", action, "POST");
};
/*收藏帖子*/
export const collectionPost = (action) => {
    return ajax("actions/collectionPost", action, "POST");
};
/*取消收藏帖子*/
export const cancelCollectionPost = (action) => {
    return ajax("actions/cancelCollectionPost", action, "POST");
};
/*点赞评论*/
export const likeComment = (action) => {
    return ajax("actions/likeComment", action, "POST");
};
/*取消点赞评论*/
export const cancelLikeComment = (action) => {
    return ajax("actions/cancelLikeComment", action, "POST");
};