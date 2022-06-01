import React from 'react'

function Faq() {
  return (
    <>
      <div className='px-24 pt-32 pb-24 poppins bg-[#F8F8F8] flex flex-col gap-8'>
        {/* DELIVERY */}
        <h1 className='text-4xl font-semibold underline underline-offset-4'>DELIVERY</h1>
        <p className='font-semibold text-lg'>Is the delivery free for all over Nepal?</p>
        <p>Yes delivery is free all over Nepal</p>
        <p className='font-semibold text-lg'>When will receive the product?</p>
        <p>The products are only delivered on business days from Sunday to Friday</p>
        <p className='font-semibold text-lg'>When will receive the product?</p>
        <p>Products will be delivered within 2 days from the date of order inside Kathmandu Valley. For outside Kathmandu Valley the time may vary depending upon your location.</p>
        {/* EXCHANGE AND RETURN */}
        <h1 className='text-4xl font-semibold underline underline-offset-4'>EXCHANGE AND RETURN</h1>
        <p className='font-semibold text-lg'>What is vision.com exchange and return Policy?</p>
        <p>Vision.com’s exchange and return Policy offers 5 days of exchange and return from the date of your purchase. (e.g.: if you purchased your product of Jan 1st you can exchange and return it until Jan 5th)</p>
        <p>All the products to be returned must be in its original form without any defects whatsoever. (e.g.: the sunglasses must not contain any damages and must be returned intact with the box if provided with.)</p>
        <p className='font-semibold text-lg'>How does Vision.com exchange and return Policy work ?</p>
        <p>Vision.com’s 5 day exchange and return policy gives you the option to exchange or return the product you have purchased.
        However, the state and condition of the item must be same at the time of purchase. You can try on the item, although do so with special care.
        Once the item is returned to us it will go through our quality check and after if passes the test we will refund the amount to you.</p>
        <p className='font-semibold text-lg'>Will there be extra charge for product I exchange?</p>
        <p>No, there is no extra charge.</p>
        {/* CANCELATION */}
        <h1 className='text-4xl font-semibold underline underline-offset-4'>CANCELATION</h1>
        <p className='font-semibold text-lg'>How can i cancel my order?</p>
        <p>SMS or call us at 9851200990</p>
        {/* PAYMENT */}
        <h1 className='text-4xl font-semibold underline underline-offset-4'>PAYMENT</h1>
        <p className='font-semibold text-lg'>How do I pay for products if I am located outside Kathmandu Valley ?</p>
        <p>You will need to deposit the the amount of the product to our bank account , IME or esewa. After verifying the amount your product will be dispatched to your location. Delivery time may range from 2 days or more.</p>
        <p className='font-semibold text-lg'>Can I use cheque to pay for the items I purchased?</p>
        <p>No, we only accept hand cash.</p>
        <p className='font-semibold text-lg'>What payment methods do we accept?</p>
        <p>Currently we accept only cash on delivery and esewa , bank payments and IME.</p>
        <ul>
          <li>Outside valley cash on delivery services :</li>
          <li className='mt-6'>Butwal</li>
          <li>Chitwan</li>
          <li>Dharan</li>
          <li>Pokhara</li>
          <li>Hetuda</li>
          <li>Itahari</li>
        </ul>
      </div>
    </>
  )
}

export default Faq