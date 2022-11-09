const Message = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal d-block' : 'modal d-none';
    return (
      <div className={showHideClassName} >
        <div class="text-center modal-dialog" role="document">
          <div class="modal-content">
            <h2 class="text-dark">Información</h2>
            <div class="modal-body text-dark">{children}</div>
            <div class="modal-footer">
                <button class="toggle-button"  onClick={handleClose}>
                Cerrar
                </button>
            </div>
           </div>
        </div>
      </div>
    );
}
export default Message;