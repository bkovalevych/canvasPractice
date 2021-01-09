import React from "react";
import {Modal, Button} from "react-bootstrap";

export const ErrorModal = ({error, errorTitle, errorText, handleError}) => {
    return (
        <>
            <Modal show={error} onHide={() => handleError()}>
                <Modal.Header closeButton>
                    <Modal.Title>{errorTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{errorText}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleError()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}