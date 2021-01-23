import React from "react";

const Modal = ({ renderFooter, onClose, onClick, children, btnTitle, id, title }) => {
  const renderModalFooter = () => {
    if (renderFooter) {
      return (
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
            onClick={(e) => onClose?.(e)}
          >
            Fechar
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => onClick?.(e)}
          >
            {btnTitle || ""}
          </button>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalCenterTitle">
              {title}
            </h5>
            <button
              id={"closeModal"}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
          {renderModalFooter()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
