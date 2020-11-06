import React from "react";

const Header = prop => {
  return (
    <div className="Header">
      <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <div class="flex-shrink-0">
          <img class="h-12 w-12" src="https://i.pinimg.com/564x/a4/80/f2/a480f284d55f478e49dc40c36c99536b.jpg" alt="NASA Logo"></img>
        </div>
        <div class="ml-6 pt-1">
          <p class="text-base text-gray-600 leading-normal">Header!</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
