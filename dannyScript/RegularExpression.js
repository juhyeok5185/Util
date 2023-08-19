
/**
 * @param {param} param 비교가 필요한 값을 객체형태로 보내줘야한다.
 * 빈칸 확인이 필요할시 객체를 보낸다
 */
function blankCheck(param) {
    for (const value of param) {
        if (value.trim() === '') {
            return false;
        }
    }
    return true;
}


/**
 * @param {param} param 비교가 필요한 값을 객체형태로 보내줘야한다.
 * 이름은 username , name , password , password2 ,name, contact , personalId , email로 명시해야한다.
 */
function inputCheck(param) {
    if(param.username != null){
        let regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,20}$/;
        if (regExp.test(param.username)) {
            alert("아이디는 영문자와 숫자 6~20자를 조합해주세요")
            return false;
        }
    }

    if(param.password != null){
        let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*()_+{}\[\]:;<>,.?~\-]{8,16}$/;
        if (!regExp.test(param.password)) {
            alert("비밀번호는 8 ~ 16자 영문, 숫자 조합");
            return false;
        }
    }

    if(param.password2 != null && param.password != null){
        if(param.password != param.password2){
            alert('비밀번호가 다릅니다.');
            return false;
        }
    }

    if(param.name != null){
        let regExp = /^[가-힣]{2,4}$/;
        if (!regExp.test(param.name)) {
            alert('이름을 정확히 입력해주세요');
            return false;
        }
    }

    if(param.contact != null){
        let regExp = /^01(?:0|1|[6-9])-?\d{3,4}-?\d{4}$/;
        if (!regExp.test(param.contact)) {
            alert('휴대번호를 확인해주세요');
            return false;
        }
    }

    if(param.personalId != null){
        let regExp = /^(?:[0-9]{2})(?:0[1-9]|1[0-2])(?:0[1-9]|[1-2][0-9]|3[0,1])[0-9]{7}$/;
        if(!regExp.test(param.personalId)){
            alert('주민번호를 확인해주세요');
            return false;
        }
    }

    if(param.email != null){
        let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        if(!regExp.test(param.email)){
            alert('이메일을 확인해주세요')
            return false;
        }
    }

    return true;
}


