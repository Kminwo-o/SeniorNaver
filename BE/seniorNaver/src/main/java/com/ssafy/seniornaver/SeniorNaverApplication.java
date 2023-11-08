package com.ssafy.seniornaver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling // 스케줄러 사용을 위한 어노테이션
public class SeniorNaverApplication {

	public static void main(String[] args) {
		SpringApplication.run(SeniorNaverApplication.class, args);
	}

}
