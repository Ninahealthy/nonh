import Styles from "./page.module.css";

export const metadata = {
  title: "Terms And Conditions",
  description: "Terms And Conditions",
};
export default function Terms() {
  return (
    <>
      <page className={Styles.page}>
        <h1>Terms and Conditions</h1>
        <h2>1. Introduction</h2>
        <p>
          Welcome to ninahealthy.com (the "Website"). The Website is operated by
          Nina Healthy (“us”, “we”, or “our”).<br></br> By accessing or using
          the Website, you agree to be bound by the terms and conditions set
          forth in this agreement (the "Agreement").<br></br> If you do not wish
          to be bound by this Agreement, you may not access or use the Website.
        </p>
        <h2>2. Use of the Website</h2>
        <p>
          You may use the Website solely for your own personal and
          non-commercial use.<br></br> You may not use the Website for any other
          purpose, including any commercial purpose, without our express prior
          written consent.<br></br> You may not use the Website in any manner
          that could damage, disable, overburden, or impair the Website or
          interfere with any other party's use and enjoyment of the Website.
        </p>
        <h2>3. Intellectual Property</h2>
        <p>
          The content, organization, graphics, design, compilation, magnetic
          translation, digital conversion and other matters related to the
          Website are protected under applicable copyrights, trademarks, and
          other proprietary (including but not limited to intellectual property)
          rights.
          <br></br>
          The copying, redistribution, use or publication by you of any such
          matters or any part of the Website, except as allowed by Section 2, is
          strictly prohibited.<br></br> You do not acquire ownership rights to
          any content, document or other materials viewed through the Website.
        </p>
        <h2>4. Disclaimer of Warranty</h2>
        <p>
          The Website is provided on an "AS IS," "AS AVAILABLE" basis.<br></br>{" "}
          We do not warrant that the Website will be uninterrupted or
          error-free. <br></br>There may be delays, omissions, and interruptions
          in the availability of the Website. <br></br>We do not make any
          warranties, express or implied, including, without limitation, those
          of merchantability and fitness for a particular purpose, with respect
          to the Website or any information or goods that are available or
          advertised or sold through the Website.
        </p>
        <h2>5. Limitation of Liability</h2>
        <p>
          We shall not be liable for any damages or injury resulting from your
          access to, or inability to access, the Website, or from your reliance
          on any information provided at the Website.
        </p>
        <h2>6. Indemnification</h2>
        <p>
          You agree to indemnify, defend and hold us and our partners,
          attorneys, staff and affiliates (collectively, "Affiliated Parties")
          harmless from any liability, loss, claim and expense, including
          reasonable attorney's fees, related to your violation of this
          Agreement or use of the Website.
        </p>
        {/*<h2>7. Jurisdiction and Choice of Law</h2>
        <p>
          This Agreement shall be governed by and construed in accordance with
          the laws of the state of [STATE], without giving effect to any
          principles of conflicts of law.<br></br> Any action seeking legal or
          equitable relief arising out of or relating to the Website shall be
          brought only in the courts of [STATE].
  </p>*/}
        <h2>7. Miscellaneous</h2>
        <p>
          This Agreement constitutes the entire agreement between you and us
          with respect to the use of the Website.<br></br> Our failure to insist
          upon or enforce strict performance of any provision of this Agreement
          shall not be construed as a waiver of any provision or right.{" "}
          <br></br>If any of the provisions contained in this Agreement are
          determined to be void, invalid or otherwise unenforceable by a court
          of competent jurisdiction, such determination shall not affect the
          remaining provisions contained herein.
        </p>
      </page>
    </>
  );
}
