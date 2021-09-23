
import Button from './Button';

const ContactForm = () => {

    return (
    <form name="contact" method="post" className="card" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="form-name" value="contact"></input>
      <p className="hidden">
        <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
      </p>
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" />
      <label htmlFor="venue">Venue:</label>
      <input type="text" name="venue" />
      <label htmlFor="date">Performance Date:</label>
      <input type="date" name="date" />

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" />
      <Button className="btn" type="submit" text="Submit" />
    </form>
    )
}

export default ContactForm
