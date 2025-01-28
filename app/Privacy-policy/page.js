import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy",
};

export default function Privacy() {
  return (
    <>
      <article>
        <h1>Privacy Policy</h1>
        <p>
          At ninahealthy.com, we respect and are committed to protecting your
          privacy. <br></br>This privacy policy applies to the information that
          we collect when you use our website, as well as any other information
          that we may collect in connection with your use of our services.
        </p>
        <h2>Information We Collect</h2>

        <p>
          We collect information from you when you use our website, such as your
          IP address, browser type, and operating system. <br></br>
          <br></br>We also collect information about your interactions with our
          website, such as the pages you visit and the links you click on.
          <br></br> <br></br>We may also collect personal information from you,
          such as your name and email address, when you register for an account
          or subscribe to our newsletter.
        </p>
        <h2>Use of Your Information</h2>
        <p>
          We use the information we collect to provide you with the services you
          request, to improve our website and services, and to send you
          promotional materials.<br></br> We may also use your information to
          contact you with important information about your account or our
          services.
        </p>
        <h2>Sharing Your Information</h2>
        <p>
          We do not share your information with third parties, except as
          necessary to provide you with the services you request or as required
          by law.
          <br></br> We may also share your information with our affiliates and
          partners for promotional or marketing purposes.
        </p>
        <h2>Security</h2>
        <p>
          We take the security of your information seriously and take
          appropriate measures to protect your information from unauthorized
          access, disclosure, alteration, or destruction.
        </p>
        <h2>Changes to this Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time.<br></br> We will
          notify you of any changes by posting the new privacy policy on our
          website.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this privacy policy,
          please{" "}
          <Link href="/Contact">
            <strong>
              <em>contact us</em>
            </strong>
          </Link>
        </p>
      </article>
    </>
  );
}
