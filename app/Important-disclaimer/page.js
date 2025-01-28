import Link from "next/link";

export const metadata = {
  title: "Important Disclaimer | Transparency & Compliance",
  description:
    "Comprehensive disclaimer outlining affiliate relationships, AI content generation, intellectual property, and external link policies for NinaHealthy.com",
};

export default function Important() {
  return (
    <article>
      <h1>Important Disclaimer</h1>

      <h2>Affiliate Disclosure</h2>
      <p>
        NinaHealthy.com participates in various affiliate marketing programs.
        This means we may earn commissions (
        <strong>at no additional cost to you</strong>) if you purchase products
        or services through links on our website. These partnerships help fund
        our operations but
        <strong>
          do not influence our editorial content, reviews, or recommendations
        </strong>
        . We prioritize transparency and only promote products we believe in.
      </p>

      <h2>Content Generation & AI Disclosure</h2>
      <p>
        Portions of our content are created or enhanced using artificial
        intelligence (AI) tools.
        <strong>
          {" "}
          All AI-generated material is rigorously reviewed, edited, and
          validated by our human editorial team{" "}
        </strong>
        to ensure accuracy and relevance to maintain high editorial standards.
      </p>

      <h2>Intellectual Property & Trademarks</h2>
      <p>
        All trademarks, logos, service marks, and company names mentioned on
        NinaHealthy.com are the property of their respective owners.{" "}
        <strong>
          Use of these names does not imply endorsement, sponsorship, or
          affiliation{" "}
        </strong>
        unless explicitly stated. All references to third-party brands,
        products, or services are for{" "}
        <strong>identification purposes only</strong>.
      </p>

      <h2>General Information Disclaimer</h2>
      <section>
        The content on NinaHealthy.com is
        <strong> for informational purposes only </strong>
        and is not a substitute for professional medical, nutritional, or
        financial advice. Always consult qualified experts before making
        health-related decisions. While we strive for accuracy, we make no
        guarantees regarding the completeness, reliability, or timeliness of the
        information provided.
        <ul>
          <li>Text, graphics, images, and data</li>
          <li>AI-assisted or human-created articles</li>
          <li>User-generated comments or reviews</li>
        </ul>
      </section>

      <h2>External Links & Third-Party Sites</h2>
      <section>
        Our website contains links to external sites for your convenience.
        <br />
        <strong> We do not : </strong>
        <ul>
          <li>
            Control the content, privacy policies, or practices of these sites
          </li>
          <li>
            Guarantee the accuracy, legality, or ethics of external content
          </li>
          <li>
            Assume responsibility for damages caused by visiting linked sites
          </li>
        </ul>{" "}
      </section>

      <p>
        <strong>Proceed with caution:</strong> Links may become outdated or
        redirect to "bad" content before we can remove them. Always review the
        <strong> Privacy Policy</strong> and <strong>Terms of Service </strong>
        of any third-party site before sharing personal data or engaging in
        transactions.
      </p>

      <h2>Limitation of Liability</h2>
      <section>
        NinaHealthy.com and its contributors are <strong>not liable</strong>{" "}
        for:
        <ul>
          <li>Errors, omissions, or inaccuracies in content</li>
          <li>
            Damages (direct, indirect, or consequential) arising from website
            use
          </li>
          <li>Actions taken based on information provided on this site</li>
        </ul>
      </section>

      <h2>Updates & Amendments</h2>
      <p>
        This disclaimer may be revised without prior notice. Continued use of
        NinaHealthy.com constitutes acceptance of changes. For questions or
        concerns, please
        <Link href="/Contact">
          {" "}
          <strong>contact us</strong>
        </Link>
        .<br />
        <strong>Last Updated:</strong> 1/26/2025
      </p>

      <p>
        <strong>Legal Note:</strong> This disclaimer is not legal advice.
        Consult a legal professional to ensure compliance with FTC regulations,
        GDPR, and other applicable laws.
      </p>
    </article>
  );
}
