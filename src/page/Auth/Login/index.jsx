import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate(); // dùng để chuyển trang
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // ngăn reload form

        try {
        // Gửi dữ liệu đến API login
        const res = await fetch('https://api.example.com/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (res.ok) {
            const data = await res.json();

            // Ví dụ: lưu token nếu cần
            localStorage.setItem('token', data.token);

            // chuyển sang trang /home
            navigate('/');
        } else {
            alert('Email hoặc mật khẩu không đúng!');
        }
        } catch (err) {
        console.error('Lỗi khi đăng nhập:', err);
        alert('Đã có lỗi xảy ra, vui lòng thử lại sau.');
        }
    };

    return (
        <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                Đăng Nhập vào tài khoản của bạn
            </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md bg-white border border-gray-300 px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
                    />
                </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                    Password
                    </label>
                    <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                    </a>
                    </div>
                </div>
                <div className="mt-2">
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full rounded-md bg-white border border-gray-300 px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
                    />
                </div>
                </div>

                <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Đăng Nhập
                </button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                Chưa có tài khoản?
                <a href="../register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                {' '}Đăng ký ngay
                </a>
            </p>
            </div>
        </div>
        </div>
    );
};

export default Login;
