import React from "react";
function Title() {
    return(
        <a href="/">
            <img className="logo absolute top-0 left-0 w-60 h-60 my-10"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKhFrbCuE_Yho9YrZ9baA8se5SGlaXMJz2DxtPFB1dpw&s"/>
            </a>


        
    );
}
function Header() {
    return(
        <div className="header list-none flex justify-between mx-10 my-8">
            <Title/>
            <div class="flex items-center justify-between">
  <div class="absolute top-2 right-2 mt-6 mr-6">
     
    <a href="#" class="text-gray-700 hover:text-black ml-5">Home</a>
    <a href="#" class="text-gray-700 hover:text-black ml-5">About</a>
    <a href="#" class="text-gray-700 hover:text-black ml-5">Contact</a>
    <a href="#" class="text-gray-700 hover:text-black ml-4">Cart</a>
  </div>
  
</div>
        </div>
        
    )
}
export default Header;