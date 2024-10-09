"use client"
import { useState } from "react"
import { BsSend } from "react-icons/bs";
import { FaRegSave } from "react-icons/fa";

import Image from "next/image";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



export default function Home() {
  const [value, setValue] = useState("")

  const toolbarOptions = [
    ['bold', 'italic', 'underline',],
    [{ 'align': '' }, { 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' }],
    ['clean']
  ];



  return (
    <div className="mx-2">

      <div className="flex border items-center justify-between p-4" >
        <h1 className="text-xl 2xl:text-2xl font-medium ">Create Email Campaign </h1>
        <button className="px-4 btn text-white btn-md 2xl:btn-lg bg-primary ">See Example</button>
      </div>

      <div className="p-3 lg:p-10 text-md 2xl:text-xl font-medium border" >
        <div className="p-5 lg:p-10 bg-base-200 rounded-lg">
          <h1 className="text-md 2xl:text-xl font-medium mb-5" >Email Recepient</h1>

          <h1>How would you like to choose your recipients?*</h1>
          <div className="pl-5">
            <div className="flex items-center gap-2 mt-2">
              <input type="radio" id="radio1" name="radio-2" className="radio  radio-primary" defaultChecked />
              <label htmlFor="radio1" >  Select from Contract list </label>
            </div>
            <div className="flex items-center gap-2 mt-2 lg:mt-4">
              <input type="radio" id="radio2" name="radio-2" className="radio radio-primary" defaultChecked />
              <label htmlFor="radio2" >  Select from attendees of my past events</label>
            </div>
          </div>

          <div>
            <h1 className="text-base my-5 space-y-3">
              <h1>Contact list to send to </h1>
              <div className="flex flex-col md:flex-row gap-4 lg:gap-8 items-center ">
                <input className="input w-full bg-transparent md:flex-1  input-md 2xl:input-lg input-bordered" placeholder="Select Contack list " type="text" />
                <button className="px-4 md:w-auto w-full btn btn-md 2xl:btn-lg text-white bg-primary "><span className="text-3xl">+</span> Create New Text</button>
              </div>
            </h1>
          </div>




        </div>

        <div className="p-5 lg:p-10 mt-10 bg-base-200 space-y-7 rounded-lg">
          <h1 className="text-xl font-medium mb-5" >Email Content</h1>


          <div className="text-base  space-y-2">
            <h1>Sender's Name<span className="text-red-500">*</span> </h1>
            <input className="input bg-transparent w-full flex-1  input-md 2xl:input-lg input-bordered" placeholder=" e.g. Amitosht Gain" type="text" />

          </div>
          <div className="text-base  space-y-2">
            <h1>Reply-to email
              <span className="text-red-500">*</span> </h1>
            <input className="input bg-transparent w-full flex-1  input-md 2xl:input-lg input-bordered" placeholder="amitosh@bdrn.net.bd" type="text" />
            <h1>You will receive replies at this email address.</h1>

          </div>
          <div className="text-base  space-y-2">
            <h1> Email Subject
              <span className="text-red-500">*</span> </h1>
            <input className="input bg-transparent w-full flex-1  input-md 2xl:input-lg input-bordered" placeholder=" e.g. Invitation to register for APAN53 - Bangladesh, 7th-11th March 2022" type="text" />

          </div>

          <div className="text-base  space-y-2">
            <h1> Description (Optional) </h1>
            <ReactQuill modules={{
              toolbar: toolbarOptions
            }} theme="snow" className="custom-quill-editor" onChange={setValue} />
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <div className="text-base flex-1  space-y-2">
              <h1>  Registration button label

                <span className="text-red-500">*</span> </h1>
              <input className="input bg-transparent w-full flex-1  input-md 2xl:input-lg input-bordered" placeholder="Register" type="text" />

            </div>
            <div className="text-base flex-1 space-y-2">
              <h1>  Registration button links to
                <span className="text-red-500">*</span> </h1>
              <select className="select select-bordered bg-transparent w-full select-md 2xl:select-lg" name="" id="">
                <option value=" Basic Register Page"> Basic Register Page
                </option>
                <option value=" Basic Register Page"> Basic Register Page
                </option>
                <option value=" Basic Register Page"> Basic Register Page
                </option>
                <option value=" Basic Register Page"> Basic Register Page
                </option>
              </select>

            </div>
          </div>

          <div>
            <h1> Track registration button conversion (optional) </h1>
            <p className="text-sm lg:text-base  font-normal">
              measures visitors and ticket sales generated from registration pages. <br className="hidden lg:block" />For your selected registration page,
              pick an existing tracking link or create a new one specific to this campaign.
            </p>
            <div>
              <h1 className="text-base my-5 space-y-3">
                <h1>Contact list to send to </h1>
                <div className="flex flex-col md:flex-row gap-4 lg:gap-8 items-center ">
                  <input className="input w-full bg-transparent md:flex-1  input-md 2xl:input-lg input-bordered" placeholder=" There are no tracking links available for selected registration page
" type="text" />
                  <button className="px-4 btn md:w-auto w-full btn-md 2xl:btn-lg text-white bg-primary "><span className="text-3xl">+</span>  Create new Tracking Lisk</button>
                </div>
              </h1>
            </div>
          </div>


        </div>


        <div>

          <div className="flex flex-col md:flex-row gap-4 lg:gap-8 items-center my-8 ">
            <div className="md:flex-1">
              <button className="px-4  btn btn-md 2xl:btn-lg btn-outline text-primary "> Send Text Email</button>
            </div>
            <div className="space-x-5">
              <button className="px-8 btn btn-md 2xl:btn-lg text-white bg-primary "><span className="text-3xl"><BsSend />
              </span>  Send</button>
              <button className="px-8 btn btn-md 2xl:btn-lg text-white bg-primary "><span className="text-3xl"><FaRegSave />
              </span>  Save Draft</button>
            </div>
          </div>

        </div>



      </div>
    </div>
  );
}
