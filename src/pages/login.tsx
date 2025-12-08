import React, { useRef, useState } from "react";
import usersolidSvg from "../assets/user-solid-full.svg";
import envelopeSvg from "../assets/envelope-solid-full.svg";
import lockSvg from "../assets/lock-solid-full.svg";
import phoneSvg from "../assets/phone-solid-full.svg";
import deptIdSvg from "../assets/address-card-solid-full.svg";
import { api } from "../config/api";

interface UserDetails {
  fullname: string;
  phone: string;
  email: string;
  password: string;
  department_id: string;
}

interface employeeRec {
  id: string;
  fname: string;
  phone: string;
  password: string;
  email: string;
}

// interface UserData {
//   userId: string;
// }

export const Login = () => {
  const [formData, setFormData] = useState<UserDetails>({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    department_id: "",
  });

  const [employee, setEmployee] = useState<employeeRec | null>(null);

  const [isBlue, setIsBlue] = useState<React.SetStateAction<boolean>>(false);
  // const signinbtnId: HTMLElement | null = document.getElementById("signinBtn");
  // const regbtnId: HTMLElement | null = document.getElementById("registerBtn");
  const nameFieldRef = useRef<HTMLInputElement>(null);
  const phoneFieldRef = useRef<HTMLInputElement>(null);
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const deptFieldRef = useRef<HTMLInputElement>(null);
  const titleRegRef = useRef<HTMLHeadingElement>(null);
  const btnSignInRef = useRef<HTMLButtonElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const forgotPasswordRef = useRef<HTMLParagraphElement>(null);

  // const handlerTriggerRegButtonClick = () => {
  //   setIsButtonDisabled(!isButtonDisabled);
  // };

  const handleSwitchToSignIn = () => {
    if (
      nameFieldRef.current &&
      titleRegRef.current &&
      phoneFieldRef.current &&
      emailFieldRef.current &&
      deptFieldRef.current
    ) {
      // nameFieldRef.current.style.maxHeight = "65px";
      // passwordRef.current.style.maxHeight = "65px";
      // nameFieldRef.current.style.marginBottom = "-40px";
      nameFieldRef.current.style.maxHeight = "0";
      phoneFieldRef.current.style.maxHeight = "0";
      emailFieldRef.current.style.maxHeight = "65px";
      deptFieldRef.current.style.maxHeight = "0";
      titleRegRef.current.innerHTML = "Sign In";
      setIsBlue(!isBlue);
      // regbtnId.
      // console.log("Signin Button Clicked! , Custom Function Ran");
      handleLogin();
    }
  };

  // const isLoginEmpty = !!formData.email && !!formData.password;
  // const handleLogin = async () => {
  //   // e.preventDefault();
  //   if (!isLoginEmpty) {
  //     console.log("login field form is empty");
  //     return;
  //   }
  //   console.log("your login data is ", formData.fullname, formData.password);
  //   try {
  //     const loginForm = new FormData();
  //     loginForm.append("name", formData.fullname);
  //     loginForm.append("password", formData.password);
  //     const res = await api.post(`/employees/login`, loginForm);
  //     const { employeeRec } = res.data;
  //     setEmployee(employeeRec);
  //     console.log(employee);
  //     console.log("sign in succesfully done");
  //     console.log("this is the data after login", employeeRec);
  //   } catch (error) {
  //     console.log("error loggin in ", error);
  //   }
  // };

  const isLoginEmpty = !!formData.email && !!formData.password;
  const handleLogin = async () => {
    // e.preventDefault();
    if (!isLoginEmpty) {
      console.log("login field form is empty");
      return;
    }
    console.log("your login data is ", formData.email, formData.password);
    try {
      const loginForm = new FormData();
      loginForm.append("email", formData.email);
      loginForm.append("password", formData.password);
      const res = await api.post(`/employees/login`, loginForm);
      console.log("only res", res);

      const { token, employeeRec } = res.data;
      setEmployee(employeeRec);
      console.log("employee object", employee);

      localStorage.setItem("userToken", token);
      localStorage.setItem("userId", employeeRec.id);

      console.log("sign in successfully done ");
      console.log("this is the data after login", employeeRec);
    } catch (error) {
      console.log("error loggin in ", error);
    }
  };

  // useEffect(() => {
  //   const fetchUserId = async () => {
  //     try {
  //       if (employee) console.log("i id: ", employee?.id);
  //       const response = await api.post(`/employees/${employee?.id}`, [
  //         employee?.id,
  //       ]);
  //       if (!response.data) {
  //         const errorData = await response.data;
  //         throw new Error(errorData.message || "Failed to user Id");
  //       }
  //       const data: UserData = await response.data();
  //       console.log(data);
  //     } catch (error) {
  //       console.log("Error: ", error);
  //     }
  //   };
  //   fetchUserId();
  // }, [employee]);

  // console.log("i am useremployeeid: ", userId);
  const handleSwitchToRegister = () => {
    if (
      nameFieldRef.current &&
      titleRegRef.current &&
      phoneFieldRef.current &&
      emailFieldRef.current &&
      deptFieldRef.current
    ) {
      nameFieldRef.current.style.maxHeight = "65px";
      nameFieldRef.current.style.marginBottom = "20px";
      deptFieldRef.current.style.maxHeight = "65px";
      phoneFieldRef.current.style.maxHeight = "65px";
      emailFieldRef.current.style.maxHeight = "65px";
      // forgotPasswordRef.current.innerHTML = "";
      titleRegRef.current.innerHTML = "Register";
      setIsBlue(!isBlue);
      // console.log("Register Button Clicked! , Custom Function Ran");

      // if (isFormValid) handleSubmit
      // return;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;

    setFormData((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const clearFormData: () => void = () => {
    formData.fullname = "";
    formData.phone = "";
    formData.email = "";
    formData.password = "";
    formData.department_id = "";
  };
  const isFormValid =
    !!formData.fullname &&
    !!formData.phone &&
    !!formData.email &&
    !!formData.password &&
    formData.department_id;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      console.log("you cannot leave field empty");
      return;
    }
    try {
      // console.log("my formdataaaa", formData);
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.fullname);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("department_id", formData.department_id);
      const res = await api.post(`/employees`, formDataToSend);
      const result = res.data;
      console.log("Form submitted to attend backend successfully!");
      console.log("i am formData", result);
      clearFormData();
    } catch (error) {
      console.log("Error submitting form to attend backend", error);
      console.log("did not submit data to backend ");
    }
  };

  return (
    <div className="formBox">
      <h1 ref={titleRegRef} id="title">
        Register
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="inputGroup">
          <div className="inputField" ref={nameFieldRef}>
            <img className="userIcon" src={usersolidSvg} alt="usericon" />
            <input
              value={formData.fullname}
              id="fullname"
              type="text"
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
          <div className="inputField" ref={phoneFieldRef}>
            <img className="phoneIcon" src={phoneSvg} alt="phoneicon" />
            <input
              value={formData.phone}
              id="phone"
              type="text"
              placeholder="Phone Number"
              onChange={handleChange}
            />
          </div>
          <div className="inputField" ref={emailFieldRef}>
            <img className="envelopIcon" src={envelopeSvg} alt="envelopicon" />
            <input
              value={formData.email}
              id="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          {/* <div className="inputField">
            <img className="lockIcon" src={lockSvg} alt="lock icon" />
            <input
              value={formData.password}
              id="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div> */}
          <div className="inputField" ref={deptFieldRef}>
            <img className="deptIcon" src={deptIdSvg} alt="dept icon" />
            <input
              value={formData.department_id}
              id="department_id"
              type="text"
              placeholder="Department ID"
              onChange={handleChange}
            />
          </div>
          <div className="inputField" ref={passwordRef}>
            <img className="lockIcon" src={lockSvg} alt="lock icon" />
            <input
              value={formData.password}
              id="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <p ref={forgotPasswordRef}>
            Forgot password? <a href="#"> Click Here!</a>
          </p>
          <div className="btn-field">
            <button
              onClick={handleSwitchToRegister}
              type="submit"
              id="registerBtn"
              className={
                isBlue ? /*(!isBlue ? */ "disable" : "button" /*) : ""*/
              }
              // 0533405918
            >
              Register
            </button>
            <button
              ref={btnSignInRef}
              onClick={handleSwitchToSignIn}
              type="button"
              id="signinBtn"
              className={
                !isBlue ? /*(isBlue ? */ "disable " : "button" /*) : ""*/
              }
            >
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
