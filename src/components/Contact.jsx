
import "../style/Contact.scss"
const Contact = ()=>{
    return(
        <div className="contact">
            <div className="">

                <h1>Contact Us</h1>

                <div className="form-container">
                    <form className="form">
                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text" required placeholder="Abc" />
                        </div>

                        <div>
                            <label htmlFor="">Email</label>
                            <input type="email" required placeholder="abc@mail.com" />
                        </div>

                        <div>
                            <label htmlFor="">Message</label>
                            <input className="message" type="text" required placeholder="Type your message" />
                        </div>

                        <button type="submit">Send</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Contact;