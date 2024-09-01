import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase/config";
import { baseApiURL } from "../../../baseUrl";
import { FiUpload } from "react-icons/fi";

const AddRecruiters = () => {
  const [file, setFile] = useState();
  const [branch, setBranch] = useState();
  const [data, setData] = useState({
    companyName: "",
    loginid:"",
    officialEmail: "",
    mobileNumber: "",
    ctc: "",
    stipend: "",
    about: "",
    spoc: "",
  });

  const addRecruitersProfile = (e) => {
    e.preventDefault();
    toast.loading("Adding Recruiter");
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(`${baseApiURL()}/recruiter/details/addDetails`, data, {
        headers: headers,
      })
      .then((response) => {
        toast.dismiss();
        if (response.data.success) {
          toast.success(response.data.message);
          axios
            .post(
              `${baseApiURL()}/recruiter/auth/register`,
              { loginid: data.loginid, password: 112233 },
              {
                headers: headers,
              }
            )
            .then((response) => {
              toast.dismiss();
              if (response.data.success) {
                toast.success(response.data.message);
                setFile();
                setData({
                  companyName: "",
                  loginid: "",
                  officialEmail: "",
                  mobileNumber: "",
                  ctc: "",
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
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(error.response.data.message);
      });
  };

  return (
    <form
      onSubmit={addRecruitersProfile}
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
          Enter login ID
        </label>
        <input
          type="number"
          id="loginid"
          value={data.mobileNumber}
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
          <img src={data.profile} alt="Recruiter" className="h-36" />
        </div>
      )}
      <button
        type="submit"
        className="bg-blue-500 px-6 py-3 rounded-sm mb-6 text-white"
      >
        Add New Recruiter
      </button>
    </form>
  );
};

export default AddRecruiters;