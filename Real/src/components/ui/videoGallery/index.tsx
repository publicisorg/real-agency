import React, { useState } from 'react'

const videoGallery = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const gallery = [
    {
      type: "gallery",
      subcategories: [
        {
          name: "video1",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "http://www.arcww.com.ar/assets/works/0b704d5a-09dc-42a0-a9e5-ae4a347b16dd.jpeg",
        },
        {
          name: "video2",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "http://www.arcww.com.ar/assets/works/1.png",
        },
        {
          name: "video3",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "http://www.arcww.com.ar/assets/works/200416023210_visa-summer-2020.jpg",
        },
        {
          name: "video4",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "http://www.arcww.com.ar/assets/works/summer-forever-xxi.png",
        },
        {
          name: "video5",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "http://www.arcww.com.ar/assets/works/200413010713__dsc2504.jpg",
        },
        {
          name: "video6",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "http://www.arcww.com.ar/assets/works/golf_pde_visa007.jpg",
        },
        {
          name: "video7",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "http://www.arcww.com.ar/assets/works/9.png",
        },
        {
          name: "video8",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "http://www.arcww.com.ar/assets/works/Refe_17.png",
        },
        {
          name: "video9",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "http://www.arcww.com.ar/assets/works/VOGUE-CARNAVAL.jpg",
        }
      ]
    }
  ];
  return (
    <div className="p-5 container">
      <div>
        {gallery.map((item, index) => {
          return (
            <div className="border h-9/12  rounded-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6" key={index}>
              {item.subcategories.map((item, index) => {
                return (
                  <><div key={index} className="overflow-hidden h-64">
                    <div className="flex">
                      <div className=" rounded">
                        <img src={item.image} alt="" className="w-max" onClick={handleOpenModal} />
                      </div>
                    </div>
                  </div><div className={`${openModal === true ? 'block' : 'hidden'} modal-terms`}>
                      <div className="modal-terms-content">
                        <div
                          className="closeModal"
                          onClick={() => {
                            setOpenModal(!openModal)
                          } }
                        >

                        </div>
                        <div className="modal-gallery-wrapper fixed top-0 right-0 left-0 z-99 h-modal overflow-y-auto overflow-x-hidden md:inset-0 md:h-full items-center justify-center flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80" onClick={() => {
                          setOpenModal(!openModal)
                        } }>
                          <div className="relative h-full w-full p-4 md:h-auto max-w-3xl">
                            <div className="relative rounded-lg bg-white shadow dark:bg-transparent">
                              <div className="flex items-start justify-between rounded-t dark:border-black border-b p-5">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Mercedes Benz</h3>
                                <button aria-label="Close" onClick={() => {
                                  setOpenModal(!openModal)
                                } } className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" type="button">
                                  <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                              </div>
                              <div className="p-2">
                                <div className="space-y-6">
                                  <iframe id="6cdN7N8ntcY" className="playerLocation ytvideo" width="100%" height="400" src={item.youtube}></iframe>

                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div></>
                );
              })}

            </div>
          );
        })}
      </div>
      
    </div>
  )
}
export default videoGallery;
