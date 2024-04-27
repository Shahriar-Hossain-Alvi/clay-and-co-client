import logo from "../../../assets/images/C&C.png";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaPhone, FaLocationDot } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            <footer className="footer px-10 py-4 border-t bg-[#222D35F2] text-white border-base-300">
                <aside className="items-center grid-flow-col">
                    <div>
                        <img src={logo} className="w-16 h-16" alt="logo" />
                    </div>
                    <p>Clay & Co. <br />Providing reliable service since 1990</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a className="hover:text-primaryColor text-xl duration-200" href="#"><FaFacebookF /></a>
                        <a className="hover:text-primaryColor text-xl duration-200" href="#"><FaXTwitter /></a>
                        <a className="hover:text-primaryColor text-xl duration-200" href="#"><FaInstagram /></a>
                    </div>
                </nav>
            </footer>
            <footer className="footer p-10 bg-[#222D35] text-white">
                <nav>
                    <h6 className="footer-title">Contact Us</h6>

                    <ul className="space-y-2">
                        <li className="flex gap-3"><FaLocationDot className="text-primaryColor" /> <p>4789 Melmorn Street,Zakila Ton Mashintron Town</p></li>

                        <li className="flex gap-3"><FaPhone className="text-primaryColor" /> <p>(+01) 123 456 7890</p></li>

                        <li className="flex gap-3"><MdEmail className="text-primaryColor" /> <p>info@example.com</p></li>
                    </ul>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-[#222D35] text-white">
                <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;