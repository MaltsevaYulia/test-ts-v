// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import css from "./RegisterForm.module.css";
import { useState } from "react";
import supabase from "../../supabaseConfig/supabaseClient.js";


export const RegisterForm = () => {
  const [focusEmail, setFocusfocusEmail] = useState("");
  const [focusPassword, setFocusPassword] = useState("");
  const [focusName, setFocusName] = useState("");
  const [focusProfileType, setFocusProfileType] = useState("");
  // const dispatch = useDispatch();
  console.log("🚀 ~ supabase:", supabase)
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
  
    const data = {
      name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        profileType: form.elements.profileType.value,
    }
    console.log("🚀 ~ handleSubmit ~ data:", data)

    // dispatch(
    //   register({
    //     name: form.elements.name.value,
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    form.reset();
  };

  const handleFocus = (e: React.FormEvent<HTMLFormElement>) => {
    if (e.currentTarget.name === "email") setFocusfocusEmail("email");
    if (e.currentTarget.name === "password") setFocusPassword("password");
    if (e.currentTarget.name === "name") setFocusName("name");
    if (e.currentTarget.name === "profileType")
      setFocusProfileType("profileType");
  };
  const handleBlur = (e: React.FormEvent<HTMLFormElement>) => {
    if (e.target.value === "" && e.target.name === "email")
      setFocusfocusEmail("");
    if (e.target.value === "" && e.target.name === "password")
      setFocusPassword("");
    if (e.target.value === "" && e.target.name === "name") setFocusName("");
    if (e.target.value === "" && e.target.name === "profileType")
      setFocusProfileType("");
  };

  return (
    <div className={css.login_content}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
        <h2 className={css.title}>Welcome</h2>
        <div
          className={`${css.input_div} ${css.pass} ${
            focusName === "name" && css.focus
          }`}
        >
          <div className={css.i}>
            <BiUser className={css.before} />
            <i className={`${css.fas} ${css.fa_lock}`}></i>
          </div>
          <div className={css.div}>
            <h5>Name</h5>
            <input
              type="text"
              name="name"
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={css.input}
            />
          </div>
        </div>
        <div
          className={`${css.input_div} ${css.pass} ${
            focusProfileType === "profileType" && css.focus
          }`}
        >
          <div className={css.i}>
            <BiUser className={css.before} />
            <i className={`${css.fas} ${css.fa_lock}`}></i>
          </div>
          <div className={css.div}>
            <h5>Profile type</h5>
            <select name="profileType" onFocus={handleFocus}
              onBlur={handleBlur}
              className={css.input}>
              <option value="Author">Author</option>
              <option value="Commentator">Commentator</option>
            </select>
            {/* <input
              type="text"
              name="profileType"
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={css.input}
            /> */}
          </div>
        </div>
        <div
          className={`${css.input_div}  ${css.one} ${
            focusEmail === "email" && css.focus
          }`}
        >
          <div className={css.i}>
            <HiOutlineMail className={css.before} />
            <i className={`${css.fas} ${css.fa_user}`}></i>
          </div>
          <div className={css.div}>
            <h5>Email</h5>

            <input
              type="email"
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="email"
              className={css.input}
            />
          </div>
        </div>
        <div
          className={`${css.input_div} ${css.pass} ${
            focusPassword === "password" && css.focus
          }`}
        >
          <div className={css.i}>
            <RiLockPasswordLine className={css.before} />
            <i className={`${css.fas} ${css.fa_lock}`}></i>
          </div>
          <div className={css.div}>
            <h5>Password</h5>
            <input
              type="password"
              name="password"
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={css.input}
            />
          </div>
        </div>
        <button type="submit" className={css.btn}>
          Register
        </button>
      </form>
    </div>
  );
};
