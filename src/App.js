import "./App.css";
import { useState } from "react";

function App() {
  const [formData,setFormdata] = useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"India",
    address:"",
    city:"",
    State:"",
    code:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotifications:""


  })

  function changeHandler(event){
    const {name,value,checked,type}=event.target;
    setFormdata((prev)=>(
      {...prev,[name]:type==='checkbox'? checked:value}
    )) 

  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally print this:->");

    console.log(formData);

  }
  return (
    <div className="flex flex-col items-center mt-2">
    <form onSubmit={submitHandler}>

    {/* First Name */}
      <label htmlFor="firstName">First Name</label>
      <br></br>
      <input
      type="text"
      name='firstName'
      id="firstName"
      placeholder="Ankit"
      value={formData.firstName}
      onChange={changeHandler}
      className="outline"></input>


      {/* Last name */}
      <br></br>


      <label htmlFor="LastName">Last Name</label>
      <br></br>
      <input
      type="text"
      name='lastName'
      id="lastName"
      placeholder="Kumar"
      value={formData.lastName}
      onChange={changeHandler}
      className="outline"></input>



      {/* Email */}
      <br></br> 



      <label htmlFor="email">Email Address</label>
      <br></br>
      <input
      type="email"
      name='email'
      id="email"
      placeholder="abc@gmail.com"
      value={formData.email}
      onChange={changeHandler}
      className="outline"></input>

      <br></br>


      <label htmlFor="country">Country</label>
      <br></br>

      <select
      id="country"
      name="country"
      value={formData.country}
      onChange={changeHandler}
      className="outline">
        <option>India</option>
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>

      <br></br>


      <label htmlFor="address">Street address</label>
      <br></br>
      <input
      type="text"
      name='address'
      id="address"
      placeholder="123 mart st"
      value={formData.address}
      onChange={changeHandler}
      className="outline"></input>

      <br></br>


      <label htmlFor="City">City</label>
      <br></br>
      <input
      type="text"
      name='city'
      id="city"
      placeholder="New Delhi"
      value={formData.city}
      onChange={changeHandler}
      className="outline"></input>

      <br></br>


      <label htmlFor="email">State/Province</label>
      <br></br>
      <input
      type="text"
      name='State'
      id="State"
      placeholder="Delhi"
      value={formData.State}
      onChange={changeHandler}
      className="outline"></input>

      <br></br>

      <label htmlFor="email">ZIP/Postal code</label>
      <br></br>
      <input
      type="text"
      name='code'
      id="code"
      placeholder="110086"
      value={formData.code}
      onChange={changeHandler}
      className="outline"></input>

      <br></br>
      <br></br>


      <fieldset>
        <legend>By Email</legend>

        <div className="flex items-baseline">
          <input
          type="checkbox"
          id="comments"
          name="comments"
          checked={formData.comments}
          onChange={changeHandler}>
          </input>

          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someone posts a comments on a posting.</p>
          </div>
        </div>


        <div className="flex items-baseline">
          <input
          type="checkbox"
          id="candidates"
          name="candidates"
          checked={formData.candidates}
          onChange={changeHandler}>
          </input>

          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when a candidate applies for a job.</p>
          </div>
        </div>


        <div className="flex items-baseline">
          <input
          type="checkbox"
          id="offers"
          name="offers"
          checked={formData.offers}
          onChange={changeHandler}>
          </input>

          <div>
            <label htmlFor="offers">Offers</label>
            <p>Get notified when someone accepts or rejects an offer.</p>
          </div>
        </div>



      </fieldset>

      <br></br>
      <br></br>


      <fieldset>
        <legend>Push Notifications</legend>

        <p>These are delivered via SMS to your mobile phone </p>

        <input
        type="radio"
        id="pushEverything"
        value='Everything'
        name="pushNotifications"
        onChange={changeHandler}></input>

        <label htmlFor="pushEverything">Everything</label>

        <br></br>
        <input
        type="radio"
        id="pushEmail"
        value='Same as email'
        name="pushNotifications"
        onChange={changeHandler}></input>

        <label htmlFor="pushEmail">Same as email</label>
        <br></br>
        <input
        type="radio"
        id="pushNothing"
        value='No Push Notifications'
        name="pushNotifications"
        onChange={changeHandler}></input>

        <label htmlFor="pushEverything">No Push Notifications</label>

      </fieldset>

      <br></br>


      <button className="bg-blue-500 text-white font-bold rounded-full py-2 px-5">Save</button>







    </form>


    </div>
  );
}

export default App;
