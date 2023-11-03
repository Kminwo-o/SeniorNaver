package com.ssafy.seniornaver.jobposting.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ssafy.seniornaver.error.exception.DontSuchException;
import com.ssafy.seniornaver.error.response.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class JobSearchControllerAdvice {
    @ExceptionHandler(DontSuchException.class)
    public ResponseEntity<ErrorResponse> dontSuchException(DontSuchException e) {
        log.error("dontSuchException : {}", e.getErrorCode().getErrorCode(), e.getErrorCode().getMessage());
        return ErrorResponse.of(e);
    }

    @ExceptionHandler(JsonProcessingException.class)
    public ResponseEntity<ErrorResponse> jsonParseMiss(JsonProcessingException e) {
        log.error("JsonProcessingException : {}", e.getMessage());
        return ErrorResponse.of(e);
    }
}
