import React, { useState,useEffect  } from "react";
import profilePic from "./profile.png";
import "./profile.css";
const ProfilePage = () => {
  
  // const [selectedGender, setSelectedGender] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [contact, setContact] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
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
    console.log(gender);
  };
  useEffect(()=>{
    fecthUserData();
  }, [])
  const fecthUserData = async ()=>{
    try {
      // Replace 'API_ENDPOINT' with your actual API endpoint for user authentication
      const response = await fetch("http://localhost:8080/api/user/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email}),
      });
      if (!response.ok) {
        // throw new Error("err");
        console.log('err')
      }

      // Authentication successful, you can redirect or perform other actions here
      console.log("User Data");
      const res = await response.json()
      const data = res.data;
      console.log(data);
      setGender(data.gender);
      setEmail(data.email);
      setFName(data.fName);
      setLName(data.lName);
      setContact(data.contact);
      setAddress1(data.address1);
      setAddress2(data.address2);
      setCity(data.city);
      setState(data.state);
      setZip(data.zip);
    }catch (err) {console.log(err);}
  } 
   const handleIsEdit = async (action) => {
     
     if(action === 'edit'){
      setIsEdit(!isEdit);
     }else{
      await updateData();
      await fecthUserData();
      setIsEdit(!isEdit);
     }
   }
   const updateData = async () => {
    try {
      // Replace 'API_ENDPOINT' with your actual API endpoint for user authentication
      const response = await fetch("http://localhost:8080/api/update/updateUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gender,
          email,
          fName,
          lName,
          contact,
          address1,
          address2,
          city,
          state,
          zip,
        }),
      });
      if (!response.ok) {
        // throw new Error("err");
        console.log('err')
      }
   }catch(err) {console.log(err);}}
  return (
    <div className="parent container-fluid">
      <div className="child-profile p-3  ">
        <div className="row">
          <div className="col-auto border-end">
            <div className="profile-pic mt-4 ms-3 me-3">
              <img src={profilePic} alt="profile"></img>
            </div>
            <div>
              <p className="text-center fw-bolder mt-3 mb-1">{fName +" " +lName}</p>
              <p className="text-center" style={{ color: "gray" }}>
                {email}
              </p>
            </div>
          </div>
          <div className="col ">
            <h3 className="mt-5 ms-2">Personal Details</h3>
            <form className="row g-3 ms-2">
              <div className="col-md-6">
                <label htmlFor="fname"  className="form-label">
                  First Name
                </label>
                <input type="text" className="form-control" id="fname" value={fName} disabled={!isEdit} onChange={(e)=>setFName(e.target.value)}/>
              </div>
              <div className="col-md-6">
                <label htmlFor="lname" className="form-label">
                  Last Name
                </label>
                <input type="text" className="form-control" id="lname" value={lName} disabled={!isEdit} onChange={(e)=>setLName(e.target.value)}/>
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
                    disabled={!isEdit}
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
                    disabled={!isEdit}
                  />
                  Female
                </label>
              </div>
              <div className="col-md-6">
                <label htmlFor="phoneNumber" className="form-label"  >
                  Contact
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="form-control"
                  placeholder="Enter phone number"
                  value={contact}
                  // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  disabled={!isEdit}
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
                  disabled={!isEdit}
                  value={address1}
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
                  disabled={!isEdit}
                  value={address2}
                  onChange={(e)=>setAddress2(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="inputCity" value={city} disabled={!isEdit} onChange={(e)=>setCity(e.target.value)}/>
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">
                  State
                </label>
                <select id="inputState" className="form-select" value={state} disabled={!isEdit} onChange={(e)=>setState(e.target.value)}>
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
                <input type="text" className="form-control" id="inputZip" value={zip} disabled={!isEdit} onChange={(e)=>setZip(e.target.value)} />
              </div>
            </form>
            <div className="col-12 ms-4 mt-3">
                {isEdit ? (
                  
                    <button type="submit" className="btn btn-primary" onClick={() => handleIsEdit("save")}>
                      Save
                    </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => handleIsEdit("edit")}
                  >
                    Edit
                  </button>
                )}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
