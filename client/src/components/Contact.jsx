import { useState } from "react";
import "../styles/Contact.css"

const Contact = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value, })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }

    return (
        <>
            <div>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="registration.png" alt="trying to register" width="400px" height="400" />
                            </div>
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Contact Us</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" placeholder="Name" id="name" required autoComplete="off" value={user.name} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="text" name="email" placeholder="Email" id="email" required autoComplete="off" value={user.email} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Phone<h5>(optional)</h5></label>
                                        <input type="text" name="phone" placeholder="Phone" id="phone" required autoComplete="off" value={user.phone} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="message">Message</label>
                                        <textarea type="text" name="message" placeholder="write your message" id="message" required autoComplete="off" value={user.message} onChange={handleInput} />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Contact;