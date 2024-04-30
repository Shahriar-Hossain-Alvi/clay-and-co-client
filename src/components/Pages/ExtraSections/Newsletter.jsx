import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import Swal from 'sweetalert2';

const Newsletter = () => {
    const { user } = useContext(AuthContext);

    const handleNewsLetterForm = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        console.log(email, user.displayName);

        Swal.fire({
            title: 'Thanks for subscribing to our newsletter',
            html: `Name: ${user.displayName} <br>
            Email ${email}`,
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }

    return (
        <div className="text-center mb-10">
            <h1 className="font-bold text-2xl text-center font-rubic mb-1">JOIN OUR NEWSLETTER!</h1>
            <h4 className="font-semibold text-lg">Sign up now for news and special offers!</h4>

            <div className="w-full lg:w-1/2 mx-auto mt-5">
                <form onSubmit={handleNewsLetterForm}>
                    <div className="join w-full">
                        <input className="input grow input-bordered join-item" placeholder="Email" type="email" name="email" defaultValue={user?.email === null ? "Enter your email" : user?.email} />

                        <input className="btn join-item rounded-r-full input-bordered bg-primaryColor text-white font-semibold hover:bg-rose-800 hover:border-rose-800" type="submit" value="Subscribe" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;