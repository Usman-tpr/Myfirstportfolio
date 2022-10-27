import React from 'react'
import './Banner.css'

const Contact = () => {
  return (
    <div>
<div className="container formarea">
    <div className="row">
        <div className="col-sm-4 offset-sm-4 mt-5 pt-5">
        <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">UserName</label>
    <input type="text" class="form-control"  />
  </div>
 
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" />
  </div>
   
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div class="form-group">
    
    <input type="submit" class=" submit btn btn-success " id="exampleFormControlInput1" />
  </div>
   
</form>
        </div>
    </div>
</div>
<div className="extra"></div>
    </div>
  )
}

export default Contact