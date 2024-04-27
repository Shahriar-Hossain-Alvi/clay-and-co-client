import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-dosis text-secondaryColor">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;