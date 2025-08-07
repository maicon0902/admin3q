"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Spin, message } from "antd";
import Cookies from 'js-cookie'
import "./style.scss";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // setLoading(true);
  //   const dummyUser = {
  //     email: 'admin@example.com',
  //     password: '123456',
  //     token: 'dummy-auth-token',
  //   }
  //   debugger

  //   if (email === dummyUser.email && password === dummyUser.password) {
  //     Cookies.set('token', dummyUser.token, { expires: 7 }) // set cookie trong 7 ngày
  //     // router.push('/')
  //     router.refresh() 
  //   } else {
  //     setError('Email hoặc mật khẩu không đúng')
  //   }
  //   // const formData = new FormData(e.currentTarget);
  //   // const res = await fetch("/auth/login", {
  //   //   method: "POST",
  //   //   body: formData,
  //   // });

  //   // if (res.status === 200) {
  //   //   setLoading(false);
  //   //   router.push("/customizeHomepage");
  //   //   return;
  //   // }

  //   // if (res.status === 400) {
  //   //   setLoading(false);
  //   //   message.error("Invalid email or password");
  //   //   return;
  //   // }
  // };

  const handleSubmit = () => {
    setLoading(true);
    const dummyUser = {
      email: 'admin@example.com',
      password: '123456',
      token: 'dummy-auth-token',
    }

    if (email === dummyUser.email && password === dummyUser.password) {
      Cookies.set('auth_token', dummyUser.token, { expires: 7, path: '/' })
      setLoading(false);
      router.refresh();
    } else {
      setLoading(false);
      setError('Email hoặc mật khẩu không đúng')
    }
  }

  return (
    <div className="card">
      <form className="card-form" onSubmit={handleSubmit}>
        <div className="input">
          <input type="email" name="email" className="input-field" onChange={(e) => setEmail(e.target.value)} required />
          <label className="input-label" htmlFor="email">
            Email
          </label>
        </div>
        <div className="input">
          <input
            type="password"
            className="input-field"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="input-label" htmlFor="password">
            Password
          </label>
        </div>
        <div className="action">
          <button className="action-button">
            {loading ? <Spin /> : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
