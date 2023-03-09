import React from 'react'

function Join() {
  return (
    <div className="mainWrap pt69 p16">
      <di className="section pb48 borderNone">
        <div>
          <label htmlFor="id">아이디</label>
          <input type="text" id="id" name="id"/>
        </div>
        <div>
          <label htmlFor="pwd">비밀번호</label>
          <input type="text" id="pwd" name="pwd" minLength={8} maxLength={16}/>
        </div>
        <div>
          <label htmlFor="pw">비밀번호 재확인</label>
          <input type="text" id="pw" name="pw"/>
        </div>
        <div>
          <label htmlFor="name">이름</label>
          <input type="text" id="name" name="name"/>
        </div>
        <div>
          <label htmlFor="birth">생년월일</label>
          <input type="text" id="birth" name="birth"/>
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input type="text" id="email" name="email"/>
        </div>
        <div>
          <label htmlFor="phone">휴대폰</label>
          <input type="tel" id="phone" name="phone"/>
        </div>
        <div>
          <div className="flex mb8">
            <input type="checkbox" id="agreeCheck" name="agreeCheck" className="mb0 mr8"/>
            <label htmlFor="agreeCheck" className="mb0">광고성 정보 수신 전체 동의<span>(선택)</span></label>
          </div>
          <p className="mb24">입력한 휴대폰 번호와 이메일 주소로 이벤트 및 다양한 광고성 정보를 받으실 수 있습니다. (단, 14세 미만 회원은 이메일 수신만 가능)</p>
          <div className="flex mb8">
            <input type="checkbox" id="emailCheck" name="check" className="mb0 mr8"/>
            <label htmlFor="emailCheck" className="mb0">이메일</label>
          </div>
          <div className="flex mb16">
            <input type="checkbox" id="snsCheck" name="check" className="mb0 mr8"/>
            <label htmlFor="snsCheck" className="mb0">SNS (카카오톡 등 알림 서비스 포함)</label>
          </div>
        </div>
        <button className="btnWide pb48 mb100">회원가입</button>
      </di>
    </div>
  )
}

export default Join