/* eslint-disable @next/next/no-img-element */

const TopProduct = () => {
  return (
    <div className="">
      <h1 className="text-center font-semibold md:text-3xl text-2xl gap-3 py-[30px]">
        Our Best Products At a glance
      </h1>

      <div className="grid md:grid-cols-3 grid-cols-2 place-items-center px-[5%] gap-[2%]">
        <div className="object-cover border rounded-lg p-5 hover:bg-red-200 transition-all duration-500">
          <img
            className="rounded-lg"
            src="https://utfs.io/f/ZSu459z2V7OtBAiJDeagwv31OhZCzKN2qUWSLoM4p5lkjeG6"
            alt="Pure Vpn"
          />
        </div>
        <div className="object-cover border rounded-lg p-5 hover:bg-red-200 transition-all duration-500">
          <img
            className=""
            src="https://utfs.io/f/ZSu459z2V7Otf7XJby463DFYjqOzwx7o842QZhJBUEdHSe9W"
            alt="Windscribe Vpn"
          />
        </div>
        <div className="object-cover border rounded-lg p-5 hover:bg-red-200 transition-all duration-500">
          <img
            className=""
            src="https://utfs.io/f/ZSu459z2V7OtalLiekqmhFxP0TZEq1r3dyKOsUeIaVLjt6bu"
            alt="IPvanish Vpn"
          />
        </div>

        <div className="object-cover border rounded-lg p-5 hover:bg-red-200 transition-all duration-500">
          <img
            className=""
            src="https://utfs.io/f/ZSu459z2V7Ota8ezEHqmhFxP0TZEq1r3dyKOsUeIaVLjt6bu"
            alt="GPT"
          />
        </div>

        <div className="object-cover border rounded-lg p-5 hover:bg-red-200 transition-all duration-500">
          <img
            className=""
            src="https://utfs.io/f/ZSu459z2V7OtmWxDI917XiNDb3SAGVW0sLU6lH4EZjMkYPu1"
            alt="Nord"
          />
        </div>
        <div className="object-cover border rounded-lg p-5 hover:bg-red-200 transition-all duration-500">
          <img
            className=""
            src="https://utfs.io/f/ZSu459z2V7OtlZlSViQWOyu9prv2XUm1R8xjlZKLgE5YHAoT"
            alt="Mullvad"
          />
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
