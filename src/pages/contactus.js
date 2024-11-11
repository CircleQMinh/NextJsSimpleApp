import Head from "next/head";
import { useState } from "react";
export default function ContactUs() {
    const [name, setname] = useState("");
    var handleChangeName = (e) => {
      setname(e.target.value);
    };

    const [email, setemail] = useState("");
    var handleChangeEmail = (e) => {
      setemail(e.target.value);
    };

    const [msg, setmsg] = useState("");
    var handleChangeMsg = (e) => {
        setmsg(e.target.value);
    };

    function submit(){
        if(name && msg && isValidEmail(email)){
            fetch(`http://localhost:3000/api/savemsg?name=${name}&email=${email}&msg=${msg}`, {
                method: "POST",
                body: JSON.stringify({
                  name: name,
                  email: email,
                  msg: msg,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              }).finally(()=>{
                  setemail("")
                  setmsg("")
                  setname("")
                  alert("Submit OK")
              });
        }
        else{
            alert("Form not OK")
        }

    }
    function isValidEmail(val) {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(val)) {
          return false;
        }
        return true
      }
  return (
    <>
    <div class="s-content__primary">
    <form
        name="cForm"
        id="cForm"
        class="s-content__form"
      >
        <fieldset>
          <div class="form-field">
            <input
              name="cName"
              type="text"
              id="cName"
              class="h-full-width"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeName}
            />
          </div>

          <div class="form-field">
            <input
              name="cEmail"
              type="email"
              id="cEmail"
              class="h-full-width"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeEmail}
            />
          </div>

          <div class="message form-field">
            <textarea
              name="cMessage"
              id="cMessage"
              class="h-full-width"
              placeholder="Your Message"
              value={msg}
              onChange={handleChangeMsg}
            ></textarea>
          </div>

          <button
            type="button"
            class="submit btn btn--primary btn--medium h-full-width"
            onClick={()=>{submit()}}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
    <script src="/js/jquery-3.2.1.min.js"></script>
   <script src="/js/plugins.js"></script>
   <script src="/js/main.js"></script>
    </>
  );
}
