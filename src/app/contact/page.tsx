export default function ContactPage() {
  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Contact Us</h1>
      <p>
        If you have any questions or want to work with us, feel free to reach out.
      </p>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        <label>
          Name:
          <input
            type="text"
            placeholder="Your name"
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            placeholder="your@email.com"
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
          />
        </label>

        <label>
          Message:
          <textarea
            placeholder="Your message..."
            rows={5}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
          ></textarea>
        </label>

        <button
          type="submit"
          style={{
            padding: "0.7rem",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginTop: "1rem",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
