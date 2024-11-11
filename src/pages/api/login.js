export default function handler(req, res) {
    const { username, password } = req.query; 
    var data = {
        username: username,
        password: password,
    }

    if(username == "admin" && password == "123"){
        res.status(200).json(data);
    }
    else{
        res.status(500).json(data);
    }


  }