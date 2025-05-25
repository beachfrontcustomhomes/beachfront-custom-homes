import React from "react";
import { Helmet } from "react-helmet";

const PageHero = ({ image, title }) => (
  <div className="relative w-full h-[80vh] overflow-hidden">
    <img
      src={image}
      alt={title}
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
      <h1 className="text-white text-4xl md:text-6xl font-bold">{title}</h1>
    </div>
  </div>
);

const Contact = () => (
  <>
  <Helmet>
      <title>Contact | Beachfront Custom Homes</title>
      <meta
        name="description"
        content="Ready to start your dream home project? Contact Beachfront Custom Homes for luxury custom home building in Southwest Florida."
      />
    </Helmet>
    <PageHero image="/contact.jpg" title="Contact Us" />
    <section className="p-8 max-w-3xl mx-auto text-center text-gray-800">
      <h2 className="text-3xl font-bold mb-4">Let's Talk</h2>
      <p className="mb-6 text-lg">We’d love to learn about your vision and how we can help bring it to life.</p>
      <form
  action="https://formsubmit.co/info@beachfrontcustomhomes.com"
  method="POST"
  className="grid gap-4"
>
  {/* FormSubmit settings */}
  <input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_next" value="https://www.beachfrontcustomhomes.com/thankyou" />

  {/* Form fields */}
  <input type="text" name="name" placeholder="Your Name" required className="p-3 border rounded" />
  <input type="email" name="email" placeholder="Email Address" required className="p-3 border rounded" />
  <textarea name="message" placeholder="Tell us about your project..." rows="5" required className="p-3 border rounded" />

  <button type="submit" className="bg-black text-white px-6 py-3 rounded shadow hover:bg-gray-800 transition">
    Send Message
  </button>
</form>

    </section>
  </>
);

export default Contact;



