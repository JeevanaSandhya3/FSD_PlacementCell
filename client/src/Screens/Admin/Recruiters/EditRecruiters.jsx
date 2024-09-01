import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase/config";
import { baseApiURL } from "../../../baseUrl";
import { FiSearch, FiUpload, FiX } from "react-icons/fi";
const EditRecruiters = () => {
  const [file, setFile] = useState();
  const [branch, setBranch] = useState();
  const [search, setSearch] = useState();
  const [searchActive, setSearchActive] = useState(false);
  const [data, setData] = useState({
    companyName:"",
    loginid: "",
    officialEmail: "",
    mobileNumber: "",
    ctc:"",
    stipend:  "",
    about: "",
    spoc: "",
  });
  const [id, setId] = useState();

  const updateRecruitersProfile = (e) => {
    e.preventDefault();
    toast.loading("Updating Recruiters");
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(`${baseApiURL()}/recruiters/details/updateDetails/${id}`, data, {
        headers: headers,
      })
      .then((response) => {
        toast.dismiss();
        if (response.data.success) {
          toast.success(response.data.message);
          setFile("");
          setSearch("");
          setId("");
          setData({
            companyName: "",
            loginid: "",
            officialEmail: "",
            mobileNumber: "",
            ctc:"",
            stipend: "",
            about: "",
            spoc: "",
         
          });
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(error.response.data.message);
      });
  };

  const searchRecruitersHandler = (e) => {
    setSearchActive(true);
    e.preventDefault();
    toast.loading("Getting Recruiters");
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(
        `${baseApiURL()}/recruiters/details/getDetails`,
        { enrollmentNo: search },
        { headers }
      )
      .then((response) => {
        toast.dismiss();
        if (response.data.success) {
          if (response.data.user.length === 0) {
            toast.error("No Recruiters Found!");
          } else {
            toast.success(response.data.message);
            setData({
                companyName: response.data.user[0]. companyName,
                loginid: response.data.user[0]. loginid,
                officialEmail: response.data.user[0].officialEmail,
                mobileNumber:  response.data.user[0].mobileNumber,
                ctc: response.data.user[0].ctc,
                stipend :response.data.user[0].stipend,
                about: response.data.user[0].about,
                spoc: response.data.user[0]. spoc,
                
            });
            setId(response.data.user[0]._id);
          }
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.error(error);
      });
  };

  const clearSearchHandler = () => {
    setSearchActive(false);
    setSearch("");
    setId("");
    setData({
     companyName: "",
     loginid: "",
     officialEmail: "",
     mobileNumber:  "",
     ctc: "",
     stipend: "",
     about: "",
     spoc: "",
    
    });
  };

  return (
    <div className="my-6 mx-auto w-full">
      <form
        className="flex justify-center items-center border-2 border-blue-500 rounded w-[40%] mx-auto"
        onSubmit={searchRecruitersHandler}
      >
        <input
          type="text"
          className="px-6 py-3 w-full outline-none"
          placeholder="loginid."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {!searchActive && (
          <button className="px-4 text-2xl hover:text-blue-500" type="submit">
            <FiSearch />
          </button>
        )}
        {searchActive && (
          <button
            className="px-4 text-2xl hover:text-blue-500"
            onClick={clearSearchHandler}
          >
            <FiX />
          </button>
        )}
      </form>
      {search && id && (
        <form
          onSubmit={updateRecruitersProfile}
          className="w-[70%] flex justify-center items-center flex-wrap gap-6 mx-auto mt-10"
        >
          <div className="w-[40%]">
        <label htmlFor="companyname" className="leading-7 text-sm ">
          Enter Company Name:
        </label>
        <input
          type="text"
          id="companyname"
          value={data.companyName}
          onChange={(e) => setData({ ...data, companyName: e.target.value })}
          className="w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="w-[40%]">
        <label htmlFor="loginid" className="leading-7 text-sm ">
          Enter Login ID
        </label>
        <input
          type="number"
          id="loginid"
          value={data.loginid}
          onChange={(e) => setData({ ...data, loginid: e.target.value })}
          className="w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="w-[40%]">
        <label htmlFor="officialemail" className="leading-7 text-sm ">
          Enter Official Email
        </label>
        <input
          type="text"
          id="officialemail"
          value={data.officialEmail}
          onChange={(e) => setData({ ...data, officialEmail: e.target.value })}
          className="w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="w-[40%]">
        <label htmlFor="mobilenumber" className="leading-7 text-sm ">
          Enter Mobile Number
        </label>
        <input
          type="number"
          id="mobilenumber"
          value={data.mobileNumber}
          onChange={(e) => setData({ ...data, mobileNumber: e.target.value })}
          className="w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="w-[40%]">
        <label htmlFor="ctc" className="leading-7 text-sm ">
          Enter CTC
        </label>
        <input
          type="number"
          id="ctc"
          value={data.ctc}
          onChange={(e) => setData({ ...data, ctc: e.target.value })}
          className="w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="w-[40%]">
        <label htmlFor="stipend" className="leading-7 text-sm ">
          Enter Stipend
        </label>
        <input
          type="number"
          id="stipend"
          value={data.stipend}
          onChange={(e) => setData({ ...data, stipend: e.target.value })}
          className="w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="w-[40%]">
        <label htmlFor="about" className="leading-7 text-sm ">
          Enter About
        </label>
        <input
          type="text"
          id="about"
          value={data.about}
          onChange={(e) => setData({ ...data, about: e.target.value })}
          className="w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="w-[40%]">
        <label htmlFor="spoc" className="leading-7 text-sm ">
          Enter Spoc
        </label>
        <input
          type="text"
          id="spoc"
          value={data.spoc}
          onChange={(e) => setData({ ...data, spoc: e.target.value })}
          className="w-full bg-blue-50 rounded border focus:border-dark-green focus:bg-secondary-light focus:ring-2 focus:ring-light-green text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      
          {data.profile && (
            <div className="w-full flex justify-center items-center">
              <img src={data.profile} alt="recruiters" className="h-36" />
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 px-6 py-3 rounded-sm mb-6 text-white"
          >
            Update Recruiters
          </button>
        </form>
      )}
    </div>
  );
};

export default EditRecruiters;