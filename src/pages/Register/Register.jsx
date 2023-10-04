import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        // console.log(form.get('password'));
        const name = form.get('name')
        const email = form.get('email')
        const image = form.get('photo')
        const password = form.get('password')
        console.log(name, email, password, image);
        createUser(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(err => console.log(err.message))

    }

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1 className="text-5xl font-bold py-4 text-center bg-clip-text text-transparent bg-gradient-to-l from-rose-500 to-violet-800">
                Sign Up  Here
            </h1>
            <div className="w-full flex ">
                <div className="card flex-shrink-0 w-full mx-auto max-w-sm md:max-w-md lg:max-w-xl shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name </span>
                            </label>
                            <input required type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url  </span>
                            </label>
                            <input required type="url" name='photo' placeholder="Photo Url" className="input input-bordered" />
                        </div>
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
                            <button className="btn btn-primary ">Sign Up</button>
                        </div>
                        <p>Already Have An Account? <Link to={'/login'} className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-medium'>Login </Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;