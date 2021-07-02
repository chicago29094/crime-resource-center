import { Modal, Button } from "react-bootstrap";

export default function CRCModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.errorState.title}
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h4>{props.errorState.title}</h4>
          <p>{props.errorState.message}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>

      </Modal>

    );
  }

