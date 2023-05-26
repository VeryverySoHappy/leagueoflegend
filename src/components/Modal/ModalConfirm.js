import React, { useEffect } from "react";

function ModalConfirm(props) {
  const { open, close, text, handleClick } = props;
  useEffect(() => {}, []);
  return (
    <>
      {open ? (
        <>
          <div className="dimmed" />
          <div className={`modalAlert ${open ? "openModal modal" : "modal"}`}>
            <section>
              <main className="modalBody">{text}</main>
              <footer className="confirm">
                <p onClick={close}>취소</p>
                <p
                  onClick={() => {
                    handleClick();
                  }}
                >
                  확인
                </p>
              </footer>
            </section>
          </div>
        </>
      ) : null}
    </>
  );
}

export default ModalConfirm;
