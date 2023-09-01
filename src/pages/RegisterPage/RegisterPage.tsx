// import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';
// import { useState } from 'react';
// import {
//   Auth,
// } from '@supabase/auth-ui-react'

// import {
//   // Import predefined theme
//   ThemeSupa,
// } from '@supabase/auth-ui-shared'

// import supabase from "../../supabaseConfig/supabaseClient.js";
import { SingUpForm } from '../../components/SingUpForm/SingUpForm';

export const RegisterPage = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
          </Helmet>
          {/* <div>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}

      />
          </div> */}
          <SingUpForm/>
      {/* <RegisterForm /> */}
    </div>
  );
};

// export const RegisterPage = () => {
//   const [profileType, setProfileType] = useState('Author'); // Инициализируйте по умолчанию Author

//   const handleProfileTypeChange = (e) => {
//     setProfileType(e.target.value);
//   };

//   return (
//     <div>
//       <Helmet>
//         <title>Registration</title>
//       </Helmet>
//       <div>
//         <label>
//           Choose Profile Type:
//           <select value={profileType} onChange={handleProfileTypeChange}>
//             <option value="Author">Author</option>
//             <option value="Commentator">Commentator</option>
//           </select>
//         </label>
//       </div>
//       <div>
//         <Auth
//           supabaseClient={supabase}
//           appearance={{ theme: ThemeSupa }}
//           additionalInputs={{ profileType }} // Передаем profileType в Auth компонент
//         />
//       </div>
//     </div>
//   );
// };