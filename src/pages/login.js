import { useState } from "react";
export default function Login(){
    const [isLoginOk, setIsLoginOk] = useState(false)
    const [username, setusername] = useState("");
    var handleChangeUserName = (e) => {
        setusername(e.target.value);
    };

    const [password, setpassword] = useState("");
    var handleChangePassword= (e) => {
        setpassword(e.target.value);
    };

    if(isLoginOk){
        localStorage.setItem("isLoginOk",true)
        window.location.assign(`http://localhost:3000/viewmsg`)
    }

    function submit(){
        fetch(`http://localhost:3000/api/login?username=${username}&password=${password}`, {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }).then((response) => {
            if (!response.ok) {
                setIsLoginOk(false)
                alert("Login Failed")
            } else {
                alert("Login Ok")
                setIsLoginOk(true)
              return response.json();
            }
          }).then((data) => {
          })
    }

    return <>
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
              placeholder="Username"
              value={username}
              onChange={handleChangeUserName}
            />
          </div>

          <div class="form-field">
            <input
              name="cEmail"
              type="password"
              id="cEmail"
              class="h-full-width"
              placeholder="Your password"
              value={password}
              onChange={handleChangePassword}
            />
          </div>


          <button
            type="button"
            class="submit btn btn--primary btn--medium h-full-width"
            onClick={()=>{submit()}}
          >
            Login
          </button>
        </fieldset>
      </form>
    </div>
    <script src="/js/jquery-3.2.1.min.js"></script>
   <script src="/js/plugins.js"></script>
   <script src="/js/main.js"></script>
    
    </>
}