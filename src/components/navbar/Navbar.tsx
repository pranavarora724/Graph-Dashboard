import Profile from "./Profile";

function Navbar()
{
    return(
        <div>
            <div className="p-4 flex flex-row justify-between border-b-2 items-center">
                {/* LOGO */}
                <div>
                    <img src="pics/what_byte logo .png" className="w-[250px] hover:cursor-pointer"></img>
                </div>
                <Profile></Profile>
            </div>
        </div>
    )
}

export default Navbar;