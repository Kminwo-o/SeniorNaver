package com.ssafy.seniornaver.mz.service;

import com.ssafy.seniornaver.mz.entity.*;
import com.ssafy.seniornaver.mz.repository.DictionaryRepository;
import com.ssafy.seniornaver.mz.repository.TagRepository;
import com.ssafy.seniornaver.mz.repository.TagToProblemRepository;
import com.ssafy.seniornaver.mz.repository.TagToWordRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class TagServiceImpl implements TagService{

    private final TagRepository tagRepository;
    private final TagToWordRepository tagToWordRepository;
    private final TagToProblemRepository tagToProblemRepository;
    private final DictionaryRepository dictionaryRepository;

    @Override
    @Transactional
    public void createTag(String word) {
        Optional<Tag> tag = tagRepository.findByTag(word);

        if (tag.isPresent()) {
            return;
        }

        tagRepository.saveAndFlush(Tag.builder()
                        .tag(word)
                        .build());
    }

    @Override
    public void relationWordTag(Dictionary wordId, Tag tag) {
        tagToWordRepository.save(TagToWord.builder()
                        .tagId(tag)
                        .wordId(wordId)
                .build());
    }

    @Override
    public void relationProblemTag(SituationProblem problemId, Tag tag) {
        tagToProblemRepository.saveAndFlush(TagToProblem.builder()
                    .tagId(tag)
                    .problemId(problemId)
                .build());
    }
}
