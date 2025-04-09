import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Include/Navbar'
import Footer from '../../Include/Footer'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast';


const RegisterPage = () => {
  const navigate = useNavigate(); // Navigation hook


  const {
    register,
    handleSubmit,
    setError,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();



  const newPassword = watch("newPassword");

  const onSubmit = async (data) => {
    if (!data.name || !data.email || !data.number || !data.newPassword || !data.confirmPassword) {
      toast.error("Please fill the required details first.");
      return;
    }


    let response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success("Registration successful! Redirecting to login...");
      setTimeout(() => navigate('/login'), 2000); // Redirect after 2 sec
    } else {
      toast.error("Registration failed. Try again!");
    }
  };

  //for generating random and strong password
  const generatePassword = () => {
    const length = 12; // Password length
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+!";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setValue("newPassword", password); // Set the generated password in the input field
  };

  return (
    <>
      <Navbar />
      <Toaster /> {/* Toast notifications */}
      <div className="shadow-xl lg:w-96 lg:h-100vh mt-25 mb-30 mx-auto px-4 py-6 md:w-96 md:h-100vh">
        <h1 className="uppercase text-2xl text-center mx-auto font-bold">
          create an account
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-1xl text-center text-orange-400 font-bold">
            Just Register and Get Started!
          </p>
          <div className="w-80 flex flex-col">
            <input
              {...register("name", { required: "This field is required", minLength: 3, maxLength: 35 })}
              type="text"
              placeholder="Name"
              className="text-center border border-gray-300 text-1xl shadow-xl px-6 py-3 mt-6 rounded-3xl"
            />
            {errors.name && <div className="text-red-600">{errors.name.message}</div>}

            <input
              {...register("email", { required: "This field is required", minLength: 10, maxLength: 25 })}
              type="email"
              placeholder="Your Email"
              className="text-center border border-gray-300 text-1xl shadow-xl px-6 py-3 mt-6 rounded-3xl"
            />
            {errors.email && <div className="text-red-600">{errors.email.message}</div>}

            <input
              {...register("number", { required: "This field is required", minLength: 10, maxLength: 11 })}
              type="text"
              placeholder="Your Number"
              className="text-center border border-gray-300 text-1xl shadow-xl px-6 py-3 mt-6 rounded-3xl"
            />
            {errors.number && <div className="text-red-600">{errors.number.message}</div>}

            <input
              {...register("newPassword", {
                required: "New Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                maxLength: {
                  value: 35,
                  message: "Password cannot exceed 35 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,35}/,
                  message:
                    "Password must contain at least one uppercase letter, one number, and one special character",
                },
              })}
              type="password"
              placeholder="New Password"
              className="text-center border border-gray-300 text-1xl shadow-xl px-6 py-3 mt-6 rounded-3xl w-full"
            />

            <button
              type="button"
              onClick={generatePassword}
              className=" hover:bg-orange-600 border border-orange-400 rounded-3xl mt-7 transition-all duration-300"
            >
              Suggest Strong Password
            </button>
            {errors.newPassword && (
              <div className="text-red-600">{errors.newPassword.message}</div>
            )}

            {/* Confirm Password */}
            <input
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === newPassword || "Passwords do not match",
              })}
              type="password"
              placeholder="Confirm Password"
              className="text-center border border-gray-300 text-1xl shadow-xl px-6 py-3 mt-6 rounded-3xl w-full"
            />
            {errors.confirmPassword && (
              <div className="text-red-600">{errors.confirmPassword.message}</div>
            )}


            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-orange-400 hover:bg-orange-600 border border-orange-400 rounded-3xl mt-7 px-6 py-3 transition-all duration-300"
            >
              Register
            </button>
            <p className='text-center mt-2'>Already have an account? <a className='hover:text-orange-400 transition duration-200 hover:no-underline' href="/login">Login Now</a></p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default RegisterPage;
