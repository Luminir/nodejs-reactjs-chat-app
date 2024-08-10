import React from 'react'
import axios from 'axios'

const XacMinh = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios
          .post("http://localhost:3001/authenticate", { username: value })
          .then((result) => props.onAuth({ ...result.data, secret: value }))
          .catch((error) => console.log("Auth Error", error));
      };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Chào mừng đến với Kuc Cu Chat 🔥🗣️</div>
  
          <div className="form-subtitle">Tạo tên đăng nhập</div>
  
          <div className="auth">
            <div className="auth-label">Tên người dùng</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    );
  };

export default XacMinh