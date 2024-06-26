import Image from "next/image";
import React from "react";

export default function Home() {
    return (
        <div className='text-white'>
            <nav
                style={{ backgroundColor: "#223544" }}
                className='p-6 md:px-10 lg:px-10 xl:px-20 2xl:px-40 text-white flex justify-between items-center'
            >
                <div className='flex items-center space-x-4'>
                    <img
                        src='images/logo.png'
                        alt='Roldrive Logo'
                        className='h-10 mr-8'
                    />
                    <div className='hidden md:flex space-x-10'>
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
                        className=''
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

            <div className='w-full h-[650px]'>
                <div className='mirrored-background flex items-start justify-between px-20 relative'>
                    <div className='max-w-screen-xl mx-auto px-4 py-4 flex space-x-24 absolute top-[-130px] left-[140px]'>
                        <div className='text-white'>
                            <h1 className='text-5xl font-bold'>Premium Chauffeur Service</h1>
                            <p className='text-md font-normal text-slate-100/80'>
                                Your exclusive and dependable chauffeur service indulgence
                            </p>
                        </div>

                        <div className='flex justify-center py-4 mt-4'>
                            <div
                                className='py-8 px-5 rounded-[20px] shadow-lg w-[450px] backdrop-blur-md border border-slate-700'
                                style={{
                                    backgroundColor: "rgba(18, 25, 33, 0.8)",
                                }}
                            >
                                <div className='flex space-x-4 mb-4 w-full'>
                                    <button className='flex-grow flex items-center justify-center text-white py-2 px-4 rounded-full bg-[#223544] border border-[#ccc]'>
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

                                <div className='grid grid-cols-1 gap-1 mb-2 relative'>
                                    <label htmlFor='pickup-location' className='w-full'>
                                        <span className='text-sm'>Pick Up</span>
                                    </label>
                                    <div className='relative w-full'>
                                        <input
                                            type='text'
                                            id='pickup-location'
                                            placeholder='Enter pick up location'
                                            className='text-white py-3 px-4 rounded-lg w-full pl-10 
                    pr-10 border border-[#ccc] bg-[#223544]'
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

                                <div className='grid grid-cols-1 gap-1 mb-2 relative'>
                                    <label htmlFor='drop-location' className='w-full'>
                                        <span className='text-sm'>Drop Off</span>
                                    </label>
                                    <div className='relative w-full'>
                                        <input
                                            type='text'
                                            id='drop-location'
                                            placeholder='Enter drop off location'
                                            className='text-white py-3 px-4 rounded-lg w-full pl-10 
                    pr-10 border border-[#ccc] bg-[#223544]'
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
                                    <div className='grid grid-cols-1 gap-1 mb-2 relative'>
                                        <label htmlFor='pickup-date' className='w-full'>
                                            <span className='text-sm'>Date</span>
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

                                    <div className='grid grid-cols-1 gap-1 mb-2 relative'>
                                        <label htmlFor='pickup-time' className='w-full text-sm mb-1'>
                                            <span className='text-sm'>Time</span>
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

                                <div className='grid grid-cols-1 gap-1 mb-4 mt-4 relative'>
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
                    <div className='absolute mx-auto bottom-80 mb-10 z-[5]'>
                        <p>Do you want to customise your booking?</p>
                        <p>
                            We offer customised bookings for any location, from bulk or
                            intercity trips to monthly packages.
                        </p>
                        <div className='flex space-x-3'>
                            <div>
                                <p>Contact us now</p>
                            </div>
                            <div className='flex space-x-2'>
                                <p style={{ color: "#FDC65C" }}>+44 (0) 207 112 8101</p>
                                <p style={{ color: "#FDC65C" }}>booking@roldrive.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* set gradient accordingly below */}
            {/* set gradient accordingly below */}
            <div className='w-full h-[6rem] absolute -bottom-[114px] z-[1] bg-gradient-to-t from-[#05141e]'></div>
            <div className='w-full h-16 absolute -bottom-[178px] z-[-1] bg-[#05141e]'></div>

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
                    <div className='flex items-center justify-center gap-4'>
                        <div className='text-white text-xl mr-8'>Download The App</div>
                        <img
                            src='images/icons/googleplay.png'
                            alt='Google Play'
                            className='h-12'
                        />
                        <img
                            src='images/icons/appstore.png'
                            alt='App Store'
                            className='h-12 mr-4'
                        />
                        <img
                            src='images/icons/partition.png'
                            alt='Scan QR Code'
                            className='mx-auto h-24 mr-4'
                        />
                        <img
                            src='images/icons/qr.png'
                            alt='Scan QR Code'
                            className='mx-auto h-24'
                        />
                    </div>
                </div>
            </div>

            <div className='text-white' style={{ backgroundColor: "#11202D" }}>
                <div className='container mx-auto px-40 py-10'>
                    <div className='flex justify-between items-center'>
                        <div className='text-left'>
                            <div className='text-3xl font-bold mb-0'>8000+</div>
                            <p className='text-md'>Successful Bookings</p>
                        </div>
                        <div className='text-left'>
                            <h2 className='text-3xl font-bold mb-0'>500+</h2>
                            <p className='text-md'>Luxury Cars</p>
                        </div>
                        <div className='text-left'>
                            <h2 className='text-3xl font-bold mb-0'>200+</h2>
                            <p className='text-md'>Trained Chauffeurs</p>
                        </div>
                        <div className='text-left'>
                            <h2 className='text-3xl font-bold mb-0'>150+</h2>
                            <p className='text-md'>Business Partners</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-white' style={{ backgroundColor: "#081017" }}>
                <div className='container mx-auto px-40 py-10 text-center'>
                    <p className='text-xs'>How it Works</p>
                    <h2 className='text-2xl font-semibold mb-6'>
                        Book Your Chauffeur Experience in Three Simple Steps
                    </h2>
                    <div className='flex justify-between gap-4 items-center'>
                        <div className='flex flex-col items-center'>
                            <div className='p-4 rounded-lg mb-2'>
                                <img
                                    src='images/icons/booking1.png'
                                    alt='Enter Trip Details'
                                    className='h-14 w-14'
                                />
                            </div>
                            <p className='text-lg'>Enter Trip Details</p>
                            <p className='text-xs mt-1'>
                                Enter your destination, select your date and time, and explore
                                our fleet.
                            </p>
                        </div>

                        <div className='mx-4'>
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
                                    className='h-14 w-14'
                                />
                            </div>
                            <p className='text-lg'>Vehicle Of Choice</p>
                            <p className='text-xs mt-1'>
                                Choose from our extensive fleet for a vehicle that suits you
                                best.
                            </p>
                        </div>

                        <div className='mx-4'>
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
                                    className='h-14 w-14'
                                />
                            </div>
                            <p className='text-lg'>Confirm Your Ride</p>
                            <p className='text-xs mt-1'>
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
