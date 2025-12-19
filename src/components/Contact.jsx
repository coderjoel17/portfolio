const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="text-gray-600 mb-8">
          Feel free to reach out for opportunities or collaborations.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:joeljackiesmith@gmail.com"
            className="hover:underline"
          >
            Email
          </a>
          <a
            href="https://github.com/coderjoel17"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joel-smith-7270b2206/"
            target="_blank"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
