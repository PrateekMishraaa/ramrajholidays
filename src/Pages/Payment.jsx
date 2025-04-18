import React from 'react';
import Navbar from '../Components/Navbar';
import Rammandir from '../assets/mandir.webp';
import Paymentt from '../assets/Payment.webp';
import Footer from '../Components/Footer';

const Payment = () => {
  return (
    <>
      <Navbar />

      {/* Header Section */}
      <section className="relative h-60 md:h-64 lg:h-80 w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Rammandir})` }}
        >
          <div className="h-full w-full bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4 text-center ">
            <h1 className="text-4xl md:text-4xl font-bold font-serif text-orange-400">
              Payment <span className="text-white">Details</span>
            </h1>
            <div className="h-1 w-24 bg-orange-500 my-4 rounded-full"></div>
            <p className="text-lg font-medium mb-2">
              Explore Ramayana Trail With Us
            </p>
            <p className="text-sm">
              <span className="text-white">Home</span>{' '}
              <span className="mx-1">›</span>{' '}
              <span className="text-orange-400">Payment</span>
            </p>
          </div>
        </div>
      </section>

      {/* Payment Notice & Details */}
      <section className="w-full py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Notice */}
          <div className="text-center mb-10">
            <p className="text-orange-500 font-semibold text-lg">-: IMPORTANT NOTICE :-</p>
            <p className="text-gray-700 mt-4 text-sm md:text-base max-w-4xl mx-auto">
              Payments should only be made using the official account number and scanner provided
              above. We do not accept cash deposits or physical payments in any form. The company
              is not responsible for any payments made to other accounts, other scanners, or any
              cash given to individuals. Please ensure all payments are directed through the
              official account and scanner only.
            </p>
          </div>

          {/* Payment Details + QR Image */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Details */}
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Details</h2>
              <p className="font-bold text-orange-500">
                Account Holder Name:{' '}
                <span className="text-orange-400">RamRaj HOLIDAYS PRIVATE LIMITED</span>
              </p>
              <p className="font-bold text-orange-500">
                BANK NAME: <span className="text-orange-400">HDFC BANK</span>
              </p>
              <p className="font-bold text-orange-500">
                ACCOUNT NUMBER: <span className="text-orange-400">50200094123875</span>
              </p>
              <p className="font-bold text-orange-500">
                IFSC CODE: <span className="text-orange-400">HDFC0000249</span>
              </p>
              <p className="font-bold text-orange-500">
                BRANCH:{' '}
                <span className="text-orange-400">
                  AGGARWAL CENTRAL PLAZA, PLOT NO 11, SECTOR 5 DWARKA, NEW DELHI 110075
                </span>
              </p>
            </div>

            {/* Right QR Image */}
            <div className="md:w-1/2">
              <img
                src={Paymentt}
                alt="Payment QR Code"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Payment;
