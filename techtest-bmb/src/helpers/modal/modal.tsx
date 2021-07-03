/* eslint-disable @typescript-eslint/no-unused-vars */

// import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Modal() {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

//     return (
//       <>
//         <button onClick={() => setSmShow(true)}>Small modal</button>{' '}
//         <button onClick={() => setLgShow(true)}>Large modal</button>
//         <Modal
//           size="sm"
//           show={smShow}
//           onHide={() => setSmShow(false)}
//           aria-labelledby="example-modal-sizes-title-sm"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="example-modal-sizes-title-sm">
//               Small Modal
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>...</Modal.Body>
//         </Modal>
//         <Modal
//           size="lg"
//           show={lgShow}
//           onHide={() => setLgShow(false)}
//           aria-labelledby="example-modal-sizes-title-lg"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="example-modal-sizes-title-lg">
//               Large Modal
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>...</Modal.Body>
//         </Modal>
//       </>
//     );
//   }

//   render(<Example />);
}

  export default Modal