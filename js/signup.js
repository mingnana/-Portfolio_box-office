function id_check(){
    var userId = getElementById("uid");
    $.ajax({
        type : "POST",            // HTTP method type(GET, POST) 형식이다.
        url : "/user/idCheck",      // 컨트롤러에서 대기중인 URL 주소이다.
        data : userId,            // Json 형식의 데이터이다.
        success : function(res){ // 비동기통신의 성공일경우 success콜백으로 들어옵니다. 'res'는 응답받은 데이터이다.
            // 응답코드 > 0000
            if(text == "success"){
                alert("아이디 사용이 가능합니다.");
            } else if(text == "nochange"){
            alert("중복된 아이디입니다.");
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown){ // 비동기 통신이 실패할경우 error 콜백으로 들어옵니다.
            alert("통신 실패.")
        }
    });
};

function search_address(){
    new daum.Postcode({ 
    oncomplete: function(data) { 
        document.getElementById("postcode").value = data.zonecode; 
        document.getElementById("address0").value = data.roadAddress; 
    }
}).open(); 
}


function chkAllFunc(){
    var chkAll = document.getElementById("chkAll")
    if(chkAll.checked){
        $("input[name=chk]").attr("checked",true);
    } else{
        $("input[name=chk]").attr("checked", false);
    }
};


function joinform_check(){
var uid = document.getElementById("uid");
var upw = document.getElementById("upw");
var upwRe = document.getElementById("upwRe");
// var upwQues = document.getElementById("upwQues");
var upwAns = document.getElementById("upwAns");
var name = document.getElementById("name");
// var mKind = document.getElementById("mKind");
// var mFirstNo = document.getElementById("mFirstNo");
var mSecondNo = document.getElementById("mSecondNo");
var mLastNo = document.getElementById("mLastNo");
var birth = document.getElementById("birth");
// var agreeAll = document.getElementById("agreeAll");
// var chkAll = document.getElementById("chkAll");
var chk0 = document.getElementById("chk0");
var chk1 = document.getElementById("chk1");
// var chk2 = document.getElementById("chk2");
// var chk3 = document.getElementById("chk3");

if(uid.value == ""){
    alert("아이디를 입력하세요.");
    uid.focus();
    return false;
};

var uidCheck = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,10}$/;

if (!uidCheck.test(uid.value)){
    alert("아이디는 영문소문자+숫자 조합으로 8~10자리를 사용해야 합니다.");
    uid.focus();
    return false;
};

if(upw.value == ""){
    alert("비밀번호를 입력하세요.");
    upw.focus();
    return false;
};

if(upwRe.value !== upw.value){
    alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요");
    upwRe.focus();
    return false;
};

var upwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

if (!upwCheck.test(upw.value)){
    alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~15자리를 사용해야 합니다.");
    upw.focus();
    return false;
};

if(upwAns.value == ""){
    alert("비밀번호 확인질문의 대답을 입력하세요.");
    upwAns.focus();
    return false;
};

if(name.value == ""){
    alert("이름를 입력하세요.");
    name.focus();
    return false;
};

if(mSecondNo.value == ""){
    alert("전화번호를 입력하세요.");
    mSecondNo.focus();
    return false;
};

if(mLastNo.value == ""){
    alert("전화번호를 입력하세요.");
    mLastNo.focus();
    return false;
};

var reg = /^[0-9]+/;

if (!reg.test(mSecondNo, mLastNo)){
    alert("전화번호는 숫자만 입력할 수 있습니다.");
    mSecondNo.focus();
    mLastNo.focus();
    return false;
}

if(address.value == ""){
    alert("주소를 입력하세요.");
    address.focus();
    return false;
};

if(birth.value == ""){
    alert("생일를 입력하세요.");
    birth.focus();
    return false;
};

if(!chk0.checked){
    alert("약관 동의를 체크하세요.");
    chk0.focus();
    return false;
};

if(!chk1.checked){
    alert("약관 동의를 체크하세요.");
    chk1.focus();
    return false;
};
// var count = 0;
document.sign_form.submit();
};


// 모바일버전 footer
$(".showinfo").hide()
var more = true;
function showgnb(){
   if(more == true){
      $(".showinfo").show().animate({"height":"40px"})
      more = false;
   }else{
    $(".showinfo").hide().animate({"height":"0"})
      more = true;
   }
}