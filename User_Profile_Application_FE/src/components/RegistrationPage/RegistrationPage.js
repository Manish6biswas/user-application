import React, { useState } from "react";
import "./registrationPage.css";
import { useNavigate  } from "react-router-dom";
const RegistrationPage = () => {
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPAssword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [contact, setContact] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const navigate = useNavigate();
  const optionsArray = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
    "Jammu and Kashmir",
    "Ladakh",
  ];
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const onSubmit =async (e)=>{
    var data = {
      email,
      password,
      fName,
      lName,
      gender,
      contact,
      address1,
      address2,
      city,
      state,
      zip
    }
    e.preventDefault();

    try {
      // Perform API request here, using fetch or a library like axios
      const response = await fetch("http://localhost:8080/api/register/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // API call successful, handle the response
        const data = await response.json();
        console.log("API response:", data);
        navigate("/login");
        // Add any additional logic for a successful response
      } else {
        // API call failed, handle the error
        console.error("API error:", response.statusText);
        // Add any error handling logic here
      }
    } catch (error) {
      console.error("Error during API request:", error);
      // Add any error handling logic here
    } 
  }
  return (
    <div className="parent container-fluid">
      <div className="child-register p-3  ">
        <h2 className="mb-5">Registration form</h2>
        <form className="row g-3" onSubmit={onSubmit}>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              onChange={(e)=>setPAssword(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="fname" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="fname" onChange={(e)=>setFName(e.target.value)}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="lname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lname"
              onChange={(e)=>setLName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <p>Select Gender</p>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
              />
              Male
            </label>

            <label className="ms-3">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
              />
              Female
            </label>
          </div>
          <div className="col-md-6">
            <label htmlFor="phoneNumber" className="form-label">
            Contact
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="form-control"
              placeholder="Enter phone number"
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              onChange={(e)=>setContact(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              onChange={(e)=>setAddress1(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              onChange={(e)=>setAddress2(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" onChange={(e)=>setCity(e.target.value)}/>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select" onChange={(e)=>setState(e.target.value)}>
              <option value="" disabled>
                Choose...
              </option>
              {optionsArray.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" onChange={(e)=>setZip(e.target.value)}/>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          
          <div className="col-auto">
            <p>Already had an account? <span  onClick={()=>{navigate("/login");}}>Sign In</span></p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
