import { type FormEvent } from "react";
import { Button } from "./Button";
import "./ContactForm.css";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const subject = String(form.get("subject") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const body = ["Name: " + name, "Email: " + email, "", message].join("\n");

    window.location.href =
      "mailto:contact@PMForge.ai" +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
  }

  return (
    <div className="contact-grid">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="contact-subject">Subject</label>
          <input id="contact-subject" name="subject" type="text" required />
        </div>
        <div className="form-field">
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" required />
        </div>
        <Button type="submit" variant="primary">
          Send Message →
        </Button>
      </form>

      <aside className="contact-aside">
        <h3>Prefer email?</h3>
        <p>
          You can also reach PMForge directly. Include context on your project, timeline,
          or what you are trying to build.
        </p>
        <a className="contact-email" href="mailto:contact@PMForge.ai">
          contact@PMForge.ai
        </a>
        <Button href="mailto:contact@PMForge.ai">Open in Email App →</Button>
      </aside>
    </div>
  );
}
