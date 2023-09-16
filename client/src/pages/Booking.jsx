import Navbar from '../components/navbar'
import TableBooking from '../components/TableBooking'
import '../style.css'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
function Booking() {
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <>
      <Navbar />
      <div className='container'>
        <TableBooking/>
        <div className="row g-3 mt-3">
          <div className="col-md-6">
            <p>ชื่อผู้จอง</p>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <p>เบอร์โทร</p>
            <input type="password" className="form-control" />
          </div>
          <div className="col-12">
            <p>วันที่จอง</p>
            <DatePicker
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              className='form-control w-100'
            />
          </div>
          <div className="col-12">
            <p>หมายเหตุ</p>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">ยืนยัน</button>
          </div>
        </div>
      </div >
    </>
  )
}

export default Booking;
