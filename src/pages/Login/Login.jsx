import Navbar from '../Shared/Navbar/Navbar';
import Header from '../Shared/Header/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const { logInUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log('login page', location);
    const handleLogin = e => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        // console.log(form.get('password'));
        console.log(email, password);
        logInUser(email, password)
            .then(res => {
                console.log(res.user);
                navigate(location?.state ? location.state : "/")
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1 className="text-5xl font-bold py-4 text-center">
                Login Here

            </h1>
            <div className="w-full flex ">
                <div className="card flex-shrink-0 w-full mx-auto max-w-sm md:max-w-md lg:max-w-xl shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Dont Have An Account? <Link to={'/register'} className='text-red-800 font-medium'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;