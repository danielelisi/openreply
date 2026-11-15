import type { Metadata } from "next";
import Link from "next/link";
import LegalShell from "@/components/legal-shell";

// Operator-specific text for eco.dlisi.xyz (danielelisi/agora-gitops#47). Fork patch: keep it on upstream syncs.
export const metadata: Metadata = {
  title: "Terms of Service - eco.dlisi.xyz",
  description: "Terms for the automatic Instagram replies sent by eco.dlisi.xyz.",
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      description="eco.dlisi.xyz is a privately operated, self-hosted copy of the open-source OpenReply software, run by Daniele Lisi for the Instagram professional accounts he manages. It is not offered to the public."
      updatedAt="November 14, 2026"
    >
      <section>
        <h2 className="text-xl font-bold text-white">What The Service Does</h2>
        <p className="mt-3">
          When you comment a keyword on a post or reel, message the account, or
          reply to a story, the service may send you a private reply, usually
          with a link, and may reply publicly to your comment. Commenting the
          keyword is how you ask for that reply.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Use Of Instagram</h2>
        <p className="mt-3">
          Replies are sent only through Meta&apos;s official Instagram API and
          follow Meta&apos;s Platform Terms, Instagram&apos;s policies and their
          messaging limits. Your use of Instagram remains governed by
          Instagram&apos;s own terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Links And Availability</h2>
        <p className="mt-3">
          Links in replies are provided as they are. The service depends on
          Meta and other providers, may be paused or stopped at any time, and
          comes with no guarantee that every reply is delivered.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Privacy</h2>
        <p className="mt-3">
          How your data is handled is described in the{" "}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>
          , and how to have it deleted on the{" "}
          <Link href="/data-deletion" className="underline">
            Data Deletion
          </Link>{" "}
          page.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Contact</h2>
        <p className="mt-3">Questions about these terms: info@dlisi.xyz.</p>
      </section>
    </LegalShell>
  );
}
