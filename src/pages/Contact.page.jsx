import { useRef } from "react";
import Container from "../components/UI/Container";
import toaster from "../helpers/toaster";
import styles from "./Contact.module.css";

const Contact = () => {
  const formRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const data = {
      name,
      email,
      message,
    };

    console.log(data);
    toaster.success("Message sent successfully, we will contact you soon!");
    formRef.current.reset();
  };

  return (
    <Container>
      <section className={styles.contactContainer}>
        <div>
          <h1 className={styles.contactTitle}>Get in touch with us</h1>
          <p className={styles.contactText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, quod, quos, quae voluptas dignissimos quia doloribus
            aspernatur doloremque quibusdam repudiandae dolorem? Voluptatum
            voluptates, quidem quas quae voluptate doloremque quia.
          </p>
        </div>

        <form
          className={styles.contactForm}
          onSubmit={handleFormSubmit}
          ref={formRef}
        >
          <div className={styles.contactFormInputContainer}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className={styles.contactFormInputContainer}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.contactFormInputContainer}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Enter yout message..."
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </form>
      </section>
    </Container>
  );
};

export default Contact;
