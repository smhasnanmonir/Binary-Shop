/* eslint-disable @next/next/no-img-element */

const TopProduct = () => {
  return (
    <div className="py-[20px]">
      <h1 className="text-center font-semibold text-3xl md:pb-[34px] pb-[16px] gap-3">
        Our Best Products At a glance
      </h1>

      <div className="grid md:grid-cols-4 grid-cols-3 place-items-center px-[5%]">
        <div className="object-cover border rounded-lg p-5 hover:bg-red-400 transition-all duration-500">
          <img
            className="w-[225px] object-cover "
            src="https://utfs.io/f/ZSu459z2V7Otx2G3P4gRd5iYMXcK4E6C2DrvAo13fhL7lusW"
            alt="Pure Vpn"
          />
        </div>
        <div className="object-cover border rounded-lg p-5 hover:bg-red-400 transition-all duration-500">
          <img
            className="w-[125px] "
            src="https://utfs.io/f/ZSu459z2V7OtVvInm5Jl8P6Tt92ws7xReUp5WDqIYAfJkh0M"
            alt="Windscribe Vpn"
          />
        </div>
        <div className="object-cover border rounded-lg p-5 hover:bg-red-400 transition-all duration-500">
          <img
            className="w-[125px] "
            src="https://utfs.io/f/ZSu459z2V7OtGUNsyXL8jSHI1McN5mtXPV4niueRqzkl7Fx6"
            alt="IPvanish Vpn"
          />
        </div>

        <div className="object-cover border rounded-lg p-5 hover:bg-red-400 transition-all duration-500">
          <img
            className="w-[225px] "
            src="https://utfs.io/f/ZSu459z2V7OtyI7jbjxm0K2Ht8C1TDIcah3f4jJObPVFU9pQ"
            alt="PIA Vpn"
          />
        </div>

        <div className="object-cover border rounded-lg p-5 hover:bg-red-400 transition-all duration-500">
          <img
            className="w-[175px] "
            src="https://utfs.io/f/ZSu459z2V7OtfAuDNGe463DFYjqOzwx7o842QZhJBUEdHSe9"
            alt="Windscribe Vpn"
          />
        </div>
        <div className="object-cover border rounded-lg p-5 hover:bg-red-400 transition-all duration-500">
          <img
            className="w-[225px] "
            src="https://utfs.io/f/ZSu459z2V7Otre0sPyR98gaIEM6N2sbK5i4dUcqhYwrAfOTu"
            alt="Windscribe Vpn"
          />
        </div>

        <div className="object-cover border rounded-lg p-5 hover:bg-red-400 transition-all duration-500">
          <img
            className="w-[225px] "
            src="https://utfs.io/f/ZSu459z2V7OtzQcRyRrulgxUHXQsnWk5p78dfZPySRq1wMr2"
            alt="Windscribe Vpn"
          />
        </div>

        <div className="object-cover border rounded-lg p-5 hover:bg-red-400 transition-all duration-500">
          <img
            className="w-[225px] "
            src="https://utfs.io/f/ZSu459z2V7OtLOh57hsJGqxk6jgY2ESQlbwAWX39nZRiDe0I"
            alt="Windscribe Vpn"
          />
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
