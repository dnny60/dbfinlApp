"use client";
import { useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, phoneNumber }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // 可以在控制台中檢查回傳的資料
      } else {
        console.error("註冊失敗");
      }
    } catch (error) {
      console.error("發生錯誤", error);
    }
  };

  return (
    <div>
      <h1>註冊</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="姓名"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="電子郵件"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="密碼"
          required
        />
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="電話號碼"
          required
        />
        <button type="submit">註冊</button>
      </form>
    </div>
  );
};

export default RegisterPage;
