package com.ein.crm.commonDto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

@Getter
@Setter
@ToString
public class CommonPage {
    private Integer pageno = 1;
    private Integer size = 10;
    private Integer pageSize;
    private String searchType;
    private String keyWord;
    private boolean pagination = true;

    public Pageable getPageable() {
        return PageRequest.of(pageno - 1, size);
    }

    public boolean shouldPagination() {
        return pagination;
    }

}
