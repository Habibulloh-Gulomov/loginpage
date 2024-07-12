import { useState } from "react"
const ModalLogin = () => {
  const [modal, setModal] = useState(false)

  return {modal,setModal}
}

export default ModalLogin