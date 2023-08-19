package com.ein.crm.domain.common;

import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@MappedSuperclass
public abstract class BaseTimeEntity {

    @Column(name = "rgstdate")
    private LocalDateTime restday; // 등록일시

    @Column(name = "mdfcdate")
    private LocalDateTime mdfyday; // 최종 수정일시


    @PrePersist
    public void prePersist() {
        this.restday = LocalDateTime.now();
    }

    @PreUpdate
    public void preUpdate() {
        this.mdfyday = LocalDateTime.now();
    }

}