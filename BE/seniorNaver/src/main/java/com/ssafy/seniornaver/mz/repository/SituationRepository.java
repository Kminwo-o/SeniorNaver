package com.ssafy.seniornaver.mz.repository;

import com.ssafy.seniornaver.mz.entity.SituationProblem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SituationRepository extends JpaRepository<SituationProblem, Long> {
    Optional<SituationProblem> findByTitle(String title);
}