package com.pojo.wrapper;

import lombok.Data;

@Data
public class RtnData {
    private Boolean flag;
    private String msg;
    private Object data;

    // 成功响应
    public static RtnData success() {
        RtnData rtnData = new RtnData();
        rtnData.setFlag(true);
        rtnData.setMsg("操作成功");
        return rtnData;
    }

    // 带数据的成功响应
    public static RtnData success(Object data) {
        RtnData rtnData = new RtnData();
        rtnData.setFlag(true);
        rtnData.setMsg("操作成功");
        rtnData.setData(data);
        return rtnData;
    }

    // 带消息的成功响应
    public static RtnData success(String msg, Object data) {
        RtnData rtnData = new RtnData();
        rtnData.setFlag(true);
        rtnData.setMsg(msg);
        rtnData.setData(data);
        return rtnData;
    }

    // 失败响应
    public static RtnData fail() {
        RtnData rtnData = new RtnData();
        rtnData.setFlag(false);
        rtnData.setMsg("操作失败");
        return rtnData;
    }

    // 带消息的失败响应
    public static RtnData fail(String msg) {
        RtnData rtnData = new RtnData();
        rtnData.setFlag(false);
        rtnData.setMsg(msg);
        return rtnData;
    }

    // 带消息和数据的失败响应
    public static RtnData fail(String msg, Object data) {
        RtnData rtnData = new RtnData();
        rtnData.setFlag(false);
        rtnData.setMsg(msg);
        rtnData.setData(data);
        return rtnData;
    }
}
