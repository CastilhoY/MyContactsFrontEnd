import { Overlay, Container, Footer } from "./styles"
import Button from '../Button'
import PropTypes from "prop-types"
import ReactDom from 'react-dom'

export default function Modal({
  danger,
  visible,
  title,
  children,
  calcelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
}) {
  if(!visible){
    return null
  }

  return ReactDom.createPortal(
    <Overlay>
      <Container $danger={danger}>

        <h1>{title}</h1>
        <div className="modal-body">
          {children}
        </div>

        <Footer>
         <button
          type="button"
          className="cancel-button"
          onClick={onCancel}
        >
          {calcelLabel}
         </button>

         <Button
          type="button"
        $danger={danger}
          onClick={onConfirm}
        >
          {confirmLabel}
          </Button>
        </Footer>

      </Container>
    </Overlay>,
    document.getElementById('modal-root')
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  calcelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  danger: false,
  calcelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
};
