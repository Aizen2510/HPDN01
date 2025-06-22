import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [otp, setOtp] = useState('');
    const [registeredEmail, setRegisteredEmail] = useState('');
    const navigate = useNavigate();

    // Đăng ký
    const handleRegister = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const username = e.target.user.value;
        const password = e.target.password.value;

        try {
        const res = await fetch('https://api.example.com/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, username, password }),
        });

        if (res.ok) {
            setRegisteredEmail(email); // lưu để gửi OTP xác thực
            setShowOtpModal(true); // mở modal nhập OTP
        } else {
            alert('Đăng ký thất bại');
        }
        } catch (err) {
        alert('Lỗi kết nối đến máy chủ');
        }
    };

    // Gửi OTP
    const handleVerifyOtp = async () => {
        try {
        const res = await fetch('https://api.example.com/verify-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: registeredEmail, otp }),
        });

        if (res.ok) {
            alert('Xác thực thành công!');
            setShowOtpModal(false);
            navigate('/'); // về trang login
        } else {
            alert('Mã OTP không chính xác.');
        }
        } catch (err) {
        alert('Không thể xác thực OTP.');
        }
    };

    return (
        <div>
        {/* FORM ĐĂNG KÝ */}
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">Đăng ký để có thêm nhiều tiện ích mới</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleRegister}>
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                <input type="email" name="email" id="email" autoComplete="email" required className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm" />
                </div>

                <div>
                <label htmlFor="user" className="block text-sm font-medium text-gray-900">Tên Người Dùng</label>
                <input type="text" name="user" id="user" autoComplete="username" required className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm" />
                </div>

                <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">Mật Khẩu</label>
                <input type="password" name="password" id="password" autoComplete="current-password" required className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm" />
                </div>

                <button type="submit" className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-indigo-600">
                Đăng Ký
                </button>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                Đã có tài khoản?
                <a href="../login" className="font-semibold text-indigo-600 hover:text-indigo-500"> Đăng Nhập ngay</a>
            </p>
            </div>
        </div>

        {/* MODAL NHẬP OTP */}
        {showOtpModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                <h3 className="text-lg font-bold mb-4">Nhập mã OTP đã gửi đến email</h3>
                <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full mb-4 border border-gray-300 rounded-md px-3 py-2"
                placeholder="Nhập mã OTP"
                />
                <div className="flex justify-end space-x-3">
                <button
                    onClick={() => setShowOtpModal(false)}
                    className="px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300"
                >
                    Hủy
                </button>
                <button
                    onClick={handleVerifyOtp}
                    className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
                >
                    Xác Thực
                </button>
                </div>
            </div>
            </div>
        )}
        </div>
    );
};

export default Register;
