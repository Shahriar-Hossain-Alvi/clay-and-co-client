import { Outlet, ScrollRestoration } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-dosis text-secondaryColor">
            <ScrollRestoration></ScrollRestoration>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;