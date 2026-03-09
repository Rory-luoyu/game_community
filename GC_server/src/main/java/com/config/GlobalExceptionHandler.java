package com.config;

import com.pojo.wrapper.RtnData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * 全局异常处理器
 */
@ControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    /**
     * 处理所有异常
     */
    @ExceptionHandler(Exception.class)
    @ResponseBody
    public RtnData handleException(Exception e, HttpServletRequest request) {
        // 记录异常信息
        logger.error("请求路径: {}", request.getRequestURI(), e);
        
        // 返回错误信息
        return RtnData.fail("服务器内部错误: " + e.getMessage());
    }

    /**
     * 处理运行时异常
     */
    @ExceptionHandler(RuntimeException.class)
    @ResponseBody
    public RtnData handleRuntimeException(RuntimeException e, HttpServletRequest request) {
        logger.error("请求路径: {}", request.getRequestURI(), e);
        return RtnData.fail("运行时错误: " + e.getMessage());
    }
}
