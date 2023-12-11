import { useState } from "react";
import SectionTitle from "./../../components/ui/SectionTitle/SectionTitle";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  console.log(name, email, message);
  const handleSubmit = (e) => {
    e.preventDefault();

    // You email service id, template id, public key
    const serviceId = "service_kc46yhk";
    const templateId = "template_ciqd3ji";
    const publicKey = "FiB_IkbuhKKe4K17T";
    setName(""), setEmail(""), setMessage("");
    // create a new object contains dynamic template params
    const templateParams = {
      from_name: name,
      email: email,
      to_Name: "Bayazid",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Email sent successfully!");
          setName(""), setEmail(""), setMessage("");
        }
      })
      .catch((err) => console.error("Error sending email:", err));
  };
  return (
    <div className="md:px-20 px-0">
      <SectionTitle firstWord="Contact" lastWord="Me" />
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white">Contact me here</h2>
          <div>
            <div>
              <div className="flex justify-between items-center">
                <p>Location</p> <p>: Moulvibazar, Sylhet, BD</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Email</p> <p>: brcshakil72@gmail.com</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Mobile</p> <p>: +8801634264626</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Languages</p> <p>: Bangla, English</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                className="textarea textarea-bordered"
                placeholder="message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
