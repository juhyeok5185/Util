/**
 * List , Read RequestParam 형식 AJAX Method
 * @param {string} url controller 주소
 * @param {param} param 객체형식의 변수로 requestParam으로 전달한다.
 */
function AjaxGetParamType(url, param) {
    $.ajax({
        url: url,
        method: "get",
        data: param,
        success: response => {
            return response;
        },
        error: err => {
            console.log(err);
        }
    });
}




/**
 * Delete , Write , Update RequestParam 형식 AJAX Method
 * @param {string} url controller 주소
 * @param {param} param 객체형식의 변수로 requestParam으로 전달한다.
 * @param {string} moveHref 변경될 페이지
  */
function AjaxPostParamType(url, param , moveHref) {
    $.ajax({
        url: url,
        method: "post",
        data: param,
        success: response => {
            alert(response);
            location.href = moveHref;
        },
        error: err => {
            console.log(err);
        }
    });
}




/**
 * Delete , Write , Update formData 형식 AJAX Method
 * @param {string} url controller 주소
 * @param {formData} formData formData 형식의 Input Value
 * @param {string} moveHref 변경될 페이지
 */
function AjaxPostFormDataType(url, formData , moveHref) {
    $.ajax({
        url: url,
        method: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            alert(response);
            location.href = moveHref;
        },
        error: function (error) {
            console.error("파일 업로드 실패:", error);
        }
    });
}
