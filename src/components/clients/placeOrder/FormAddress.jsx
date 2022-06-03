import React from 'react'

const FormAddress = () => {
  return (
    <form>
    <div className="flex md:flex-row flex-col mb-4 items-center w-full gap-2">
      <label
        htmlFor="firstName"
        className="text-normal md:text-right text-left md:w-32 w-full"
      >
        First Name:{" "}
      </label>
      <input
        type="text"
        className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
        placeholder="First Name"
      />
    </div>
    <div className="flex md:flex-row flex-col mb-4 items-center w-full gap-2">
      <label
        htmlFor="lastName"
        className="text-normal md:text-right text-left md:w-32 w-full"
      >
        Last Name:{" "}
      </label>
      <input
        type="text"
        className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
        placeholder="Last Name"
      />
    </div>
    <div className="flex md:flex-row flex-col mb-4 items-center w-full gap-2">
      <label
        htmlFor="country"
        className="text-normal md:text-right text-left md:w-32 w-full"
      >
        Country/Region:{" "}
      </label>
      <input
        type="text"
        className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
        placeholder="Morocco"
      />
    </div>
    <div className="flex md:flex-row flex-col mb-4 items-center w-full gap-2">
      <label
        htmlFor="city"
        className="text-normal md:text-right text-left md:w-32 w-full"
      >
        City:{" "}
      </label>
      <input
        type="text"
        className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
        placeholder="Casablanca"
      />
    </div>
    <div className="flex md:flex-row flex-col mb-4 items-center w-full gap-2">
      <label
        htmlFor="Address"
        className="text-normal md:text-right text-left md:w-32 w-full"
      >
        Address:
      </label>
      <input
        type="text"
        className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
        placeholder="Street address, company name, P.O. box, c/o, etc"
      />
    </div>
    <div className="flex md:flex-row flex-col mb-4 items-center w-full gap-2">
      <label
        htmlFor="Address"
        className="text-normal md:text-right text-left md:w-32 w-full"
      >
        phone Number:
      </label>
      <input
        type="tel"
        className="md:w-3/4 w-full py-2 px-3 border focus:outline-none rounded"
        placeholder="+21260-000 0000"
      />
    </div>

    <div className="flex my-4 items-center w-full gap-2">
      <label
        htmlFor="Address"
        className="text-normal md:text-right text-left md:w-32 w-full"
      ></label>
      <button
        type="submit"
        className="px-7 py-2 text-gray-100 text-xl bg-blue-600 rounded-lg "
      >
        Save
      </button>
    </div>
  </form>
  )
}

export default FormAddress