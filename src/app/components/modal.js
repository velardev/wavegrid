import { Modal as FlowbiteModal } from 'flowbite-react'

const Modal = ({ showModal, setShowModal, header, footer, children }) => {
	return (
		<FlowbiteModal show={showModal} onClose={() => setShowModal(false)} dismissible>
			<FlowbiteModal.Header>
				{header}
			</FlowbiteModal.Header>
			<FlowbiteModal.Body>
				{children}
			</FlowbiteModal.Body>
			{footer &&
				<FlowbiteModal.Footer>
					{footer}
				</FlowbiteModal.Footer>
			}
		</FlowbiteModal>
	)
}

export default Modal