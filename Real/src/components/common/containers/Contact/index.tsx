import React from 'react'

const Contact = () => {
  return (
    <div className='container py-9'>
        <h3 className='py-3 px-5 md:px-0'>CONTACT</h3>
        <form className='md:flex'>
        <input type="text" name="name" id="nameInput" placeholder='NOMBRE Y APELLIDO' className='block w-96 md:w-4/12 mx-auto md:flex-1 rounded-lg'/>
        <input type="text" name="name" id="nameInput" placeholder='E-MAIL' className='block w-96 mx-auto my-3 md:w-4/12 md:my-0 first-letter:md:flex-1 rounded-lg md:mx-5'/>
        <input type="text" name="name" id="nameInput" placeholder='MESSEGE' className='block w-96 mx-auto my-3 md:w-4/12 md:my-0 md:flex-1 rounded-lg'/>
        <input type="submit" value="SEND" className='rounded-lg bg-white text-black px-5 ml-5' />
        </form>
    </div>
  )
}
export default Contact
