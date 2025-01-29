import React from 'react'

const Contact = () => {
  return (
    <div className='container mx-auto bg-stone-200 py-7'>
        <div className='md:px-40 md:py-20  px-7'>
            <h2 className='text-2xl'>Feel Free to Contact Us</h2>

            <form className='flex flex-col gap-4 pt-7' action="">
                <input className='bg-white border w-full rounded-md h-12 p-4 ' placeholder='Name:' type="text" />
                <input className='bg-white border w-full rounded-md h-12 p-4' placeholder='Email:' type="text" />
                <textarea className='bg-white border w-full rounded-md p-4' placeholder='Message' cols={30} name="" id=""></textarea>
                <button className='bg-red-600 rounded-md py-3 text-white '>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact