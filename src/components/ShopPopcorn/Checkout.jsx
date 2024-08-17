import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineShoppingBag } from 'react-icons/md'

import { NavLink } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Context } from '../../context/ContextProvider'

function Checkout() {
  let title = "#613223"
  let bgcolor = "#E22733"
  let color = "#fff"
  let [total, setTotal] = useState(0)
  const [basket, setBasket] = useContext(Context)
  let [basketItem, setBasketItem] = useState(basket)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    let sum = 0
    let itemSet = {}
    basket.map(item => {
      if (itemSet[item.names]) {
        itemSet[item.names].count += item.count
      } else {
        itemSet[item.names] = { ...item }
      }
      sum += item.price * item.count
    })
    setBasketItem(Array.from(new Set(Object.values(itemSet))))
    setTotal(sum)
  }, [basket])

  const [formData, setFormData] = useState({
    form1: { email: '', phone: '', firstName: '', lastName: '', address: '', apt: '', city: '', state: '', postalCode: '' },
    form2: { firstName: '', lastName: '', address: '', apt: '', city: '', state: '', postalCode: '', expiration: "", cvc: "", card: '' }
  });

  const [formErrors, setFormErrors] = useState({
    form1: { email: '', phone: '', firstName: '', lastName: '', address: '', apt: '', city: '', state: '', postalCode: '' },
    form2: { firstName: '', lastName: '', address: '', apt: '', city: '', state: '', postalCode: '', expiration: "", cvc: "", card: '' }
  });



  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^\+?(\d.*){3,}$/
  const nameRegex = /^[a-zA-Z\s]+$/
  const addressRegex = /^[a-zA-Z0-9\s,.'-]{3,}$/
  const cityRegex = /^[a-zA-Z\s]+$/
  const stateRegex = /^[a-zA-Z\s]{2,}$/
  const postalCodeRegex = /^\d{5}(-\d{4})?$/
  const expRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/
  const cvcRegex = /^[0-9]{3,4}$/;
  const cardRegex = /^(4|5)[0-9 ]{0,22}[0-9]$/
  const validateForm = (forms) => {
    let errors = {}

    if (!emailRegex.test(formData[forms].email)) errors.email = 'Please fill in a valid email'
    if (!phoneRegex.test(formData[forms].phone)) errors.phone = 'Please fill in a valid phone number'
    if (!nameRegex.test(formData[forms].firstName)) errors.firstName = 'Please fill in a valid  first name'
    if (!nameRegex.test(formData[forms].lastName)) errors.lastName = 'Please fill in a valid  last name'
    if (!addressRegex.test(formData[forms].address)) errors.address = 'Please fill in a valid  address'
    if (formData[forms].apt && !addressRegex.test(formData[forms].apt)) errors.apt = 'Please fill in a valid  apt, unit, or suite'
    if (!cityRegex.test(formData[forms].city)) errors.city = 'Please fill in a valid  city'
    if (!stateRegex.test(formData[forms].state)) errors.state = 'Please fill in a valid  state/province'
    if (!postalCodeRegex.test(formData[forms].postalCode)) errors.postalCode = 'Please fill in a valid  postal code'

    if (forms === 'form2') {
      if (!expRegex.test(formData[forms].expiration)) { errors.expiration = 'Please fill in a valid expiration date'; }
      if (!cvcRegex.test(formData[forms].cvc)) { errors.cvc = 'Please fill in a valid CVC'; }
      if (!cardRegex.test(formData[forms].card)) { errors.card = 'Please fill in a valid card number' }
    }



    setFormErrors(prevErrors => ({ ...prevErrors, [forms]: errors }));
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e, form) => {
    e.preventDefault();
    validateForm(form)

  };
  const afterSlash = (value) => {
    if (value.length > 2 && value[2] !== '/') {
      return value.slice(0, 2) + '/' + value.slice(2);
    }
    return value;
  };
  const formatCardNumber = (value) => {
    let formattedValue = '';
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' ';
      }
      formattedValue += value[i];
    }
    return formattedValue;
  };
  const handleChange = (e, form) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "expiration") {
      newValue = afterSlash(value);
    }
    if (name === "card") {
      newValue = formatCardNumber(value.split(' ').join(''));
    }
    console.log(newValue);
    console.log(newValue);
    setFormData(prevData => ({
      ...prevData,
      [form]: {
        ...prevData[form],
        [name]: newValue,
      },
    }));
    setFormErrors(prevErrors => ({
      ...prevErrors,
      [form]: {
        ...prevErrors[form],
        [name]: '',
      },
    }));
  }

  let [open, setOpen] = useState({
    first: false,
    second: true
  })

  const handleOpen = (name) => {
    setOpen((prev) => ({
      first: name === 'second',
      second: name === 'first'
    }))
  }
  let [controls, setControl] = useState({
    agree: false,
    terms: false
  })
  const handleControl = (e) => {
    const { name, value } = e.target
    setControl(prev => ({
      ...prev,
      [name]: !prev[name]
    }))
  }
  let [show, setShow] = useState({})
  const handleCheck = (e) => {
    const { name } = e.target
    setShow(prevState => ({
      ...prevState,
      [name]: !prevState[name]
    }))
  }
  let [gift, setGift] = useState(false)

  return (
    <div className='bg-beige'>
      <Header bgcolor={bgcolor} color={color} title={title} />
      <div className='pt-32'>
        <h3 className='font-turbinado flex justify-center text-[#e22733] items-center text-[90px] max-[1200px]:text-[60px] max-lg:text-[53px] max-md:text-[40px]'><MdOutlineShoppingBag className='text-[50px] ' />Checkout.</h3>
        <div className="px-[30px] max-w-[1180px] mx-auto">
          <div className="md:flex gap-x-16">
            <div className="order-2 md:w-[45%]">

              <div className="flex  order-2 items-center justify-between h-max bg-[#F8EDE6] border rounded-sm border-[#f2dccd] py-5 px-11 max-md:px-2">
                <p className='text-[#613223] text-[18px] '>In your cart</p>
                <NavLink to={"/cart/"} className='text-[14.5px] text-[#386cce] font-sofia underline font-bold hover:no-underline '>Edit</NavLink>
              </div>
              <div className="p-5 px-10 max-md:hidden font-sofia bg-white border rounded-sm border-[#f2dccd]">
                <table className='w-full'>
                  <thead>
                    <tr >
                      <td>Subtotal</td>
                      <td className='text-right'>${total.toFixed(2)}</td>
                    </tr>
                    <tr >
                      <td>Estimated Shipping</td>
                      <td className='text-right'>Pending</td>
                    </tr>
                    <tr >
                      <td>Estimated Tax</td>
                      <td className='text-right'>Pending</td>
                    </tr>
                    <tr className='border-b-2' >
                      <td className='font-bold text-[16px] py-4 pb-10'>TOTAL</td>
                      <td className='font-bold text-[20px] text-right'>${total.toFixed(2)}</td>
                    </tr>
                  </thead>
                </table>
                <tbody >
                  {basketItem.map(item => (
                    <tr className=' '>
                      <td className='w-[50px]'><img src={`${item.cartImg}`} className='max-w-[50px]' alt="" /></td>
                      <td className='w-[50%] font-bold capitalize text-[14px]'>{item.names.split('-').join(" ")} <span className='lowercase'>({item.pack})</span></td>
                      <td className='text-right text-[#9CA5B9]'>Qty: {item.count}</td>
                      <td className='text-right '>${(item.count * item.price).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </div>
            </div>


            <div className="max-md:hidden  md:w-[55%] block">
              <div className={`1ci  mb-2`}>
                <div className="bg-[#613123] py-3 px-2 ">
                  <h3 onClick={() => handleOpen('first')} className='text-white text-[18px] p-3 cursor-pointer'>1.Delivery Options</h3>
                </div>
                <form onSubmit={(e) => handleSubmit(e, "form1")} className={`inputs font-sofia bg-white ${open.first && "hidden"} p-5 px-8 border rounded-sm border-[#f2dccd]`}>
                  <div className="flex gap-x-5">
                    <div className="input w-[50%]">
                      <p className='font-bold my-3'>Email Address</p>
                      <input
                        className={`py-[10px] border-[#c5cee0] ${formErrors.form1.email && `border-[#e22733]`} form border rounded-sm bg-[#FAFBFD] px-2 w-full`}
                        placeholder='Your email address'
                        type="text"
                        name="email"
                        value={formData.form1.email}
                        onChange={(e) => handleChange(e, "form1")}
                      />
                      {formErrors.form1.email && <p className="text-red-500 text-sm">{formErrors.form1.email}</p>}
                    </div>
                    <div className="input w-[50%]">
                      <p className='font-bold my-3'>Phone</p>
                      <input
                        className={`py-[10px] border-[#c5cee0] ${formErrors.form1.phone && `border-[#e22733]`}  border rounded-sm bg-[#FAFBFD] px-2 w-full`}
                        placeholder='Your phone number'
                        type="text"
                        name="phone"
                        value={formData.form1.phone}
                        onChange={(e) => handleChange(e, "form1")}
                      />
                      {formErrors.form1.phone && <p className="text-red-500 text-sm">{formErrors.form1.phone}</p>}
                    </div>
                  </div>
                  <div className="flex gap-x-5">
                    <div className="input w-[50%]">
                      <p className='font-bold my-3'>First Name</p>
                      <input
                        className={`py-[10px] border-[#c5cee0] ${formErrors.form1.firstName && `border-[#e22733]`} border rounded-sm bg-[#FAFBFD] px-2 w-full`}
                        placeholder='Your first name'
                        type="text"
                        name="firstName"
                        value={formData.form1.firstName}
                        onChange={(e) => handleChange(e, "form1")}
                      />
                      {formErrors.form1.firstName && <p className="text-red-500 text-sm">{formErrors.form1.firstName}</p>}
                    </div>
                    <div className="input w-[50%]">
                      <p className='font-bold my-3'>Last Name</p>
                      <input
                        className={`py-[10px] border-[#c5cee0] ${formErrors.form1.lastName && `border-[#e22733]`} border rounded-sm bg-[#FAFBFD] px-2 w-full`}
                        placeholder='Your last name'
                        type="text"
                        name="lastName"
                        value={formData.form1.lastName}
                        onChange={(e) => handleChange(e, "form1")}
                      />
                      {formErrors.form1.lastName && <p className="text-red-500 text-sm">{formErrors.form1.lastName}</p>}
                    </div>
                  </div>
                  <div className="input">
                    <p className='text-[14.5px] font-bold my-3'>Street Address</p>
                    <input
                      className={`py-[10px] border-[#c5cee0]  ${formErrors.form1.address && `border-[#e22733]`} border rounded-sm bg-[#FAFBFD] px-2 w-full mb-4`}
                      placeholder='Your address'
                      type="text"
                      name="address"
                      value={formData.form1.address}
                      onChange={(e) => handleChange(e, "form1")}
                    />
                    {formErrors.form1.address && <p className="text-red-500 text-sm">{formErrors.form1.address}</p>}
                    <input
                      className={`py-[10px] border-[#c5cee0] ${formErrors.form1.apt && `border-[#e22733]`} border rounded-sm bg-[#FAFBFD] px-2 w-full`}
                      placeholder='Apt, Unit, or Suite #'
                      type="text"
                      name="apt"
                      value={formData.form1.apt}
                      onChange={(e) => handleChange(e, "form1")}
                    />
                    {formErrors.form1.apt && <p className="text-red-500 text-sm">{formErrors.form1.apt}</p>}
                  </div>
                  <div className="flex gap-x-2">
                    <div className="input w-[50%]">
                      <p className='text-[14.5px] font-bold my-3'>City</p>
                      <input
                        className={`py-[10px] border-[#c5cee0] ${formErrors.form1.city && `border-[#e22733]`} border rounded-sm bg-[#FAFBFD] px-2 w-full`}
                        placeholder='City'
                        type="text"
                        name="city"
                        value={formData.form1.city}
                        onChange={(e) => handleChange(e, "form1")}
                      />
                      {formErrors.form1.city && <p className="text-red-500 text-sm">{formErrors.form1.city}</p>}
                    </div>
                    <div className="input w-[50%]">
                      <p className='text-[14.5px] font-bold my-3'>State/Province</p>
                      <input
                        className={`py-[10px] border-[#c5cee0] ${formErrors.form1.state && `border-[#e22733]`} border rounded-sm bg-[#FAFBFD] px-2 w-full`}
                        placeholder='State e.g. CA'
                        type="text"
                        name="state"
                        value={formData.form1.state}
                        onChange={(e) => handleChange(e, "form1")}
                      />
                      {formErrors.form1.state && <p className="text-red-500 text-sm">{formErrors.form1.state}</p>}
                    </div>
                  </div>
                  <div className="flex gap-x-2">
                    <div className="input w-[50%]">
                      <p className='text-[14.5px] font-bold my-3'>Country</p>
                      <input
                        className={`py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 w-full`}
                        value="US"
                        type="text"
                        name="country"
                        readOnly
                      />
                    </div>
                    <div className="input w-[50%]">
                      <p className='text-[14.5px] font-bold my-3'>Postal Code</p>
                      <input
                        className={`py-[10px] border-[#c5cee0] ${formErrors.form1.postalCode && `border-[#e22733]`} border rounded-sm bg-[#FAFBFD] px-2 w-full`}
                        placeholder='Zipcode'
                        type="text"
                        name="postalCode"
                        value={formData.form1.postalCode}
                        onChange={(e) => handleChange(e, "form1")}
                      />
                      {formErrors.form1.postalCode && <p className="text-red-500 text-sm">{formErrors.form1.postalCode}</p>}
                    </div>
                  </div>
                  <p onClick={() => { setGift(!gift) }} className='text-[#386cce] underline hover:no-underline text-[14.3px] font-bold my-5 cursor-pointer'>Is this a gift?</p>
                  <textarea rows={10} placeholder='Type your gift message here...' className={`${!gift && "hidden"} border-[#c5cee0] p-2 w-full border rounded-sm bg-[#FAFBFD]`} name="" id=""></textarea>
                  <div className="flex justify-end my-8">
                    <button
                      className='text-[#fff] text-[18px] bg-[rgb(238,39,51)] font-bold py-2 px-7 rounded-full'
                      type="submit"
                      onClick={!(Object.keys(formErrors.form1).length > 0) ? () => handleOpen('second') : undefined}
                    >Save & Continue</button>

                  </div>
                </form>

              </div>


              <div className="bg-[#613123] py-3 px-2 ">
                <h3 className={`text-white  text-[18px] p-3 cursor-pointer`} onClick={!(Object.keys(formErrors.form1).length > 0) ? () => handleOpen('second') : undefined}>2.Payment</h3>
              </div>
              <div className={`2ci `}>
                <div className={`inputs ${open.second && "hidden"} p-5 px-8 font-sofia bg-white   border rounded-sm border-[#f2dccd]`}>
                  <label class="checkout">
                    <p className='text-[14px] my-5 font-bold'>Do you have a coupon code</p>
                    <input onClick={handleCheck} name='coupon' type="checkbox" />
                    <span class="checkmarks"></span>
                  </label>
                  <div className="">
                    <p className='font-bold'>Coupon code</p>
                    <div className={`flex ${!show['coupon'] ? "hidden" : ''} justify-between gap-x-3`}>
                      <input className='py-[7px]  border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full ' type="text" />
                      <button className='text-[#fff]  text-[18px] bg-[#ee2733] font-bold py-2 px-7 rounded-md'>Apply</button>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-[50%]">
                      <h3 className='font-faro text-[18px]'>Billing Address</h3>
                      <label class="checkout">
                        <p className='text-[16px] mt-2 font-bold'>Same as Shipping Address</p>
                        <input onClick={handleCheck} name='shipping' type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </div>
                    <div className="w-[40%]">
                      <h3 className='font-faro text-[18px] mt-5'>Shipping Address</h3>
                      <p className=''>Dolorum esse enim s, Est necessitatibus a, Excepteur tempore e, US</p>
                    </div>
                  </div>
                  <form onSubmit={(e) => handleSubmit(e, "form2")}>
                    <div className={`inputlar ${!show['shipping'] ? "hidden" : ''} `}>
                      <div className="flex gap-x-5">
                        <div className="input w-[50%]">
                          <p className=' font-bold my-3'>First Name</p>
                          <input
                            name="firstName"
                            value={formData.form2.firstName}
                            onChange={(e) => handleChange(e, "form2")}
                            className={`py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] ${formErrors.form2.firstName && `border-[#e22733]`} px-2 w-full`} placeholder='Your first number' type="text" />
                          {formErrors.form2.firstName && <p className="text-red-500 text-sm">{formErrors.form2.firstName}</p>}
                        </div>
                        <div className="input w-[50%]">
                          <p className=' font-bold my-3'>Last Name</p>
                          <input
                            name="lastName"
                            value={formData.form2.lastName}
                            onChange={(e) => handleChange(e, "form2")}
                            className={`py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] ${formErrors.form2.lastName && `border-[#e22733]`} px-2 w-full`} placeholder='Your last number' type="text" />
                          {formErrors.form2.lastName && <p className="text-red-500 text-sm">{formErrors.form2.lastName}</p>}

                        </div>
                      </div>
                      <div className="input ">
                        <p className='text-[14.5px] font-bold my-3'>Street Address</p>
                        <input
                          name="address"
                          value={formData.form2.address}
                          onChange={(e) => handleChange(e, "form2")}
                          className={`py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] ${formErrors.form2.address && `border-[#e22733]`}  px-2 w-full mb-2`} placeholder='Your address ' type="text" />
                        {formErrors.form2.address && <p className="text-red-500 text-sm">{formErrors.form2.address}</p>}
                        <input className={`py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 w-full`} placeholder='Apt,Unit,or Suite #' type="text" />

                      </div>
                      <div className="flex gap-x-2">
                        <div className="input w-[50%]">
                          <p className='text-[14.5px] font-bold my-3'>City</p>
                          <input
                            name="city"
                            value={formData.form2.city}
                            onChange={(e) => handleChange(e, "form2")}
                            className={`py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] ${formErrors.form2.city && `border-[#e22733]`} px-2 w-full`} placeholder='City' type="text" />
                          {formErrors.form2.city && <p className="text-red-500 text-sm">{formErrors.form2.city}</p>}
                        </div>
                        <div className="input w-[50%]">
                          <p className='text-[14.5px] font-bold my-3'>State/Province</p>
                          <input
                            name="state"
                            value={formData.form2.state}
                            onChange={(e) => handleChange(e, "form2")}
                            className={`py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] ${formErrors.form2.state && `border-[#e22733]`}  px-2 w-full`} placeholder='State E.g CA' type="text" />
                          {formErrors.form2.state && <p className="text-red-500 text-sm">{formErrors.form2.state}</p>}

                        </div>
                      </div>
                      <div className="flex gap-x-2">
                        <div className="input w-[50%]">
                          <p className='text-[14.5px] font-bold my-3'>Country</p>
                          <input
                            value="US"
                            type="text"
                            name="country"
                            readOnly
                            className={`py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 w-full`} />
                        </div>
                        <div className="input w-[50%]">
                          <p className='text-[14.5px] font-bold my-3'>Postal Code</p>
                          <input
                            name="postalCode"
                            value={formData.form2.postalCode}
                            onChange={(e) => handleChange(e, "form2")}
                            className={`py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  ${formErrors.form2.postalCode && `border-[#e22733]`} px-2 w-full`} placeholder='Zipcode' type="text" />
                          {formErrors.form2.postalCode && <p className="text-red-500 text-sm">{formErrors.form2.postalCode}</p>}

                        </div>
                      </div>
                    </div>
                    <div className="">
                      <h3 className='font-faro text-[18px]'>Billing Address</h3>
                      <label className="checkout ">
                        <p className='text-[18px] mt-2 font-bold'>Credit Card</p>
                        <input type="checkbox" checked="checked" />
                        <span className="checkmarks_2 rounded-full "></span>
                      </label>
                      <div className="input ">
                        <p className='text-[14.5px] font-bold my-3'>Cart Number</p>
                        <input
                          name='card'
                          value={formData.form2.card}
                          onChange={(e) => handleChange(e, "form2")}
                          maxLength={19}
                          className={`py-[7px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full ${formErrors.form2.card && `border-[#e22733]`}`} placeholder='**** **** **** ****' type="text" />
                        {formErrors.form2.card && <p className="text-red-500 text-sm">{formErrors.form2.card}</p>}

                      </div>
                      <div className="flex gap-x-2 mb-10 ">
                        <div className="input w-[50%]">
                          <p className='text-[14.5px] font-bold my-3'>Expiration (MM/YY) </p>
                          <input
                            name="expiration"
                            value={formData.form2.expiration}
                            onChange={(e) => handleChange(e, "form2")}
                            className={`py-[7px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full ${formErrors.form2.expiration && `border-[#e22733]`}`} placeholder='MM/YY' type="text" />
                          {formErrors.form2.expiration && <p className="text-red-500 text-sm">{formErrors.form2.expiration}</p>}

                        </div>
                        <div className="input w-[50%]">
                          <p className='text-[14.5px] font-bold my-3'>Card Security Code</p>
                          <input
                            name="cvc"
                            value={formData.form2.cvc}
                            onChange={(e) => handleChange(e, "form2")}
                            maxLength={3}
                            className={`py-[7px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full ${formErrors.form2.cvc && `border-[#e22733]`}`} placeholder='CVC' type="text" />
                          {formErrors.form2.cvc && <p className="text-red-500 text-sm">{formErrors.form2.cvc}</p>}

                        </div>
                      </div>
                      <div className="border-y-2">
                        <label class="checkout ">
                          <input onClick={handleControl} name='agree' type="checkbox" />
                          <label ><p className='text-[16px] my-5 font-bold'>I agree to receive occasional emails and offers from Popcornopolis.</p></label>
                          <span class="checkmarks"></span>
                        </label>
                      </div>
                      <p className='text-[16px]'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <NavLink className="underline hover:no-underline font-bold">privacy policy</NavLink></p>

                    </div>
                    <div className="flex flex-wrap items-center justify-between mt-5 relative">
                      <label class="checkout mt-2 ">
                        <p className='text-[16px] max-lg:text-[14px] font-bold'>I have read <NavLink className="text-[#386cce]">terms and conditions</NavLink></p>
                        <input onClick={handleControl} name='terms' type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                      <div className="justify-end flex">
                        <button type='submit' className={`${(controls["agree"] && controls['terms']) ? "opacity-100" : " opacity-70 pointer-events-none"} text-[#fff]    max text-[17px] bg-[#ee2733] font-bold py-2 px-7 rounded-full`}>Place Order</button>
                      </div>
                    </div>


                  </form>
                </div>


              </div>



            </div>
            {/* mobilllllll */}

            <div className="max-md:block hidden">
              <div className="1ci  md:w-[50%]">
                <div className="bg-[#613123] py-3 px-2 max-md:mt-5">
                  <h3 onClick={() => handleOpen('first')} className='text-white text-[18px]'>1.Delivery Options</h3>
                </div>
                <form onSubmit={(e) => handleSubmit(e, "form1")} className={`inputs font-sofia bg-white px-2   ${open.first && "hidden"} border rounded-sm border-[#f2dccd]`}>
                  <div className="input ">
                    <p className='text-[14.5px] font-bold my-3'>Email Address</p>
                    <input
                      name="email"
                      value={formData.form1.email}
                      onChange={(e) => handleChange(e, "form1")} className={`py-[7px] ${formErrors.form1.email && `border-[#e22733]`} border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} placeholder='Your email address' type="text" />
                    {formErrors.form1.email && <p className="text-red-500 text-sm">{formErrors.form1.email}</p>}
                  </div>
                  <div className="input ">
                    <p className='text-[14.5px] font-bold my-3'>Phone</p>
                    <input name="phone"
                      value={formData.form1.phone}
                      onChange={(e) => handleChange(e, "form1")} className={`py-[7px] ${formErrors.form1.phone && `border-[#e22733]`} border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} placeholder='Your phone number' type="text" />
                    {formErrors.form1.phone && <p className="text-red-500 text-sm">{formErrors.form1.phone}</p>}

                  </div>
                  <div className="input ">
                    <p className='text-[14.5px] font-bold my-3'>First Name</p>
                    <input name="firstName"
                      value={formData.form1.firstName}
                      onChange={(e) => handleChange(e, "form1")} className={`py-[7px] ${formErrors.form1.firstName && `border-[#e22733]`} border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} placeholder='Your first number' type="text" />
                    {formErrors.form1.firstName && <p className="text-red-500 text-sm">{formErrors.form1.firstName}</p>}

                  </div>
                  <div className="input ">
                    <p className='text-[14.5px] font-bold my-3'>Last Name</p>
                    <input name="lastName"
                      value={formData.form1.lastName}
                      onChange={(e) => handleChange(e, "form1")} className={`py-[7px] ${formErrors.form1.lastName && `border-[#e22733]`} border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} placeholder='Your last number' type="text" />
                    {formErrors.form1.lastName && <p className="text-red-500 text-sm">{formErrors.form1.lastName}</p>}

                  </div>
                  <div className="input ">
                    <p className='text-[14.5px] font-bold my-3'>Street Address</p>
                    <input name="address"
                      value={formData.form1.address}
                      onChange={(e) => handleChange(e, "form1")} className={`py-[7px] ${formErrors.form1.address && `border-[#e22733]`} border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full mb-4`} placeholder='Your address ' type="text" />
                    {formErrors.form1.address && <p className="text-red-500 text-sm">{formErrors.form1.address}</p>}

                    <input name="apt"
                      value={formData.form1.apt}
                      onChange={(e) => handleChange(e, "form1")} className={`py-[7px] ${formErrors.form1.apt && `border-[#e22733]`} border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} placeholder='Apt,Unit,or Suite #' type="text" />
                    {formErrors.form1.apt && <p className="text-red-500 text-sm">{formErrors.form1.apt}</p>}

                  </div>
                  <div className="flex gap-x-2">
                    <div className="input w-[50%]">
                      <p className='text-[14.5px] font-bold my-3'>City</p>
                      <input name="city"
                        value={formData.form1.city}
                        onChange={(e) => handleChange(e, "form1")} className={`py-[7px] ${formErrors.form1.city && `border-[#e22733]`} border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} placeholder='City' type="text" />
                      {formErrors.form1.city && <p className="text-red-500 text-sm">{formErrors.form1.city}</p>}

                    </div>
                    <div className="input w-[50%]">
                      <p className='text-[14.5px] font-bold my-3'>State/Province</p>
                      <input name="state"
                        value={formData.form1.state}
                        onChange={(e) => handleChange(e, "form1")} className={`py-[7px] ${formErrors.form1.state && `border-[#e22733]`} border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} placeholder='State E.g CA' type="text" />
                      {formErrors.form1.state && <p className="text-red-500 text-sm">{formErrors.form1.state}</p>}

                    </div>
                  </div>
                  <div className="flex gap-x-2">
                    <div className="input w-[50%]">
                      <p className='text-[14.5px] font-bold my-3'>Country</p>
                      <input readOnly name="country" className={`py-[7px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} value="US" type="text" />
                    </div>
                    <div className="input w-[50%]">
                      <p className='text-[14.5px] font-bold my-3'>Postal Code</p>
                      <input name="postalCode"
                        value={formData.form1.postalCode}
                        onChange={(e) => handleChange(e, "form1")} className={`py-[7px] ${formErrors.form1.postalCode && `border-[#e22733]`} border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} placeholder='Zipcode' type="text" />
                      {formErrors.form1.postalCode && <p className="text-red-500 text-sm">{formErrors.form1.postalCode}</p>}

                    </div>
                  </div>
                  <p onClick={() => { setGift(!gift) }} className='text-[#386cce] underline hover:no-underline text-[14.3px] font-bold my-5'>Is this a gift?</p>
                  <textarea rows={10} placeholder='Type your gift message here...' className={`${!gift && "hidden"} border-[#c5cee0] p-2 w-full border rounded-sm bg-[#FAFBFD]`} name="" id=""></textarea>
                  <div className="flex justify-end my-8 ">
                    <button type="submit" onClick={!(Object.keys(formErrors.form1).length > 0) ? () => handleOpen('second') : undefined} className='text-[#fff]  text-[18px] bg-[#ee2733] font-bold py-2 px-7 rounded-full'>Save & Continue</button>
                  </div>

                </form>

              </div>
              <div className="2ci ">
                <div className="bg-[#613123] py-3 px-2 mt-5">
                  <h3 onClick={!(Object.keys(formErrors.form1).length > 0) ? () => handleOpen('second') : undefined} className='text-white text-[18px]'>2.Payment</h3>
                </div>
                <div className={`inputs ${open.second && "hidden"} font-sofia bg-white px-2  border rounded-sm border-[#f2dccd]`}>
                  <label class="checkout">
                    <p className='text-[14px] my-5 font-bold'>Do you have a coupon code</p>
                    <input onClick={handleCheck} name='coupon' type="checkbox" />
                    <span class="checkmarks"></span>
                  </label>
                  <div className="">
                    <p className='font-bold'>Coupon code</p>
                    <div className={`flex ${!show['coupon'] ? "hidden" : ''} justify-between gap-x-3`}>
                      <input className='py-[7px]  border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full ' type="text" />
                      <button className='text-[#fff]  text-[18px] bg-[#ee2733] font-bold py-2 px-7 rounded-md'>Apply</button>
                    </div>
                  </div>
                  <h3 className='font-faro text-[18px]'>Billing Address</h3>
                  <label class="checkout">
                    <p className='text-[14px] mt-2 font-bold'>Same as Shipping Address</p>
                    <input onClick={handleCheck} name='shipping' type="checkbox" />
                    <span class="checkmarks"></span>
                  </label>

                  <h3 className='font-faro text-[18px] mt-5'>Shipping Address</h3>
                  <p className='text-[14.3px]'>Dolorum esse enim s, Est necessitatibus a, Excepteur tempore e, US</p>
                  <form onSubmit={(e) => handleSubmit(e, "form2")} >
                    <div className={`inputlar ${!show['shipping'] ? "hidden" : ''}`}>
                      <div className="input ">
                        <p className='text-[14.5px] font-bold my-3'>First Name</p>
                        <input name="firstName"
                          value={formData.form2.firstName}
                          onChange={(e) => handleChange(e, "form2")} className={`py-[7px] ${formErrors.form2.firstName && `border-[#e22733]`}  border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} placeholder='Your first number' type="text" />
                        {formErrors.form2.firstName && <p className="text-red-500 text-sm">{formErrors.form2.firstName}</p>}

                      </div>
                      <div className="input ">
                        <p className='text-[14.5px] font-bold my-3'>Last Name</p>
                        <input name="lastName"
                          value={formData.form2.lastName}
                          onChange={(e) => handleChange(e, "form2")} className={`py-[7px] ${formErrors.form2.lastName && `border-[#e22733]`} border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} placeholder='Your last number' type="text" />
                        {formErrors.form2.lastName && <p className="text-red-500 text-sm">{formErrors.form2.lastName}</p>}

                      </div>
                      <div className="input ">
                        <p className='text-[14.5px] font-bold my-3'>Street Address</p>
                        <input name="address"
                          value={formData.form2.address}
                          onChange={(e) => handleChange(e, "form2")} className={`py-[7px] ${formErrors.form2.address && `border-[#e22733]`} border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full mb-2`} placeholder='Your address ' type="text" />
                        {formErrors.form2.address && <p className="text-red-500 text-sm">{formErrors.form2.address}</p>}

                        <input className={`py-[7px]  border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} placeholder='Apt,Unit,or Suite #' type="text" />
                      </div>
                      <div className="flex gap-x-2">
                        <div className="input w-[50%]">
                          <p className='text-[14.5px] font-bold my-3'>City</p>
                          <input name="city"
                            value={formData.form2.city}
                            onChange={(e) => handleChange(e, "form2")} className={`py-[7px] ${formErrors.form2.city && `border-[#e22733]`} border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} placeholder='City' type="text" />
                          {formErrors.form2.city && <p className="text-red-500 text-sm">{formErrors.form2.city}</p>}

                        </div>
                        <div className="input w-[50%]">
                          <p className='text-[14.5px] font-bold my-3'>State/Province</p>
                          <input name="state"
                            value={formData.form2.state}
                            onChange={(e) => handleChange(e, "form2")} className={`py-[7px] ${formErrors.form2.state && `border-[#e22733]`} border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} placeholder='State E.g CA' type="text" />
                          {formErrors.form2.state && <p className="text-red-500 text-sm">{formErrors.form2.state}</p>}

                        </div>
                      </div>
                      <div className="flex gap-x-2">
                        <div className="input w-[50%]">
                          <p className='text-[14.5px] font-bold my-3'>Country</p>
                          <input className={`py-[7px]  border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} value="US" type="text" />
                        </div>
                        <div className="input w-[50%]">
                          <p className='text-[14.5px] font-bold my-3'>Postal Code</p>
                          <input name="postalCode"
                            value={formData.form2.postalCode}
                            onChange={(e) => handleChange(e, "form2")} className={`py-[7px] ${formErrors.form2.postalCode && `border-[#e22733]`} border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} placeholder='Zipcode' type="text" />
                          {formErrors.form2.postalCode && <p className="text-red-500 text-sm">{formErrors.form2.postalCode}</p>}

                        </div>
                      </div>
                    </div>
                    <h3 className='font-faro text-[18px]'>Billing Address</h3>
                    <label className="checkout ">
                      <p className='text-[18px] mt-2 font-bold'>Credit Card</p>
                      <input type="checkbox" checked="checked" />
                      <span className="checkmarks rounded-full "></span>
                    </label>
                    <div className="input ">
                      <p className='text-[14.5px] font-bold my-3'>Cart Number</p>
                      <input name='card'
                        maxLength={19}
                        value={formData.form2.card}
                        onChange={(e) => handleChange(e, "form2")} className={`py-[7px] border-[#c5cee0] ${formErrors.form2.card && `border-[#e22733]`} border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} placeholder='**** **** **** ****' type="text" />
                      {formErrors.form2.card && <p className="text-red-500 text-sm">{formErrors.form2.card}</p>}

                    </div>
                    <div className="flex gap-x-2 mb-10 ">
                      <div className="input w-[50%]">
                        <p className='text-[14.5px] font-bold my-3'>Expiration (MM/YY) </p>
                        <input name="expiration"
                          value={formData.form2.expiration}
                          onChange={(e) => handleChange(e, "form2")} className={`py-[7px] ${formErrors.form2.expiration && `border-[#e22733]`} border-[#c5cee0] border rounded-sm bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} placeholder='MM/YY' type="text" />
                        {formErrors.form2.expiration && <p className="text-red-500 text-sm">{formErrors.form2.expiration}</p>}

                      </div>
                      <div className="input w-[50%]">
                        <p className='text-[14.5px] font-bold my-3'>Card Security Code</p>
                        <input name="cvc"
                          value={formData.form2.cvc}
                          onChange={(e) => handleChange(e, "form2")}
                          maxLength={3} className={`py-[7px] border-[#c5cee0] border rounded-sm ${formErrors.form2.cvc && `border-[#e22733]`} bg-[#FAFBFD] placeholder:text-[14.5px] px-2 w-full`} placeholder='CVC' type="text" />
                        {formErrors.form2.cvc && <p className="text-red-500 text-sm">{formErrors.form2.cvc}</p>}

                      </div>
                    </div>
                    <div className="border-y-2">
                      <label class="checkout ">
                        <p className='text-[14px] my-5 font-bold'>I agree to receive occasional emails and offers from Popcornopolis.</p>
                        <input onClick={handleControl} name='agree' type="checkbox" />
                        <span class="checkmarks"></span>
                      </label>
                    </div>
                    <p className='text-[14.3px]'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <NavLink className="underline hover:no-underline font-bold">privacy policy</NavLink></p>
                    <label class="checkout ">
                      <p className='text-[14px] my-5 font-bold'>I have read <NavLink className="text-[#386cce]">terms and conditions</NavLink></p>
                      <input onClick={handleControl} name='terms' type="checkbox" />
                      <span class="checkmarks"></span>
                    </label>
                    <button className={`${(controls["agree"] && controls['terms']) ? "opacity-100" : " opacity-70 pointer-events-none"} text-[#fff] w-full text-[18px] bg-[#ee2733] font-bold py-2 px-7 rounded-full`}>Place Order</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Checkout