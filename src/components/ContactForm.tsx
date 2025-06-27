function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input name="bot-field" className="hidden" />
      <div>
        <label htmlFor="email">Din email </label>
        <input type="text" name="email" />
      </div>

      <div>
        <label htmlFor="subject">Emne </label>
        <input type="text" name="subject" />
      </div>
      <div>
        <label htmlFor="bodyText">Hvad vil du gerne spørge om?</label>
        <textarea name="bodyText"></textarea>
      </div>

      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
