//이메일 체크
function isEmail(asValue) {
    let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue);
}

// 비밀번호 체크 정규식 8 ~ 16자 영문, 숫자 조합
function isPassword1(asValue) {
    let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*()_+{}\[\]:;<>,.?~\-]{8,16}$/;
    return regExp.test(asValue);
}

// 비밀번호 체크 (특수문자 포함) 8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합
function isPassword2(asValue) {
    let regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    return regExp.test(asValue);
}

// 핸드폰 번호 체크
function isPhoneNumber(asValue) {
    let regExp = /^01(?:0|1|[6-9])-?\d{3,4}-?\d{4}$/;
    return regExp.test(asValue);
}


//아이디 체크 영문자로 시작하는 영문자 또는 숫자 6~20자
function isId(asValue) {
    let regExp = /^[a-zA-Z0-9]{6,}$/;
    return regExp.test(asValue);
}

//이름 정규식
function isName(asValue) {
    let regExp = /^[가-힣]{2,4}$/;
    return regExp.test(asValue);
}

//주민등록번호 정규식
function isPersonalId(asValue) {
    let regExp = /^(?:[0-9]{2})(?:0[1-9]|1[0-2])(?:0[1-9]|[1-2][0-9]|3[0,1])[0-9]{7}$/;
    return regExp.test(asValue);
}

function blankCheck(asValues) {
    for (const value of asValues) {
        if (value.trim() === '') {
            return false;
        }
    }
    return true;
}

//username , name , password , password2 ,name, contact , personalId , email
/**
 * 정규식을 확인해주는 함수
 * @param {map} param - 객체형태 {} or FormData 형식
 * @사용법 - const param = {}에 nameList 일치시켜줘야한다.
 * @nameList - username(아이디) , name(이름) ,password(비밀번호) ,password2(비밀번호확인) , name(이름) , contact(연락처) , personalId(주민등록번호) ,email(이메일)
 */
function InputCheck(param) {
    if (param.username != null) {
        if (!isId(param.username)) {
            alert("아이디는 영문자와 숫자 6~20자가 필요합니다.")
            return false;
        }
    }

    if (param.password != null) {
        if (!isPassword1(param.password)) {
            alert("비밀번호는 8 ~ 16자 영문, 숫자 조합");
            return false;
        }
    }
    if (param.password2 != null && param.password != null) {
        if (param.password != param.password2) {
            alert('비밀번호가 다릅니다.');
            return false;
        }
    }

    if (param.name != null) {
        if (!isName(param.name)) {
            alert('이름을 정확히 입력해주세요');
            return false;
        }
    }

    if (param.contact != null) {
        if (!isPhoneNumber(param.contact)) {
            alert('휴대번호를 확인해주세요');
            return false;
        }
    }

    if (param.personalId != null) {
        if (!isPersonalId(param.personalId)) {
            alert('주민번호를 확인해주세요');
            return false;
        }
    }

    if (param.email != null) {
        if (!isEmail(param.email)) {
            alert('이메일을 확인해주세요')
            return false;
        }
    }

    return true;
}


