import type { Metadata } from "next";
import Link from "next/link";
import LegalShell from "@/components/legal-shell";

// Operator-specific text for eco.dlisi.xyz (danielelisi/agora-gitops#47). Fork patch: keep it on upstream syncs.
export const metadata: Metadata = {
  title: "Privacy Policy - eco.dlisi.xyz",
  description:
    "How eco.dlisi.xyz handles data from Instagram comments, messages and tracked links.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      description="eco.dlisi.xyz is a privately operated, self-hosted copy of the open-source OpenReply software. It sends automatic replies on Instagram for the professional accounts its operator manages. It is not a public service and has no sign-ups."
      updatedAt="November 14, 2026"
    >
      <section>
        <h2 className="text-xl font-bold text-white">Who Operates This Service</h2>
        <p className="mt-3">
          The service is operated by Daniele Lisi, who is responsible for the
          data described here. Contact: info@dlisi.xyz.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Whose Data We Process</h2>
        <p className="mt-3">
          Mainly people who comment on posts or reels, send a direct message, or
          reply to a story of an Instagram account connected to this service.
          Also the operator&apos;s own sign-in email addresses.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Data We Collect</h2>
        <p className="mt-3">
          Through Meta&apos;s official Instagram API we receive the text of the
          comment or message, your Instagram-scoped user ID, your username, the
          comment or message ID, and timestamps, exactly as Meta delivers them.
          If a campaign asks you to follow the account first, we also receive
          whether you follow it. We record whether each reply was sent and any
          error. When you tap a link we sent you, we record the click with a
          hashed IP address, a hashed recipient identifier, your browser&apos;s
          user agent and the referring page. We never ask for your Instagram
          password and do not scrape Instagram or automate a browser.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">How We Use It</h2>
        <p className="mt-3">
          Only to send the reply you asked for by commenting a keyword or
          messaging the account, to avoid sending it twice, to troubleshoot
          failed sends, and to count link clicks. We do not sell your data,
          use it for advertising, build profiles, or share it with anyone
          except the providers listed below.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Where It Is Stored</h2>
        <p className="mt-3">
          On servers the operator runs himself. Instagram access tokens are
          encrypted at rest. Database backups are kept on the same
          infrastructure and expire after 14 days.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Service Providers</h2>
        <p className="mt-3">
          Meta (the Instagram API, which delivers comments and sends replies),
          Cloudflare (network connection and access control for this site), and
          Resend (sign-in emails to the operator only).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Retention And Your Choices</h2>
        <p className="mt-3">
          Records are kept while the related campaign is in use, and deleted on
          request. You can avoid all of this by not commenting a campaign
          keyword. To have your data deleted, follow the{" "}
          <Link href="/data-deletion" className="underline">
            Data Deletion
          </Link>{" "}
          instructions. For any privacy question, write to info@dlisi.xyz.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Changes</h2>
        <p className="mt-3">
          If this policy changes, the date at the top of this page changes with
          it.
        </p>
      </section>
    </LegalShell>
  );
}
