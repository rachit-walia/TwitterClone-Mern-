import React, { useState } from 'react';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const loginSignupHandler = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className='w-screen h-screen flex items-center justify-center bg-gray-100'>
            <div className='flex items-center justify-evenly w-[80%] bg-white p-8 rounded-lg shadow-lg'>
                <div>
                    <img
                        className='ml-4'
                        width={"270px"}
                        src='https://imgs.search.brave.com/aqB_1MrCNFw2qHhI7HfUwq5kJ8L-bdVz_Lsn3Ac_tsk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzgxLzMwLzQ3/LzM2MF9GXzY4MTMw/NDc4MF92SkZoYlVt/VWhlZXhKMnVVQ2hk/MW5PdTFQZ1A5TjdQ/TS5qcGc'
                        alt='twitter-logo'
                    />
                </div>
                <div>
                    <div className='my-5'>
                        <h1 className='font-bold text-6xl'>Happening now</h1>
                    </div>
                    <h1 className='mt-4 mb-2 text-2xl font-bold'>{isLogin ? 'Login' : 'Create account'}</h1>
                    <form className='flex flex-col w-[50%]'>
                        {!isLogin && (
                            <>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold'
                                />
                                <input
                                    type='text'
                                    placeholder='Username'
                                    className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold'
                                />
                            </>
                        )}
                        <input
                            type='email'
                            placeholder='Email'
                            className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold'
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold'
                        />
                        <button className='bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white'>
                            {isLogin ? 'Login' : 'Create account'}
                        </button>
                    </form>
                    <h1>
                        {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
                        <span className='text-blue-500 cursor-pointer' onClick={loginSignupHandler}>
                            {isLogin ? 'Create account' : 'Login'}
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Login;
