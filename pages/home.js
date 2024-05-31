import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className='text-white'>
      <nav
        style={{ backgroundColor: "#223544" }}
        className='h-24 p-4 md:p-6 md:px-10 lg:px-10 xl:px-20 2xl:px-40 text-white flex justify-between items-center'
      >
        <div className='flex items-center space-x-4'>
          <img
            src='images/logo.png'
            alt='Roldrive Logo'
            className='h-10 mr-4 md:mr-8'
          />
          <div className='hidden md:flex space-x-4 lg:space-x-10'>
            <a href='#' className='hover:text-gray-200'>
              Services
            </a>
            <a href='#' className='hover:text-gray-200'>
              Fleet
            </a>
            <a href='#' className='hover:text-gray-200'>
              Business Solutions
            </a>
            <a href='#' className='hover:text-gray-200'>
              Cities
            </a>
            <a href='#' className='hover:text-gray-200'>
              Airport Transfers
            </a>
          </div>
        </div>
        <div className='flex items-center'>
          <img
            className='mr-2'
            alt=''
            src='images/icons/TextButton.png'
            height='50px'
            width='50px'
          />
          <img
            className='mr-2'
            alt=''
            src='images/icons/whatsapp.png'
            height='20px'
            width='20px'
          />
          <button className='text-white py-2 px-2 mr-2'>Contact Us</button>

          <select className='text-white py-2 px-2 ml-4 mr-4 rounded-lg bg-transparent border-[0.5px] border-[#8a8989]'>
            <option>Eng</option>
          </select>

          <button className='py-2 px-8 rounded-lg text-black bg-[#FDE8E1] font-medium'>
            Sign In
          </button>
        </div>
      </nav>

      <div className='w-full h-32 bg-[#223544]'></div>

      <div className='relative w-full' style={{ height: 'calc(100vh - 6rem - 8rem)' }}>
        <div className='mirrored-background flex flex-col md:flex-row items-start justify-between px-4 md:px-20 relative' style={{ height: 'calc(100vh - 4rem - 8rem)' }}>
          <div className='w-full px-40 py-4 flex flex-col md:flex-row justify-between space-x-0 md:space-x-16 absolute top-[-130px] left-2 right-2'>
            <div className='text-white'>
              <h1 className='text-xl md:text-5xl font-bold' style={{fontSize: '42px'}}>Premium Chauffeur Service</h1>
              <p className='text-md md:text-md font-normal text-slate-100/80'>
                Your exclusive and dependable chauffeur service indulgence
              </p>
            </div>

            <div className='flex justify-center py-4 px-16 z-[1]' style={{ height: 'calc(100vh - 2rem - 8rem)' }}>
              <div
                className='py-8 px-5 rounded-[20px] shadow-lg w-full md:w-[450px] backdrop-blur-md border border-slate-700'
                style={{
                  backgroundColor: "rgba(18, 25, 33, 0.8)",
                }}
              >
                <div className='flex space-x-4 mb-4 w-full'>
                  <button className='flex-grow flex items-center justify-center text-white py-1 px-4 rounded-full bg-[#223544] border border-[#ccc]'>
                    <img
                      src='images/icons/transfer.png'
                      alt='Transfer Icon'
                      className='w-4 h-4 mr-2'
                    />
                    <text>Transfer</text>
                  </button>
                  <button
                    className='flex-grow flex items-center justify-center py-2 px-4 rounded-full'
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid #ccc",
                      color: "#828282",
                    }}
                  >
                    <img
                      src='images/icons/hourly.png'
                      alt='Hourly Icon'
                      className='w-4 h-4 mr-2'
                    />
                    Hourly
                  </button>
                </div>

                <div className='grid grid-cols-1 mb-2 relative'>
                  <label htmlFor='pickup-location' className='w-full'>
                    <span style={{fontSize: '12px'}}>Pick Up</span>
                  </label>
                  <div className='relative w-full'>
                    <input
                      type='text'
                      id='pickup-location'
                      placeholder='Enter pick up location'
                      className='text-white py-3 px-4 rounded-lg w-full pl-10 pr-10 border border-[#ccc] bg-[#223544]'
                    />
                    <img
                      src='images/icons/pick_drop.png'
                      alt='Icon'
                      className='absolute left-3 top-1/2 transform -translate-y-1/2'
                      style={{ height: "20px", width: "20px" }}
                    />
                    <img
                      src='images/icons/equals.png'
                      alt='Icon'
                      className='absolute right-3 top-1/2 transform -translate-y-1/2'
                      style={{ height: "6px", width: "12px", color: "#828282" }}
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 mb-2 relative'>
                  <label htmlFor='drop-location' className='w-full'>
                    <span style={{fontSize: '12px'}}>Drop Off</span>
                  </label>
                  <div className='relative w-full'>
                    <input
                      type='text'
                      id='drop-location'
                      placeholder='Enter drop off location'
                      className='text-white py-3 px-4 rounded-lg w-full pl-10 pr-10 border border-[#ccc] bg-[#223544]'
                    />
                    <img
                      src='images/icons/pick_drop.png'
                      alt='Icon'
                      className='absolute left-3 top-1/2 transform -translate-y-1/2'
                      style={{ height: "20px", width: "20px" }}
                    />
                    <img
                      src='images/icons/equals.png'
                      alt='Icon'
                      className='absolute right-3 top-1/2 transform -translate-y-1/2'
                      style={{ height: "6px", width: "12px", color: "#828282" }}
                    />
                  </div>
                  <button
                    className='flex-grow flex items-center'
                    style={{ color: "#FDC65C" }}
                  >
                    <img
                      src='images/icons/stop.png'
                      alt='Stop Icon'
                      className='w-4 h-4 mr-2'
                    />
                    Add Stop
                  </button>
                </div>

                <div className='flex justify-between gap-4 mb-2 relative'>
                  <div className='grid grid-cols-1 mb-2 relative'>
                    <label htmlFor='pickup-date' className='w-full'>
                      <span style={{fontSize: '12px'}}>Date</span>
                    </label>
                    <div className='relative w-full'>
                      <input
                        type='text'
                        id='pickup-date'
                        placeholder='Pick date'
                        className='text-white py-3 px-5 rounded-lg w-full pl-10 pr-10 border border-[#ccc] bg-[#223544]'
                      />
                      <img
                        src='images/icons/pick_drop.png'
                        alt='Icon'
                        className='absolute left-3 top-1/2 transform -translate-y-1/2'
                        style={{ height: "20px", width: "20px" }}
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 mb-2 relative'>
                    <label
                      htmlFor='pickup-time'
                      className='w-full text-sm mb-0'
                    >
                      <span style={{fontSize: '12px'}}>Time</span>
                    </label>
                    <div className='relative w-full'>
                      <input
                        type='text'
                        id='pickup-time'
                        placeholder='Pick time'
                        className='text-white py-3 px-5 rounded-lg w-full pl-10 pr-10 border border-[#ccc] bg-[#223544]'
                      />
                      <img
                        src='images/icons/pick_drop.png'
                        alt='Icon'
                        className='absolute left-3 top-1/2 transform -translate-y-1/2'
                        style={{ height: "20px", width: "20px" }}
                      />
                    </div>
                  </div>
                </div>

                <hr
                  style={{
                    border: "none",
                    height: "0.5px",
                    backgroundColor: "#B2B2B2",
                    margin: "10px 0",
                  }}
                />

                <div className='grid grid-cols-1 mb-2 mt-4 relative'>
                  <button
                    className='flex-grow flex items-center'
                    style={{ color: "#FDC65C" }}
                  >
                    <img
                      src='images/icons/stop.png'
                      alt='Stop Icon'
                      className='w-4 h-4 mr-2'
                    />
                    Add Return Journey
                  </button>
                </div>

                <button
                  className='text-white text-xl py-3 px-8 rounded-lg w-full'
                  style={{ backgroundColor: "#EC5C29" }}
                >
                  Search Ride
                </button>
              </div>
            </div>
          </div>
          {/* TODO: style below div */}
          <div className='absolute mx-auto bottom-0 mb-24 ml-20 px-8 z-[5]'>
            <p className="text-xl" style={{color: '#CED5E5', fontSize: '20px'}}>Do you want to customise your booking?</p>
            <p style={{ fontSize: '12px', color: '#CED5E5' }}> We offer customised bookings for any location, from bulk or intercity trips to monthly packages. </p>
            <div className='flex space-x-4 mt-2'> <div>
              <p style={{ fontSize: '14px', color: '#CED5E5' }}>Contact us now</p>
            </div>
              <div className='flex space-x-2' style={{ fontSize: '14px' }}>
                <img src='images/icons/call.png' alt='Icon' style={{ height: "20px", width: "20px", display: "inline", marginRight: "5px" }} />
                <p style={{ color: "#FDC65C", display: "inline" }}>+44 (0) 207 112 8101</p>
                <img src='images/icons/call.png' alt='Icon' style={{ height: "20px", width: "20px", display: "inline", marginRight: "5px" }} />
                <p style={{ color: "#FDC65C", display: "inline" }}>booking@roldrive.com</p>
              </div>
            </div>
          </div>

        </div>
      

      {/* set gradient accordingly below */}
      <div className="w-full h-40 absolute bottom-16 z-[0] bg-gradient-to-t from-[#11202D] to-transparent"></div>
      <div className="w-full h-16 absolute bottom-0 z-[-1] bg-[#11202D]"></div>
      </div>



      <div
        className='relative bg-no-repeat bg-center'
        style={{ height: "180px", width: "100%" }}
      >
        <div
          className='absolute inset-0'
          style={{
            background:
              "url('images/bg-image/frame2.png') no-repeat center center / contain",
          }}
        ></div>
        <div
          className='w-full flex text-center p-4 justify-center bg-black bg-opacity-95'
          style={{ height: "100%" }}
        >
          <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
            <div className='text-white text-sm md:text-xl mr-4 md:mr-8'>Download The App</div>
            <img
              src='images/icons/googleplay.png'
              alt='Google Play'
              className='h-8 md:h-12'
            />
            <img
              src='images/icons/appstore.png'
              alt='App Store'
              className='h-8 md:h-12 mr-4'
            />
            <img
              src='images/icons/partition.png'
              alt='Scan QR Code'
              className='mx-auto h-16 md:h-24 mr-4'
            />
            <img
              src='images/icons/qr.png'
              alt='Scan QR Code'
              className='mx-auto h-16 md:h-24'
            />
          </div>
        </div>
      </div>

      <div className='text-white' style={{ backgroundColor: "#11202D" }}>
        <div className='container mx-auto px-4 md:px-40 py-10'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-center md:text-left'>
              <div className='text-2xl md:text-3xl font-bold mb-0'>8000+</div>
              <p className='text-md'>Successful Bookings</p>
            </div>
            <div className='text-center md:text-left'>
              <h2 className='text-2xl md:text-3xl font-bold mb-0'>500+</h2>
              <p className='text-md'>Luxury Cars</p>
            </div>
            <div className='text-center md:text-left'>
              <h2 className='text-2xl md:text-3xl font-bold mb-0'>200+</h2>
              <p className='text-md'>Trained Chauffeurs</p>
            </div>
            <div className='text-center md:text-left'>
              <h2 className='text-2xl md:text-3xl font-bold mb-0'>150+</h2>
              <p className='text-md'>Business Partners</p>
            </div>
          </div>
        </div>
      </div>

      <div className='text-white' style={{ backgroundColor: "#081017" }}>
        <div className='container mx-auto px-4 md:px-40 py-10 text-center'>
          <p className='text-xs'>How it Works</p>
          <h2 className='text-xl md:text-2xl font-semibold mb-6'>
            Book Your Chauffeur Experience in Three Simple Steps
          </h2>
          <div className='flex flex-col md:flex-row justify-between gap-4 items-center'>
            <div className='flex flex-col items-center'>
              <div className='p-4 rounded-lg mb-2'>
                <img
                  src='images/icons/booking1.png'
                  alt='Enter Trip Details'
                  className='h-10 md:h-14 w-10 md:w-14'
                />
              </div>
              <p className='text-lg'>Enter Trip Details</p>
              <p className='text-xs mt-1 text-center'>
                Enter your destination, select your date and time, and explore
                our fleet.
              </p>
            </div>

            <div className='mx-4 hidden md:block'>
              <img
                src='images/icons/arrow-line.png'
                alt='Next Step'
                className='mx-4 h-3 w-auto'
              />
            </div>

            <div className='flex flex-col items-center'>
              <div className='p-4 rounded-lg mb-2'>
                <img
                  src='images/icons/booking2.png'
                  alt='Vehicle Of Choice'
                  className='h-10 md:h-14 w-10 md:w-14'
                />
              </div>
              <p className='text-lg'>Vehicle Of Choice</p>
              <p className='text-xs mt-1 text-center'>
                Choose from our extensive fleet for a vehicle that suits you
                best.
              </p>
            </div>

            <div className='mx-4 hidden md:block'>
              <img
                src='images/icons/arrow-line.png'
                alt='Next Step'
                className='mx-4 h-3 w-auto'
              />
            </div>

            <div className='flex flex-col items-center'>
              <div className='p-2 rounded-lg mb-2'>
                <img
                  src='images/icons/booking3.png'
                  alt='Confirm Your Ride'
                  className='h-10 md:h-14 w-10 md:w-14'
                />
              </div>
              <p className='text-lg'>Confirm Your Ride</p>
              <p className='text-xs mt-1 text-center'>
                The final stage to your booking process where you confirm the
                ride.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
