import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | ShareLogic",
  description: "ShareLogic Ltd privacy policy — how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: October 2023</p>

          <div className="mt-12 max-w-none space-y-6 text-base leading-relaxed text-slate-600 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-slate-900 [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-900 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_li]:text-slate-600 [&_a]:text-[#2750F5] [&_a]:underline [&_strong]:font-semibold [&_strong]:text-slate-800">

            {/* Terms */}
            <h2>Terms</h2>
            <p>
              ShareLogic Ltd states that website information is for information purposes only and is subject to change
              without notice. The company disclaims warranties regarding reliability or accuracy of published content.
            </p>
            <p>
              The organisation accepts no liability for losses from reliance on website information. Content
              redistribution is prohibited. The company provides no warranties regarding website errors, defects, or
              malware. External links are informational only, and link presence does not constitute endorsement.
            </p>

            {/* Purpose */}
            <h2>Privacy Policy</h2>
            <h3>Purpose</h3>
            <p>
              ShareLogic respects privacy and protects personal data collected through website visits and business
              contacts. This policy applies to data collection methods and explains your privacy rights under applicable
              law. This website is not intended for children.
            </p>

            {/* Controller */}
            <h3>Controller &amp; Contact Information</h3>
            <p>
              <strong>ShareLogic Ltd</strong> acts as data controller under UK GDPR and the Data Protection Act 2018.
            </p>
            <ul>
              <li>Email: <a href="mailto:info@sharelogic.com">info@sharelogic.com</a></li>
              <li>Address: ShareLogic, The Blade, Abbey Square, Reading, RG1 3BE</li>
              <li>Phone: +44 (0) 333 444 1337</li>
            </ul>

            {/* Data Collection */}
            <h3>Data Collection</h3>
            <p><strong>Types collected:</strong></p>
            <ul>
              <li><strong>Identity Data:</strong> Names, usernames, titles, job titles</li>
              <li><strong>Contact Data:</strong> Emails, addresses, phone numbers</li>
              <li><strong>Technical Data:</strong> IP addresses, browser information, device data</li>
            </ul>
            <p><strong>Collection methods:</strong></p>
            <ul>
              <li>Direct interactions (forms, email, phone)</li>
              <li>Automated technologies (cookies, server logs)</li>
              <li>Third-party sources (analytics providers, advertising networks, publicly available sources)</li>
            </ul>
            <p>
              The company does not collect special category data (racial, religious, health, or genetic information).
            </p>

            {/* Legal Basis */}
            <h3>Legal Basis for Processing</h3>
            <p>ShareLogic processes data under these lawful grounds:</p>
            <ul>
              <li>Contract performance</li>
              <li>Legitimate business interests</li>
              <li>Legal compliance obligations</li>
              <li>Consent (for direct marketing)</li>
            </ul>

            {/* Processing Purposes */}
            <h3>Processing Purposes</h3>
            <p>
              Data supports customer registration, payment processing, relationship management, business administration,
              website analytics, product recommendations, and targeted marketing communications.
            </p>

            {/* Data Sharing */}
            <h3>Data Sharing &amp; Security</h3>
            <p>
              Third-party service providers receive data access under strict confidentiality obligations. The company
              implements security measures to prevent unauthorised access, alteration, or disclosure. Personnel with
              legitimate business needs have limited data access.
            </p>
            <p>
              <strong>No international transfers occur outside the UK or European Economic Area.</strong>
            </p>

            {/* Retention */}
            <h3>Data Retention</h3>
            <p>
              Personal data retention matches collection purpose duration, including legal and regulatory requirements.
              Extended retention may occur during complaints or anticipated litigation. Data may be anonymised for
              indefinite retention.
            </p>

            {/* Rights */}
            <h3>Your Rights</h3>
            <p>You may request:</p>
            <ul>
              <li>Access to personal data held</li>
              <li>Correction of inaccurate information</li>
              <li>Erasure under specific conditions</li>
              <li>Processing restrictions</li>
              <li>Data transfer in machine-readable format</li>
              <li>Consent withdrawal</li>
              <li>Objection to processing based on legitimate interests</li>
            </ul>
            <p>
              Requests are typically responded to within one month. No fees typically apply. Identity verification may
              be required.
            </p>

            {/* Cookies */}
            <h3>Cookies</h3>
            <p>
              Browser settings allow cookie refusal, though some website functionality may become inaccessible as a
              result.
            </p>

          </div>

          <p className="mt-16 text-sm text-slate-400">© 2024 ShareLogic Ltd</p>
        </div>
      </Container>
    </main>
  );
}
