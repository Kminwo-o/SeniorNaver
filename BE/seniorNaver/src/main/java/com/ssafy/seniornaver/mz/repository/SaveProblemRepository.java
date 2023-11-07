package com.ssafy.seniornaver.mz.repository;

import com.ssafy.seniornaver.mz.entity.SaveProblem;
import com.ssafy.seniornaver.mz.entity.ScrapWord;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SaveProblemRepository extends JpaRepository<SaveProblem, Long> {
    List<ScrapWord> findAllByVocaId(Pageable pageable, Long vocaId);
}
