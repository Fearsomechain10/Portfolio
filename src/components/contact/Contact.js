import React from "react";


const Contact = () => {
  return (
    <div id="contact" className=" flex gap-[50px] px-20 py-20  ">
    
      <div className="flex-1 flex flex-col gap-10 gap-5  justify-center">
        <h1 className="text-[100px] font-titleFont leading-[88px] text-4xl">Let's work together</h1>
        <div>
          <h2 >Mail</h2>
          <span className="font-light">sarkararunava00@gmail.com</span>
        </div>
        <div>
          <h2>Phone</h2>
          <span className="font-light">+91- 9800568010</span>
        </div>
        <div >
          <button className="h-16 w-3/5 bg-gradient-to-r from-[#111111] via-[#4d1515] to-[#421238] hover:-translate-y-1 cursor-pointer font-medium">Resume</button>
        </div>
      </div>
      <div className="w-1/2 p-[50px] ">
        <form className="h-96 flex flex-col gap-2">
          <input className="bg-transparent border text-[white] p-3 p-2.5 rounded-[5px] border-solid border-[white]" type="text" required placeholder="Name" name="name" />
          <input className="bg-transparent border text-[white] p-3 p-2.5 rounded-[5px] border-solid border-[white]" type="email" required placeholder="Email" name="email" />
          <textarea className="bg-transparent border text-[white] p-3 p-2.5 rounded-[5px] border-solid border-[white]" rows={8} placeholder="Message" name="message" />
          <button className="bg-cyan-900 bg-gradient-to-r from-[#000428] via-[#003c70] to-[#000428] cursor-pointer font-medium p-5 p-2.5 border-[none] ">Submit</button>
        </form>
      </div>
    
    </div>
  );
};

export default Contact;

{
  /* <section
      id="contact"
      className="w-full h-full py-20 border-b-[1px] border-b-gray-600"
    >
      <div>
        <Title title="Contact" />
      </div>
    </section> */
}
