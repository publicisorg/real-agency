
function Modal(props) {

  function setOpenModal(onClose: any) {
    throw new Error("Function not implemented.")
  }

    return  <div className="modal-gallery-wrapper fixed top-0 right-0 left-0 z-99 h-modal overflow-y-auto overflow-x-hidden md:inset-0 md:h-full items-center justify-center flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80" onClick={() => {
      setOpenModal(props.isOpen)
    } }>
      <div className="relative h-full w-full p-4 md:h-auto max-w-3xl">
        <div className="relative rounded-lg bg-white shadow dark:bg-transparent">
          <div className="flex items-start justify-between rounded-t dark:border-black border-b p-5">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Mercedes Benz</h3>
            <button aria-label="Close" onClick={() => {
              setOpenModal(props.onClose)
            } } className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" type="button">
              <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div className="p-2">
            <div className="space-y-6">
      <iframe id="6cdN7N8ntcY" className="playerLocation ytvideo" width="100%" height="400" src={props.data}></iframe>
              
            </div>
          </div>

        </div>
      </div>
    </div>




}

export default Modal;
