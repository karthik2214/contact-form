import React, { useState } from 'react'
 
const Contact = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const getUserData = (event) => {
       let name, value;
        name = event.target.name;
        value = event.target.value;

        setUser({...user, [name]: value });
    }

    const {name,
          email,
          phone,
          message
        } = user

    const postData = async(e) => {
        e.preventDefault();

        if (name && email && phone && message) {
            
        const res = await fetch(process.env.REACT_APP_API_KEY,
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                message
            })
        }
        )
        if(res){
            setUser({
                name: "",
                email: "",
                phone: "",
                message: ""
            });
        alert("Form submitted")
        }
        } else {
            alert("Please fill all the data!")
        }
    }

    return (
        <>
            <div className="wrapper">
    <header>Send us a Message</header>
    <form className="form" method="POST">
      <div className="dbl-field">
        <div className="field">
          <input type="text" name="name" placeholder="Enter your name" value={user.name} onChange={getUserData} />
          <i className='fas fa-user'></i>
        </div>
        <div className="field">
          <input type="text" name="email" placeholder="Enter your email" value={user.email} onChange={getUserData} />
          <i className='fas fa-envelope'></i>
        </div>
      </div>
      <div className="dbl-field">
        <div className="field">
          <input type="text" name="phone" placeholder="Enter your phone" value={user.phone} onChange={getUserData} />
          <i className='fas fa-phone-alt'></i>
        </div>
      </div>
      <div className="message">
        <textarea placeholder="Write your message" name="message" value={user.message} onChange={getUserData} ></textarea>
        <i className="far fa-comment-dots"></i>
      </div>
      <div className="button-area">
        <button type="submit" onClick={postData}>Submit</button>
        <span></span>
      </div>
    </form>
  </div>

        </>
    )
}

export default Contact
