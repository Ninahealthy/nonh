import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Your Data Security & Rights",
  description:
    "Comprehensive privacy policy for NinaHealthy.com detailing data collection, usage, protection measures, and your rights under GDPR, CCPA, and other privacy regulations",
};

export default function Important() {
  return (
    <article>
      <h1>Privacy Policy</h1>

      <h2>Your Privacy Matters</h2>
      <p>
        At NinaHealthy.com, we prioritize your privacy and are committed to
        safeguarding your personal data. This policy outlines how we collect,
        use, and protect your information, empowering you to make informed
        choices.
      </p>

      <h2>1. Scope</h2>
      <p>
        This policy applies to all data collected through NinaHealthy.com,
        including interactions with our website, services, products, and
        customer support.
      </p>

      <h2>2. Information We Collect</h2>
      <section>
        <h3>A. Personal Data</h3>
        Provided voluntarily when you:
        <ul>
          <li>- Create an account or place an order</li>
          <li>- Subscribe to newsletters or contact us</li>
          <li>- Participate in surveys or promotions</li>
        </ul>
        <em>Examples:</em> Name, email, shipping address, payment details.
        <br />
        <h3>B. Non-Personal Data</h3>
        Automatically collected via cookies and analytics tools:
        <ul>
          <li>- Device information (IP address, browser type)</li>
          <li>- Usage patterns (pages visited, session duration)</li>
          <li>- Aggregated demographic data</li>
        </ul>
      </section>

      <h2>3. How We Use Your Data</h2>

      <section>
        We process your information responsibly to:
        <ul>
          <li>- Fulfill orders and deliver services</li>
          <li>- Personalize content and recommendations</li>
          <li>- Improve website functionality</li>
          <li>- Send marketing communications (with consent)</li>
          <li>- Ensure security and prevent fraud</li>
        </ul>
      </section>

      <h2>4. Data Sharing & Third Parties</h2>

      <section>
        We <strong>do not sell</strong> your personal data. Limited sharing
        occurs only with:
        <ul>
          <li>
            - Trusted Service Providers bound by confidentiality agreements
          </li>
          <li>- Legal compliance requirements</li>
          <li>- Business transfers during mergers/acquisitions</li>
        </ul>
      </section>

      <h2>5. Your Rights & Choices</h2>

      <section>
        You have the right to:
        <ul>
          <li>- Access, correct, or delete your data</li>
          <li>- Opt out of marketing emails</li>
          <li>- Withdraw consent</li>
          <li>- Request data portability</li>
        </ul>
        Submit requests via{" "}
        <Link href="/Contact">
          <strong>contact form</strong>
        </Link>{" "}
        or email [contact@ninahealthy.com].
      </section>

      <h2>6. Security Measures</h2>

      <section>
        We employ industry-standard protocols including:
        <ul>
          <li>- SSL encryption</li>
          <li>- Regular security audits</li>
          <li>- Access controls</li>
        </ul>
        <em>Note:</em> While we strive for protection, no digital platform is
        100% secure.
      </section>

      <h2>7. Children’s Privacy</h2>
      <p>
        Our services are not intended for users under <strong>16</strong>.
        Contact us immediately if a minor has provided information without
        consent. <br />
        For questions or concerns:
        <br />
        Email: contact@ninahealthy.com
        <br />
        <em>Last Updated: 1/31/2025</em>
      </p>

      <p>
        🔒 <strong>Compliance:</strong> GDPR | CCPA | TrustArc | We Do Not Sell
        Your Info
      </p>
    </article>
  );
}
