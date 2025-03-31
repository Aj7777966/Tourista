import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast';


const LoginPage = () => {

  const navigate = useNavigate();
   

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        toast.success(result.message);
        setTimeout(() => navigate('/home'), 2000);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }


    
    // Check if all required fields are filled
    // if (!data.username || !data.password) {
    //   toast.error("Please fill the required details first.");
    //   return;
    // }

    // let r = await fetch("http://localhost:3000", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });

    // let res = await r.text();
    // console.log(data, res);
  };

  return (
    <>
      {isSubmitting && <div className="text-center text-green-600 text-2xl mt-20">Loading.....</div>}
      <div className="shadow-xl lg:w-96 lg:h-100vh mt-25 mb-30 mx-auto px-4 py-6 md:w-96 md:h-100vh">
        <h1 className="uppercase text-2xl text-center mx-auto font-bold">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-80 flex flex-col">
            {/* Username Input */}
            <input
              {...register("username", {
                required: { value: true},
                minLength: { value: 3, message: "Min length is 3" },
                maxLength: { value: 35, message: "Max length is 35" },
              })}
              type="text"
              placeholder="Enter Username"
              className="text-center border border-gray-300 text-1xl shadow-xl px-6 py-3 mt-6 rounded-3xl"
            />
            {errors.username && (
              <div className="text-red-600">{errors.username.message}</div>
            )}

            {/* Password Input */}
            <input
              {...register("password", {
                required: { value: true},
                minLength: { value: 4, message: "Weak Password! Please create a stronger password" },
              })}
              type="password"
              placeholder="Enter Password"
              className="text-center border border-gray-300 text-1xl shadow-xl px-6 py-3 mt-6 rounded-3xl"
            />
            {errors.password && (
              <div className="text-red-600">{errors.password.message}</div>
            )}

            <p className='text-center mt-3'>Forgot Password? <a className='hover:text-orange-400 transition duration-400 hover:no-underline' href="/login">Click Here</a></p>
            
            {/* Submit Button */}
            <button 
              type="submit"
              className="bg-orange-400 hover:bg-orange-600 border border-orange-400 rounded-3xl mt-3 px-6 py-3 transition-all duration-300"
            >
              Send Message
            </button>

            <Toaster toastOptions={{
              className: '',
              style: {
                border: '1px solid #713200',
                padding: 'auto',
                color: '#713200',
                width: '120%',
              },
            }} />
            {/* {errors.myform && (<div className="text-red-600 font-bold">{errors.myform.message}</div>)} */}
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginPage;



// import React from 'react'
// import { useForm } from 'react-hook-form'
// import toast, { Toaster } from 'react-hot-toast';

// const LoginPage = () => {

//   const notify = () => toast('Congratulations! You have Successfully logged in');

//   const {
//     register,
//     handleSubmit,
//     setError,
//     formState: { errors, isSubmitting },
//   } = useForm();


//   //onSubmit function used to handle submission when submitting
//   const onSubmit = async (data) => {
//     if (data.username !== "aj77775080") {
//       setError("myform", { message: "Login Credeatials invalid" })
//     }
//     let r = await fetch("http://localhost:3000", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         // This header enables us to send the routes data to the backend to display the data
//       },
//       body: JSON.stringify(data), // This ensures that data is propley stringified
//     });
//     let res = await r.text();
//     console.log(data, res);
//   };

//   return (
//     <>
//      {isSubmitting && <div className="text-center text-green-600 text-2xl">Loading.....</div>}
//       <div className="shadow-xl lg:w-96 lg:h-100vh mt-25 mb-30 mx-auto px-4 py-6 md:w-96 md:h-100vh">
//         <h1 className="uppercase text-2xl text-center mx-auto font-bold">
//           Login
//         </h1>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="w-80 flex flex-col">
//             {/* username Input */}
//             <input
//               {...register("username", {
//                 required: { value: true, message: "This field is required" },
//                 minLength: { value: 3, message: "Min length is 3" },
//                 maxLength: { value: 35, message: "Max length is 35" },
//               })}
//               type="text"
//               placeholder="Enter Username"
//               className="text-center border border-gray-300 text-1xl shadow-xl px-6 py-3 mt-6 rounded-3xl"
//             />
//             {errors.username && (
//               <div className="text-red-600">{errors.username.message}</div>
//             )}

//             {/* Password Input */}
//             <input
//               {...register("password", {
//                 required: { value: true, message: "This field is required" },
//                 minLength: { value: 4, message: "Weak Paasword! Please create some strong password" },
                
//               })}
//               type="password"
//               placeholder="Enter Password"
//               className="text-center border border-gray-300 text-1xl shadow-xl px-6 py-3 mt-6 rounded-3xl"
//             />
//             {errors.password && (
//               <div className="text-red-600">{errors.password.message}</div>
//             )}

//             <p className='text-center mt-3'>Forgot Password? <a className='hover:text-orange-400 transition duration-400 hover:no-underline' href="/login">Click Here</a></p>
//             {/* Submit Button */}
//             <button
//               enabled={isSubmitting}
//               type="submit"
//               className="bg-orange-400 hover:bg-orange-600 border border-orange-400 rounded-3xl mt-3 px-6 py-3 transition-all duration-300"
//               onClick={notify}
//             >
//               Send Message
//             </button>
//             <Toaster toastOptions={{
//               className: '',
//               style: {
//                 border: '1px solid #713200',
//                 padding: 'auto',
//                 color: '#713200',
//                 width: '120%',
//               },
//             }} />
//             {errors.myform && (<div className="text-red-600 font-bold">{errors.myform.message}</div>)}
//           </div>
//         </form>
//       </div>
//     </>
//   )
// }

// export default LoginPage
