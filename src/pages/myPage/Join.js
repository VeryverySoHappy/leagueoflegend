import React, { useState, useEffect, useRef, useCallback } from "react";
import Toast from "../../hooks/Toast";
import ServiceModal from "../../components/Modal/ServiceModal";
import PersonalModal from "../../components/Modal/PersonalModal";
import ModalConfirm from "../../components/Modal/ModalConfirm";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";

function Join() {
  // email 인증
  const [email, setEmail] = useState(false);
  const [isEmailToast, setIsEmailToast] = useState(false);
  // 토스트 메세지 목록
  const msgList = {
    available: "아이디 사용이 가능합니다.",
    unavailable: "이미 사용하고 있는 아이디입니다.",
    checkEmail: "메일함을 확인해주세요.",
    emptyId: "아이디를 입력해 주세요.",
    emptyEmail: "이메일을 입력해 주세요",
    emptyEmailCode: "인증번호를 입력해 주세요",
    sentEmail: "인증메일이 전송되었습니다.",
    unavailableEmail: "이메일 주소가 올바르지 않습니다.",
  };
  const [ToastStatus, setToastStatus] = useState(false);
  const [ToastMsg, setToastMsg] = useState("");
  const handleToast = (type) => {
    if (!ToastStatus) {
      setToastStatus(true);
      setToastMsg(msgList[type]);
    }
  };
  // 단계별 표출 on 적용
  const [on, setOn] = useState(0);
  const handleTab = (index) => {
    setOn(index);
  };
  // 동의하기 모달
  const [serviceModal, setServiceModal] = useState(false);
  const [personalModal, setpersonalModal] = useState(false);
  const closeAgreeModal = (state) => {
    setServiceModal(false);
    setpersonalModal(false);
  };
  // 패스워드 타입 토글
  const [togglePw, setTogglePw] = useState(true);
  const [togglePw2, setTogglePw2] = useState(true);
  const [visible, setVisible] = useState(false);
  // 유효성 검사
  // 초기값 세팅 - 아이디, 비밀번호, 비밀번호확인, 이메일, 인증번호
  // 아이디 초기화 초기값
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [emailState, setEmailState] = React.useState("");
  const [certification, setCertification] = React.useState("");
  const [verifyCode, setVerifyCode] = useState("");
  // 유효성 검사 세팅
  const [isId, setIsId] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);
  const [isEmailState, setIsEmailState] = React.useState(false);
  const [isCertification, setIsCertification] = React.useState(false);
  // 중복확인 상태
  const [idCheck, setIdCheck] = useState();
  // 중복확인 눌렀을때 당시의 id
  const [inputId, setInputId] = useState();

  // 이메일 인증하기 시 이메일이 동일한지
  const [inputEmailCheck, setInputEmailCheck] = useState(false);
  // 이메일 인증하기 당시의 email
  const [inputEmail, setInputEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  // 오류메세지 상태 저장
  const [idMessage, setIdMessage] = React.useState("");
  const [passwordMessage, setPasswordMessage] = React.useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    React.useState("");
  const [emailStateMessage, setEmailStateMessage] = React.useState("");
  const [certificationMessage, setCertificationMessage] = React.useState(
    "입력한 이메일 주소로 인증번호가 발송되었습니다. 인증 유효시간은 1시간입니다."
  );
  // 아이디
  const onChangeId = useCallback((e) => {
    // 입력한 값 저장
    const currentId = e.target.value;
    // 아이디 초기화 버튼 - 현재 값
    setId(currentId);
    const idRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,12}$/;
    // 아이디 메시지 조건
    if (!idRegExp.test(currentId)) {
      // 조건에 해당하지 않을 때 나타낼 메시지
      setIdMessage(
        "6~12자 영어 소문자, 숫자, 특수문자를 조합하여 입력해주세요."
      );
      setIsId(false);
    } else {
      // 조건에 해당할 때 나타낼 메시지
      setIdMessage("");
      setIsId(true);
    }
  });
  // 비밀번호
  const onChangePassword = useCallback((e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,15}$/;
    // 비밀번호 메시지 조건
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "10~15자의 영어 대소문자, 숫자, 특수문자 2개 조합으로 입력해 주세요."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("");
      setIsPassword(true);
    }
  });
  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback((e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    const rePasswordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    // 비밀번호 확인 메시지 조건
    if (
      !rePasswordRegExp.test(currentPasswordConfirm) ||
      password !== currentPasswordConfirm
    ) {
      setPasswordConfirmMessage("비밀번호를 확인해주세요!");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("비밀번호가 일치합니다.");
      setIsPasswordConfirm(true);
    }
  });
  // 이메일 주소 확인
  const onChangeEmailState = useCallback((e) => {
    const currentEmail = e.target.value;
    setEmailState(currentEmail);
    const emailRegExp =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    // 이메일 주소 확인 메시지 조건
    if (!emailRegExp.test(currentEmail)) {
      setEmailStateMessage("이메일 형식이 올바르지 않습니다!");
      setIsEmailState(false);
    } else {
      setEmailStateMessage("");
      setIsEmailState(true);
    }
    // if (emailState === inputEmail) {
    //     console.log(emailState, inputEmail);
    //     setEmailCheck(true);
    // } else {
    //     setEmailCheck(false);
    //     console.log('이메일 인증을 다시 해주세요');
    // }
    if (!emailRegExp.test(currentEmail)) {
      // 실패 토스트 메시지
      setIsEmailToast(false);
      // 실패 에러 메시지
      setEmailStateMessage("이메일의 형식이 올바르지 않습니다!");
      setIsEmailState(false);
    } else {
      // 성공 토스트 메시지
      setIsEmailToast(true);
      // 성공 에러 메시지
      setEmailStateMessage("");
      setIsEmailState(true);
    }
    //};
  });
  const [inputVerifyCode, setInputVerifyCode] = useState("");
  const [verifyCodeCheck, setVerifyCodeCheck] = useState(false);
  // 인증번호 확인버튼
  const onCertificationInput = useCallback((e) => {
    setVerifyCode(e.target.value);
    if (inputVerifyCode === verifyCode) {
      console.log("코드 일치");
    } else {
      console.log("코드가 일치 하지않음");
    }
  });
  // 동의하기 모달
  const agreeInput = useRef(null);
  // const handleChecked = state => {
  //     if (state) checkedForce();
  // };
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  useEffect(() => {
    if (ToastStatus) {
      setTimeout(() => {
        setToastStatus(false);
        setToastMsg("");
      }, 1000);
    }
  }, [handleTab, ToastStatus]);

  const [passwordCheck, setPasswordCheck] = useState("");
  const [inputNum, setInputNum] = useState();

  const [authId, setAuthId] = useState();
  const onChangeVeriftCode = useCallback(
    (e) => setVerifyCode(e.target.value),
    []
  );
  // 회원가입 정보 전송
  const joinHandle = () => {};
  // 컨펌 모달 오픈(서비스이용약관)
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmOpen2, setConfirmOpen2] = useState(false);
  // 모달 텍스트
  const [text, setText] = useState("");
  // 컴펌창 확인
  const [payWay, setPayWay] = useState("account");
  // 서비스이용약관 모달
  const navigate = useNavigate();
  const confirmModal = () => {
    setConfirmOpen(true);
  };
  const confirmCloseModal = () => {
    setConfirmOpen(false);
  };
  const handleCheck = () => {
    setCheck1(true);
    confirmCloseModal();
  };
  // 개인정보수집동의 모달
  const confirmModal2 = () => {
    setConfirmOpen2(true);
  };
  const confirmCloseModal2 = () => {
    setConfirmOpen2(false);
  };
  const handleCheck2 = () => {
    setCheck2(true);
    confirmCloseModal2();
  };
  // 아이디 초기화 버튼
  const onResetId = () => {
    // 아이디 초기화 버튼 = 빈값으로 표현
    setId("");
  };
  // 이메일 주소 초기화 버튼
  const onResetEmail = () => {
    setEmailState("");
  };
  // 인증번호 입력 초기화 버튼
  const onResetAuthNumber = () => {
    setCertification("");
  };
  const [allConfirm, setAllConfirm] = useState(false);
  const allConfirmCheck = () => {
    switch (allConfirm) {
      case !idCheck:
        setIdMessage("중복확인을 해주세요");
      case !emailCheck:
        setEmailStateMessage("이메일을 확인해주세요");
      case isPassword !== isPasswordConfirm:
        setPasswordConfirmMessage("비밀번호를 확인해주세요");
      case !verifyCodeCheck:
        setCertificationMessage("인증번호를 확인해주세요");
      default:
        setAllConfirm(true);
    }
  };
  return (
    <main className="mainWrap join">
      <div className={`tabContent ${on === 0 ? "on" : ""}`}>
        <h2 className="title">회원정보입력</h2>
        <form>
          <div className="inputWrap">
            <label htmlFor="id">아이디</label>
            <div className="flex aiStart">
              <div className="inputInner flex">
                <input
                  type="text"
                  placeholder="아이디를 입력해주세요"
                  id="id"
                  minLength={6}
                  maxLength={12}
                  value={id}
                  onChange={onChangeId}
                />
                <CloseIcon className="icon" onClick={onResetId} />
              </div>
              <div
                className="btn"
                onClick={() => {
                  handleToast("available");
                }}
              >
                중복확인
              </div>
            </div>
            <p className="errorMsg">{idMessage}</p>
          </div>
          <div className="inputWrap">
            <label htmlFor="password">비밀번호</label>
            <div className="inputInner mb8">
              <input
                type={`${togglePw ? "password" : "text"}`}
                placeholder="비밀번호를 입력해주세요"
                id="password"
                value={password}
                onChange={onChangePassword}
              />
              {togglePw ? (
                <VisibilityIcon
                  className="eyeIcon icon"
                  onClick={() => {
                    setTogglePw(!togglePw);
                  }}
                />
              ) : (
                <VisibilityOffIcon
                  className="eyeIcon icon"
                  onClick={() => {
                    setTogglePw(!togglePw);
                  }}
                />
              )}
            </div>
            <p className="errorMsg message">{passwordMessage}</p>
          </div>
          <div className="inputWrap">
            <label className="rePassword">비밀번호 확인</label>
            <div className="inputInner mb8">
              <input
                type={`${togglePw2 ? "password" : "text"}`}
                placeholder="비밀번호를 한번 더 입력해주세요"
                id="rePassword"
                value={passwordConfirm}
                onChange={onChangePasswordConfirm}
                onClick={() => {
                  setVisible(!visible);
                }}
              />
              {togglePw2 ? (
                <VisibilityIcon
                  className="eyeIcon icon"
                  onClick={() => {
                    setTogglePw2(!togglePw2);
                  }}
                />
              ) : (
                <VisibilityOffIcon
                  className="eyeIcon icon"
                  onClick={() => {
                    setTogglePw2(!togglePw2);
                  }}
                />
              )}
            </div>
            <p className="errorMsg message">{passwordConfirmMessage}</p>
          </div>
          <div className={`inputWrap email withBtn ${email ? "mb0" : "mb24"}`}>
            <label htmlFor="email">이메일주소</label>
            <div className="flex aiStart">
              <div className="inputInner email">
                <input
                  type="email"
                  placeholder="이메일을 입력해주세요"
                  id="email"
                  value={emailState}
                  onChange={(e) => {
                    onChangeEmailState(e);
                  }}
                />
                <CloseIcon className="closeIcon icon" onClick={onResetEmail} />
              </div>
              <div
                className="btn"
                onClick={() => {
                  if (!isEmailToast) {
                    handleToast("unavailableEmail");
                  } else {
                    handleToast("sentEmail");
                    setTimeout(() => {
                      handleToast("checkEmail");
                    }, 3000);
                    // emailHandle();
                    setEmail(true);
                  }
                }}
              >
                인증하기
              </div>
            </div>
            <p className="errorMsg">{emailStateMessage}</p>
          </div>
          {email ? (
            <div className="inputWrap mb36">
              <label htmlFor="authNumber">인증번호</label>
              <div className="flex aiStart">
                <div className={"inputInner dis"}>
                  <input
                    type="text"
                    placeholder="인증번호를 입력해주세요"
                    id="authNumber"
                    value={verifyCode}
                    onChange={onCertificationInput}
                  />
                  <CloseIcon
                    className="closeIcon icon"
                    onClick={onResetAuthNumber}
                  />
                </div>
                <div
                  className="btn confirmBtn"
                  // 토스트 메시지 사용 x onClick={() => {handleToast('confirm')}}
                  onClick={() => {
                    // onCertification();
                    // authEmailCheck();
                  }}
                >
                  확인
                </div>
              </div>
              <p className="errorMsg">{certificationMessage}</p>
            </div>
          ) : null}
          {ToastStatus && <Toast msg={ToastMsg} />}
        </form>
        <h3>필수 약관 동의</h3>
        <div className="agreeWrap mb36">
          <div className="checkWrap flex jc">
            <input
              type="checkbox"
              id="agreeAll"
              onChange={() => {
                if (!check1 || check2) {
                  setCheck1(true);
                  setCheck2(true);
                } else {
                  setCheck1(false);
                  setCheck2(false);
                }
              }}
              checked={!check1 || !check2 ? false : true}
            />
            <label htmlFor="agreeAll">전체동의</label>
          </div>
          <div className="checkWrap flex jcBtw">
            <div className="flex jcStart">
              <input
                type="checkbox"
                id="agreeService"
                ref={agreeInput}
                onChange={() => (!check1 ? setCheck1(true) : setCheck1(false))}
                checked={check1}
              />
              <label htmlFor="agreeService">(필수) 서비스 약관 동의</label>
            </div>
            <span
              className="btn"
              onClick={() => {
                setServiceModal(true);
              }}
            >
              전문보기
            </span>
          </div>
          <div className="checkWrap flex jcBtw">
            <div className="flex jcStart">
              <input
                type="checkbox"
                id="agreePersonal"
                onChange={() => (!check2 ? setCheck2(true) : setCheck2(false))}
                checked={check2}
              />
              <label htmlFor="agreePersonal">(필수) 개인정보 수집 동의</label>
            </div>
            <span
              className="btn"
              onClick={() => {
                setpersonalModal(true);
              }}
            >
              전문보기
            </span>
          </div>
        </div>
        {check1 && check2 ? (
          <div 
            className="btnWide"
            onClick={()=>{handleTab(1);}}
          >가입완료</div>
        ) : (
          <div
            className="btnWide disable"
            onClick={() => {
              if (check1 && check2) {
                handleTab(1);
              } else if (check1) {
                confirmModal2();
                setText("개인정보수집에 동의하시겠습니까?");
              } else {
                confirmModal();
                setText("서비스이용약관에 동의하시겠습니까?");
              }
            }}
          >
            가입완료
          </div>
        )}
      </div>
      <div className={`tabContent ${on === 1 ? "on" : ""}`}>
        <h2 className="title">회원가입이 완료 되었습니다.</h2>
        <p>
          가입하신 아이디로 모든 서비스를 자유롭게 이용하실 수 있습니다.
          입력하신 회원정보는 회원정보 변경 페이지에서 수정가능합니다.
        </p>
        <Link to={"/"} className="btnWide btnBottom homeBtn">
          메인으로
        </Link>
      </div>
      {serviceModal ? (
        <ServiceModal close={closeAgreeModal} handleClick={setCheck1} />
      ) : null}
      {personalModal ? (
        <PersonalModal close={closeAgreeModal} handleClick={setCheck2} />
      ) : null}
      <ModalConfirm
        open={confirmOpen}
        close={confirmCloseModal}
        text={text}
        handleClick={handleCheck}
      />
      <ModalConfirm
        open={confirmOpen2}
        close={confirmCloseModal2}
        text={text}
        handleClick={handleCheck2}
      />
    </main>
  );
}

export default Join;
