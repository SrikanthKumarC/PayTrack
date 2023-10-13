import React from 'react';

const Menu = () => {
    return (
        <div className="hidden sm:block float-left -mx-4 p-4 -my-6 h-full fixed  border ">
            <div className="item flex gap-2 self-center">
                <i className="ri-home-4-line text-xl font-bold"></i>
                <p className='self-center'>Home</p>
            </div>

        </div>
    );
};

export default Menu;