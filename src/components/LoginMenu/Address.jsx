import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoCheckmark } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

function Adress() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let [data, setData] = useState("")
  let [number, setNumber] = useState("")
  let [info, setInfo] = useState({})
  useEffect(() => {
    const handleShow = () => {
      try {
        fetch("https://mirafgan.me/popcornpolis/user/profile/get", {
          method: "GET",
          headers: {
            "AUTHORIZATION": `Bearer ${localStorage.getItem("token")}`
          }
        }).then(res => {

          return res.json()
        }).then(data => {
          setNumber(data);
          return data
        })
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    handleShow()
  }, [data])

  useEffect(() => {
    fetch(`https://mirafgan.me/popcornpolis/address/getAll`,
      {
        method: "GET",
        headers: {
          "AUTHORIZATION": `Bearer ${localStorage.getItem("token")}`
        },
      })
      .then(res => res.json())
      .then(data => {
        setData(data)
        data?.map(datas => (
          setInfo({
            city: datas?.city,
            firstName: datas?.firstName,
            lastName: datas?.lastName,
            postalCode: datas?.postalCode,
            phone: datas?.phone,
            title: datas?.title,
            state: datas?.state,
            streetAdress1: datas?.streetAdress1,
            streetAdress2: datas?.streetAdress2,
          })
        ))
        return data
      })
  }, [])
  // useEffect(() => {
  //   console.log(data);
  // }, [data])


  const deleteShipping = (id) => {
    fetch(`https://mirafgan.me/popcornpolis/address/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "AUTHORIZATION": `Bearer ${localStorage.getItem("token")}`
        }
      }).then(() => {
        setData(prevData => prevData.filter(item => item.id !== id))
      })
  }

  return (
    <div>
      <div className="pt-[90px] max-[1200px]:pt-[75px] max-lg:pt-[90px]">
        <div className="bg-white p-10 max-[1200px]:px-[1rem] border-[#F2DCCD] rounded-md border">

          <div className="font-sofia  md:flex justify-between">
            <h3 className='text-[26px] max-lg:text-[23.5px] font-faro '>Addresses</h3>
            <NavLink to={"/my-account/new-address"} onClick={deleteShipping} className='bg-[#e22733] px-4 py-1 rounded-full text-[#fff] font-bold inline-flex'>Add New Address</NavLink>
          </div>
          <div className="mt-10">
            <div className="md:flex justify-between gap-x-5">
              <div className="font-sofia w-[50%] h-max max-md:w-full max-md:mb-5 p-4  border-[#D8E0F0] border rounded-md  ">
                <h4 className='text-[17.8px] flex items-center justify-between font-bold'>
                  Billing
                  {/* <IoMdClose className='cursor-pointer' onClick={deleteBilling} /> */}
                </h4>
                <div className="text-[14px] text-[#613223] py-2">
                  You have not set up this type of address yet.
                </div>
                <div className="flex justify-end">
                  <NavLink to={"/my-account/edit-address/billing"}><button className='font-bold bg-[#EDF0F7] hover:bg-white border border-[#D8E0F0] duration-300 p-1 px-4 rounded-full'>Add</button></NavLink>
                </div>
              </div>
              <div className={`w-[50%] max-md:w-full h-max ${!data.length > 0 ? "p-4 border-[#D8E0F0] border rounded-md max-md:w-full" : ""}   `}>
                {data?.length > 0 ?
                  <>
                    {console.log(data)}
                    {data?.map(item => (
                      <div className={`font-sofia mb-2 p-4 border-[#D8E0F0] border rounded-md max-md:w-full`}>
                        <h4 className='text-[17.8px] font-bold flex items-center justify-between'>
                          {item.title}
                          <IoMdClose className='cursor-pointer' onClick={() => deleteShipping(item.id)} />
                        </h4>
                        <div className="text-[14px] text-[#613223] py-2 ">
                          <>
                            <>
                              <p>{item.streetAdress1}</p>
                              <p>{item.streetAdress2}</p>
                              <p>{item.city}</p>
                              <p>{item.state}</p>
                              <p>{item.postalCode}</p>
                              <p>US</p>
                            </>
                          </>
                        </div>
                        <div className="flex justify-end">
                          <NavLink to={`/my-account/edit-address/shipping/${item.id}`}><button className='font-bold bg-[#EDF0F7] hover:bg-white border border-[#D8E0F0] duration-300 p-1 px-4 rounded-full'>Update</button></NavLink>
                        </div>
                      </div>
                    ))}
                  </>
                  :
                  <>
                    <div className="font-sofia  ">
                      <h4 className='text-[17.8px] font-bold  items-center justify-between'>
                        Primary Shipping Address
                      </h4>
                      <p className='text-[14px] text-[#613223] py-2'>You have not set up this type of address yet.</p>
                      <div className="flex justify-end">
                        <NavLink to={`/my-account/new-address`}><button className='font-bold bg-[#EDF0F7] hover:bg-white border border-[#D8E0F0] duration-300 p-1 px-4 rounded-full'>Add</button></NavLink>
                      </div>
                    </div>
                  </>
                }
              </div>

            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Adress