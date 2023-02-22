
import { motion } from "framer-motion";

function Modal(props: { isOpen: any; onClose: any; data: string | undefined; name: string; description: string}) {

  const openAnims = {
    hidden: {opacity: 0, transition: { duration: 0.5 }},
    visible: {opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20, delay: 0.4 }},
    visiblebg: {opacity: 1, transition: { duration: 0.25 }},
  }

  function setOpenModal(onClose: any) {
    throw new Error("Function not implemented.")
  }

    return  <motion.div layoutId={props.name} variants={openAnims} initial="hidden" animate="visiblebg" className="z-50 modal-gallery-wrapper fixed top-0 right-0 left-0 z-99 h-modal overflow-y-auto overflow-x-hidden md:inset-0 md:h-full items-center justify-center flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80" onClick={() => {
      setOpenModal(props.isOpen)
    } }>
      <div className="relative h-full w-full p-4 md:h-auto max-w-3xl ">
        <div className="relative rounded-lg bg-white shadow dark:bg-black pb-4 pt-2 px-4">
          <div className="flex items-start justify-between rounded-t p-5">
            <motion.h3 variants={openAnims} initial="hidden" animate="visible" className="text-xl font-medium text-gray-900 dark:text-white">{props.name}</motion.h3>
            <motion.button variants={openAnims} initial="hidden" animate="visible" aria-label="Close" onClick={() => {
              props.onClose()
            } } className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" type="button">
              <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </motion.button>
          </div>
          <div className="p-2">
            <div className="space-y-6">
              <motion.iframe variants={openAnims} initial="hidden" animate="visible" id="6cdN7N8ntcY" className="playerLocation ytvideo" width="100%" height="400" src={props.data}></motion.iframe>
            </div>
          </div>

        </div>
      </div>
    </motion.div>




}

export default Modal;
