// import { useState } from 'react'
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { RegisterPage } from './pages/RegisterPage/RegisterPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Helmet>
        <title>Phone book</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          /> */}
          <Route path="register" element={<RegisterPage />}/>
        
          {/* <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          /> */}
          {/* <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
