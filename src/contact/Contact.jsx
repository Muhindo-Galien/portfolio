import './contact.scss'
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useAlert } from 'react-alert'

export const Contact = () => {
    const formRef = useRef();
    const alert = useAlert()

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_6tyfaim",
            "template_fb05o4a",
            formRef.current,
            "MITAFTktEbzOpOAyi"
          )
          .then(
            (result) => {
              console.log(result.text);
              window.location.reload()
              alert.success("Message sent successfully!")
            },
            (error) => {
              console.log(error.text);
            }
          );
      };
    return (
        <div className="contact" id="contact">
            <div class="wrapper">
  <form ref={formRef} onSubmit={handleSubmit}>
    <div class="field">
      <input type="text" id="name" name="user_name" placeholder="Who are you?" autofocus/>
      <label for="name">Name</label>
    </div>
    <div class="field">
      <input type="text" id="subject" name="user_subject" placeholder="subject" autofocus/>
      <label for="name">Subject</label>
    </div>
    <div class="field">
      <input type="text" id="email" name="user_email" placeholder="name@gmail.com" />
      <label for="email">E-Mail</label>
    </div>
    <div class="field">
      <textarea id="msg" rows="4" name="message" placeholder="Your message..."></textarea>
      <label for="msg">Message</label>
    </div>
    <input class="button" type="submit" value="Send"  style={{color:"white"}}/>
  </form>

</div>
    </div>
    )
}
