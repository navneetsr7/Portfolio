import React from 'react'

function Contact() {
  return (
    <div className='card-header'>
      <h2 align='center'>Contact Me</h2>
      <form className='form-group'>
                        <div>

                            <div className='table' style={{ width: '80%', margin: '0 auto' }}>
                                <div className="form-outline mb-4 d-flex gap-3">
                                    <div style={{ width: "200px" }}><label htmlFor="name" className='form-lable'><b>Enter Name :</b></label></div>
                                    <div style={{ width: "500px" }}><input type="text" name='name' className='form-control'/></div>
                                </div>
                                <div className="form-outline mb-4 d-flex gap-5" style={{ width: "500px" }}><label htmlFor="gender" className='form-lable'><b>Select Gender :</b></label>
                                    <div className='text-start'>
                                        <input type="radio" name='gender' value='male' className='form-check-input mx-3'/>Male
                                        <input type="radio" name='gender' value='female' className='form-check-input mx-3'/>Female
                                    </div>
                                </div>
                                <div className="form-outline mb-4 d-flex gap-3">
                                    <div style={{ width: "200px" }}><label htmlFor="contactno" className='form-label' ><b>Contact No :</b></label></div>
                                    <div style={{ width: "500px" }}><input type="number" name='contactno' className='form-control'/></div>
                                </div>
                                
                                <div className="form-outline mb-4 d-flex gap-3">
                                    <div style={{ width: "200px" }}><label htmlFor="address" className='form-lable'><b>Enter Address:</b></label></div>
                                    <div style={{ width: "500px" }}><textarea name="address" className='form-control' id="address" cols="20" rows="2" ></textarea></div>
                                </div>
                                <div className="form-outline mb-4 d-flex gap-3">
                                    <div style={{ width: "200px" }}><label htmlFor="enquiry" className='form-lable'><b>Enquiry Text :</b></label></div>
                                    <div style={{ width: "500px" }}><textarea name="enquiry" className='form-control' id="enquiry" cols="20" rows="2" ></textarea></div>
                                </div>
                                <div>
                                    <div>
                                        <button type="submit" className='btn btn-primary bg-primary mt-2 form-control '>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
    </div>
  )
}

export default Contact