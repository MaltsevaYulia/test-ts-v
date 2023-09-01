// import { Button, Paper, Typography } from "@mui/material";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Paper";
import Button from "@mui/material/Paper";
import { useForm } from "react-hook-form";
import { FormInputText } from "./FormInputText";
import { FormInputDropdown } from "./FormInputDropdown";

interface IFormInput {
  textValue: string;
  dropdownValue: string;
  
}
const defaultValues = {
  textValue: "",
  dropdownValue: "",

};


export const SingUpForm = () => {
  const { handleSubmit, reset, control } = useForm({
    defaultValues: defaultValues,
  });
  const onSubmit = (data: IFormInput) => console.log(data);
  return (
  
    <div style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
      }}>
      
      {/* <Typography variant="h4"> Form Demo</Typography> */}
      <FormInputText name="textValue" control={control} label="Text Input" />
      <FormInputDropdown
        name="dropdownValue"
        control={control}
        label="Dropdown Input"
      />
      <Button onClick={handleSubmit(onSubmit)} variant={"outlined"}>
        Submit
          </Button>
          <Button onClick={() => reset()} variant={"outlined"}>
        Reset
      </Button>
    </div>
  );
};

// export const SingUpForm = () => {
//   const { register, handleSubmit, errors } = useForm();
//   const [profileType, setProfileType] = useState('Author');

//   const onSubmit = async (data: IFormInput) => {
//     console.log("🚀 ~ onSubmit ~ data:", data)
//     // data.data = { profileType }; // Добавляем profileType к данным
//     // const { user, error } = await supabase.auth.signUp(data);
//     // const { user, error } = await supabase.auth.signUp({
//     //   email: 'julyysp@gmail.com',
//     //   password: 'Qwerty789456123',
//     //   data: { profileType }, // Передаем profileType как часть данных
//     // });

//     if (error) {
//       console.error(error);
//     } else {
//       console.log('User registered successfully:', user);
//     }
//   };

//   const handleProfileTypeChange = (e) => {
//     setProfileType(e.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               ref={register({ required: true })}
//             />
//           </label>
//           {errors.email && <p>Email is required</p>}
//         </div>
//         <div>
//           <label>
//             Password:
//             <input
//               type="password"
//               name="password"
//               ref={register({ required: true })}
//             />
//           </label>
//           {errors.password && <p>Password is required</p>}
//         </div>
//         <div>
//           <label>
//             Choose Profile Type:
//             <select
//               name="profileType"
//               value={profileType}
//               onChange={handleProfileTypeChange}
//             >
//               <option value="Author">Author</option>
//               <option value="Commentator">Commentator</option>
//             </select>
//           </label>
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };
  