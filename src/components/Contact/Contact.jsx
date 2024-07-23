import './Contact.scss'

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <h1 className="sectionTitle">Contact</h1>
            <form className='contact__form'>
                <div className="formGroup">
                    <label htmlFor="name" hidden>Name</label>
                    <input type="text" name='name' id='name' placeholder='Name' required/>
                </div>
                <div className="formGroup">
                    <label htmlFor="email" hidden>Email</label>
                    <input type="email" name='email' id='email' placeholder='Email' required/>
                </div>
                <div className="formGroup">
                    <label htmlFor="message" hidden>Message</label>
                    <textarea name='message' id='message' placeholder='Message' required></textarea>
                </div>
                <input className='hover btn' type='submit' value='Submit'/>
            </form>

        </section>
    )
}