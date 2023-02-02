'use client';
import React from 'react';
import { Modal, Button } from '@nextui-org/react';

export default function DevelopmentModal() {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <h3>Still in Development!</h3>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        This page is still in development. Pages may be
                        incompolete or missing.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button size="sm" color="error" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
