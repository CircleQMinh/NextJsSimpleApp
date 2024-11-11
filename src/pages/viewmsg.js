import { useState, useEffect } from "react";


export default function ViewMsg() {
    const [Msgs, setMsgs] = useState([]);
    const [isLoginOk, setIsLoginOk] = useState(false)

    useEffect(() => {
        var isLoginOk = localStorage.getItem("isLoginOk")
        if(!isLoginOk){
            window.location.assign(`http://localhost:3000/login`)
        }
        else{
            setIsLoginOk(true)
        }

      fetch(`http://localhost:3000/api/getmsg`)
        .then((response) => response.json())
        .then((json) => {
          setMsgs(json.Data);
        });
    }, []);

  return (
    <> {isLoginOk && (<><div class="s-content__primary">
    <h2>Message Table</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {Msgs.map((m,i) => (
            <tr key={i}>
              <td>{m.Name}</td>
              <td>{m.Email}</td>
              <td>{m.Msg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></>)}
      
    </>
  );
}
