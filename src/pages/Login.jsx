import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { Context } from "../App";

const Login = () => {

  const navigate = useNavigate();

  const handleUserLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password).then((user) => {
      const data = user?.user?.email;
      if (data) {
        navigate("/");
      }
    });
  };

  return (
    <div className="flex">
      <div className="w-2/3 h-screen bg-white flex justify-center items-center">
        <div className="w-[500px] p-6 bg-[#fafafa] rounded-md">
          <div>
            <h3 className="font-semibold text-2xl">Welcome Back</h3>
            <p className="text-[#707070]">
              Enter your Credentials to access your account
            </p>
          </div>

          <form action="" onSubmit={handleUserLogin}>
            <div className=" h-[52px] w-[452px] bg-white border rounded-md pl-3 my-4">
              <label htmlFor="" className="text-xs text-[#707070] font-normal">
                Email Address
              </label>
              <br />
              <input className="border-none w-full" name="email" type="text" />
            </div>
            <div className=" h-[52px] w-[452px] bg-white border rounded-md pl-3 my-4">
              <label htmlFor="" className="text-xs text-[#707070] font-normal">
                Password
              </label>
              <br />
              <input
                className="border-none w-full"
                name="password"
                type="password"
              />
            </div>

            <div className="">
              <input className="mr-2" type="checkbox" name="" id="" />
              <label className="text-sm font-medium" htmlFor="">
                I agree to the Terms & Policy
              </label>
            </div>
            <br />

            <input
              className="h-14 w-[452px] rounded-md bg-black text-white font-semibold"
              type="submit"
              value="Sign In"
            />
          </form>

          <div className="flex gap-1 justify-center items-center my-3">
            <p className="border w-[210px]" />
            <p>or</p>
            <p className="border w-[210px]" />
          </div>

          <div className="flex gap-5">
            <button className="flex justify-center items-center gap-2 h-[52px] w-[218px] text-sm font-semibold border rounded-md">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8055 10.3623H21V10.3208H12V14.3208H17.6515C16.827 16.6493 14.6115 18.3208 12 18.3208C8.6865 18.3208 6 15.6343 6 12.3208C6 9.0073 8.6865 6.3208 12 6.3208C13.5295 6.3208 14.921 6.8978 15.9805 7.8403L18.809 5.0118C17.023 3.3473 14.634 2.3208 12 2.3208C6.4775 2.3208 2 6.7983 2 12.3208C2 17.8433 6.4775 22.3208 12 22.3208C17.5225 22.3208 22 17.8433 22 12.3208C22 11.6503 21.931 10.9958 21.8055 10.3623Z"
                  fill="#FFC107"
                />
                <path
                  d="M3.15234 7.6663L6.43784 10.0758C7.32684 7.8748 9.47984 6.3208 11.9993 6.3208C13.5288 6.3208 14.9203 6.8978 15.9798 7.8403L18.8083 5.0118C17.0223 3.3473 14.6333 2.3208 11.9993 2.3208C8.15834 2.3208 4.82734 4.4893 3.15234 7.6663Z"
                  fill="#FF3D00"
                />
                <path
                  d="M12.0002 22.3211C14.5832 22.3211 16.9302 21.3326 18.7047 19.7251L15.6097 17.1061C14.6057 17.8666 13.3577 18.3211 12.0002 18.3211C9.39916 18.3211 7.19066 16.6626 6.35866 14.3481L3.09766 16.8606C4.75266 20.0991 8.11366 22.3211 12.0002 22.3211Z"
                  fill="#4CAF50"
                />
                <path
                  d="M21.8055 10.3623H21V10.3208H12V14.3208H17.6515C17.2555 15.4393 16.536 16.4038 15.608 17.1063L15.6095 17.1053L18.7045 19.7243C18.4855 19.9233 22 17.3208 22 12.3208C22 11.6503 21.931 10.9958 21.8055 10.3623Z"
                  fill="#1976D2"
                />
              </svg>
              Sign in with Goggle
            </button>
            <button className="flex justify-center items-center gap-2 h-[52px] w-[218px] text-sm font-semibold border rounded-md">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_16_4997)">
                  <path
                    d="M17.4864 0.32119C16.1252 0.413065 14.6683 1.22307 13.7664 2.31619C12.977 3.27807 12.3152 4.68994 12.5664 6.15619C12.3414 6.08682 12.137 6.07932 11.8914 5.99119C11.222 5.75307 10.457 5.49619 9.5064 5.49619C7.61828 5.49619 5.68515 6.61932 4.4664 8.49619C2.69265 11.2224 3.0489 16.0206 5.7414 20.1212C6.21578 20.8412 6.7689 21.6268 7.4514 22.2512C8.1339 22.8756 8.9589 23.3518 9.9264 23.3612C10.7533 23.3706 11.3289 23.0949 11.8464 22.8662C12.3639 22.6374 12.8458 22.4349 13.7514 22.4312C13.757 22.4312 13.7608 22.4312 13.7664 22.4312C14.6683 22.4237 15.1352 22.6224 15.6414 22.8512C16.1477 23.0799 16.7177 23.3687 17.5464 23.3612C18.5327 23.3537 19.3708 22.8137 20.0664 22.1462C20.762 21.4787 21.3339 20.6593 21.8064 19.9412C22.4833 18.9099 22.7552 18.3474 23.2764 17.1962C23.3308 17.0762 23.3327 16.9374 23.2802 16.8156C23.2295 16.6937 23.1302 16.5981 23.0064 16.5512C21.3002 15.9062 20.327 14.3968 20.1864 12.8012C20.0458 11.2056 20.7208 9.56307 22.4214 8.63119C22.547 8.56369 22.6352 8.44557 22.6652 8.30682C22.6933 8.16807 22.6595 8.02182 22.5714 7.91119C21.3508 6.39432 19.6333 5.49619 17.9514 5.49619C16.8789 5.49619 16.0914 5.74932 15.4464 5.99119C15.3395 6.03244 15.2608 6.02869 15.1614 6.06619C15.8158 5.72119 16.3933 5.24307 16.8264 4.68619C17.6139 3.67557 18.2214 2.23744 17.9964 0.72619C17.9589 0.47869 17.7358 0.30244 17.4864 0.32119ZM16.9764 1.46119C16.9445 2.43057 16.6127 3.37932 16.0614 4.08619C15.4839 4.82869 14.5127 5.34244 13.5714 5.49619C13.5883 4.56432 13.9558 3.59869 14.5164 2.91619C15.1052 2.20369 16.0802 1.68994 16.9764 1.46119ZM9.5064 6.45619C9.9264 6.45619 10.9014 6.65682 11.5614 6.89119C12.2214 7.12557 12.917 7.40119 13.7364 7.40119C14.537 7.40119 15.1708 7.12369 15.7914 6.89119C16.412 6.65869 17.0308 6.45619 17.9514 6.45619C19.1533 6.45619 20.4527 7.08057 21.4764 8.16619C19.8377 9.32307 19.0708 11.1268 19.2264 12.8762C19.382 14.6443 20.447 16.3224 22.1964 17.1962C22.1939 17.2016 22.1914 17.2071 22.1889 17.2125C21.8143 18.0284 21.5646 18.5724 21.0114 19.4162C20.552 20.1156 20.0064 20.8806 19.4064 21.4562C18.8064 22.0318 18.1708 22.3956 17.5314 22.4012C16.9145 22.4068 16.5639 22.2231 16.0314 21.9812C15.4989 21.7393 14.8108 21.4618 13.7514 21.4712C12.6939 21.4768 11.9964 21.7431 11.4564 21.9812C10.9164 22.2193 10.562 22.4068 9.9414 22.4012C9.28515 22.3956 8.67578 22.0768 8.0964 21.5462C7.51703 21.0156 6.9939 20.2918 6.5364 19.5962C4.0164 15.7562 3.8139 11.2449 5.2614 9.02119C6.32265 7.38807 9.0864 6.45619 9.5064 6.45619Z"
                    fill="black"
                  />
                  <path
                    d="M9.5064 6.45619C9.9264 6.45619 10.9014 6.65682 11.5614 6.89119C12.2214 7.12557 12.917 7.40119 13.7364 7.40119C14.537 7.40119 15.1708 7.12369 15.7914 6.89119C16.412 6.65869 17.0308 6.45619 17.9514 6.45619C19.1533 6.45619 20.4527 7.08057 21.4764 8.16619C19.8377 9.32307 19.0708 11.1268 19.2264 12.8762C19.382 14.6443 20.447 16.3224 22.1964 17.1962L22.1889 17.2125C21.8143 18.0284 21.5646 18.5724 21.0114 19.4162C20.552 20.1156 20.0064 20.8806 19.4064 21.4562C18.8064 22.0318 18.1708 22.3956 17.5314 22.4012C16.9145 22.4068 16.5639 22.2231 16.0314 21.9812C15.4989 21.7393 14.8108 21.4618 13.7514 21.4712C12.6939 21.4768 11.9964 21.7431 11.4564 21.9812C10.9164 22.2193 10.562 22.4068 9.9414 22.4012C9.28515 22.3956 8.67578 22.0768 8.0964 21.5462C7.51703 21.0156 6.9939 20.2918 6.5364 19.5962C4.0164 15.7562 3.8139 11.2449 5.2614 9.02119C6.32265 7.38807 9.0864 6.45619 9.5064 6.45619Z"
                    fill="black"
                  />
                  <path
                    d="M16.9764 1.46119C16.9445 2.43057 16.6127 3.37932 16.0614 4.08619C15.4839 4.82869 14.5127 5.34244 13.5714 5.49619C13.5883 4.56432 13.9558 3.59869 14.5164 2.91619C15.1052 2.20369 16.0802 1.68994 16.9764 1.46119Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_16_4997">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.320801)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Sign in with Apple
            </button>
          </div>

          <div>
            <p className="text-sm font-medium text-center py-4 ">
              Have an account? <Link to={"/"}>Sign Up</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/3 h-screen bg-[url('chair.png')] bg-no-repeat bg-right flex justify-center items-center">
        <div className="w-[415px]">
          <img className="w-fit mx-auto" src="icon.png" alt="" />
          <h1 className="text-[40px] text-center font-bold text-white">
            Furni<span className="text-[#1e99f5]">Flex</span>
          </h1>
          <p className="text-center text-[#c8c4c4]">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
