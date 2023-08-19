
/**
 * @param {response} response applyPagination Page<>
 * @param {number} pageno 현재페이지 번호
 */
function Paging(response, pageno) {
    const totalPages = response.totalPages;
    const firstNum = Math.floor((pageno - 1) / 5) * 5 + 1;
    const lastNum = firstNum + 4 >= totalPages ? totalPages : firstNum + 4;
    const prev = firstNum - 1 == 0 ? 1 : firstNum - 1;
    const next = lastNum >= totalPages ? totalPages : lastNum + 1;
    const firstPage = 1;
    const lastPage = totalPages;
    return {pageno, totalPages, firstNum, lastNum, prev, next, firstPage, lastPage};
}


/**
 * @param {Paging} paging applyPagination Page<>
 * @param {tag} pageArea Pagination 부모 태그
 * @param {method} getMethod list Get Method
 * @param {boolean} isFirstGet 페이지 로드시 처음 발생하는 get인지 판단
 */
function PagingFormat(paging , pageArea , getMethod , isFirstGet) {
    const $pageArea = pageArea;
    $pageArea.empty();
    let html = ``;

    html += `
            	<button type="button" class="page_bt first" onclick="getMethod(${paging.firstPage} , ${isFirstGet})">
            	    <span>첫 페이지</span>
            	</button>
            	<button type="button" class="page_bt prev" onclick="getMethod(${paging.prev} , ${isFirstGet})">
            	    <span>이전</span>
            	</button>
    `;
    for (let i = paging.firstNum; i <= paging.lastNum; i++) {
            i === paging.pageno ?
            html += `<button type="button" onclick="getMethod(${i} , ${isFirstGet})" class="on">${i}</button>`
            : html += `<button type="button" onclick="getMethod(${i}, ${isFirstGet})">${i}</button>`;
    }
    html += `
            	<button type="button" class="page_bt next" onclick="getMethod(${paging.next}, ${isFirstGet})">
            	    <span>다음</span>
            	</button>
            	<button type="button" class="page_bt last" onclick="getMethod(${paging.lastPage}, ${isFirstGet})">
            	    <span>마지막 페이지</span>
            	</button>
    `;

    $pageArea.append(html)
}
