import { Overlay, Container, Footer } from "./styles"
import Button from '../Button'
import PropTypes from "prop-types"
import ReactDom from 'react-dom'

export default function Modal({ danger }) {
  return ReactDom.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Titulo do modal</h1>
        <p>corpo do modal</p>

        <Footer>
         <button type="button" className="cancel-button">
          Cancelar
         </button>

         <Button type="button" danger={danger}>
          Deletar
          </Button>
        </Footer>

      </Container>
    </Overlay>,
    document.getElementById('modal-root')
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
