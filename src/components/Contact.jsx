import React, {useState} from "react";
import { contacts } from "../Data";
import axios from 'axios'
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmitData = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('budget', budget);
    formData.append('description', description);
    
    let url = 'http://127.0.0.1:8000/api/add-contact-info';
    const request = await axios.post(url, formData);

    if(request.data.status === 200) {
      setName('');
      setEmail('');
      setBudget('');
      setDescription('');

      const innerSubmit = document.getElementById('submit');
      innerSubmit.innerHTML = "sent";
    }
  }
  return (
    <div className="container mx-auto mb-7 px-6" id="contact">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Contact</h2>
        <div className="w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>
      <div className="shadow-lg p-4 max-w-[900px] mx-auto">
        <div className="grid gap-8 sm:grid-cols-3">
          {contacts.map((contact) => {
            const { id, icon, text } = contact;
            return (
              <div className="flex gap-2 items-center flex-col" key={id}>
                <div className="text-blue text-xl">{icon}</div>
                <div className="text-[0.9rem] opacity-80">{text}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex  gap-12 flex-wrap justify-center">
          <div>
            <div className="mb-5">
              <input
                type="text"
                className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem]"
                placeholder="Name"
                name='name'
                value={name}
                onChange={(e)=> setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem]"
                placeholder="Email"
                name='email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem]"
                placeholder="Budget"
                name='budget'
                value={budget}
                onChange={(e)=> setBudget(e.target.value)}
              />
            </div>
          </div>
          <div>
            <textarea
              placeholder="Project Description"
              className="outline-none bg-transparent border border-solid border-blue resize-none text-[0.9rem] p-2 h-40 w-80"
              name='description'
              value={description}
              onChange={(e)=> setDescription(e.target.value)}
            ></textarea>
            <div className="mt-2 text-center">
              <button type="submit" id='submit' onClick={handleSubmitData} className="text-[0.9rem] text-white bg-red-400 p-2">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
