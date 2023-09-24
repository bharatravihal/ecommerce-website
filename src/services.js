import React from 'react'
import {TbTruckDelivery} from "react-icons/tb";
import{TbTruckReturn} from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import {GiReceiveMoney} from "react-icons/gi";
const services = () => {
  return (
    <div className='container'>
    <div className='grid grid-three-column'>
        <div className='services-1'>
            <div>
                <TbTruckDelivery className="icon" />
                <h3>Super fast delivery</h3>
            </div>
        </div>
        <div className='services-2'>
            <div className='services-colum-2'>
                <div>
                    <MdSecurity className="icon" />
                    <h3>Non-contact shipping</h3>
                </div>
            </div>
            <div className='services-colum-2'>
                <div>
                    <GiReceiveMoney className="icon" />
                    <h3>Money-back Guaranteed</h3>

                </div>
            </div>
        </div>
        <div className='services-3'>
            <div>
                <TbTruckReturn className="icon" />
                <h3>Easy Return Policy</h3>
            </div>
        </div>
    </div>

    </div>
  )
}

export default services