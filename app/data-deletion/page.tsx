import type { Metadata } from "next";
import LegalShell from "@/components/legal-shell";

// Operator-specific text for eco.dlisi.xyz (danielelisi/agora-gitops#47). Fork patch: keep it on upstream syncs.
export const metadata: Metadata = {
  title: "Data Deletion - eco.dlisi.xyz",
  description: "How to have your data deleted from eco.dlisi.xyz.",
};

export default function DataDeletionPage() {
  return (
    <LegalShell
      title="Data Deletion"
      description="How to have the data eco.dlisi.xyz holds about you deleted. The service is operated by Daniele Lisi."
      updatedAt="November 14, 2026"
    >
      <section>
        <h2 className="text-xl font-bold text-white">How To Request Deletion</h2>
        <p className="mt-3">
          Email info@dlisi.xyz with the subject &quot;Data deletion&quot; and
          your Instagram username. No account or password is needed.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">What Gets Deleted</h2>
        <p className="mt-3">
          Every record linked to that Instagram account: your comments and
          messages as received from Meta, the logs of replies sent to you, and
          the link clicks recorded from those replies.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">When</h2>
        <p className="mt-3">
          Within 30 days of your request, and you will get an email when it is
          done. Copies in database backups expire on their own within a further
          14 days. If we need to confirm that the Instagram account is yours,
          we will ask you to message it from that account.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Stop Future Replies</h2>
        <p className="mt-3">
          Simply do not comment campaign keywords or message the account. You
          can also block the account on Instagram.
        </p>
      </section>
    </LegalShell>
  );
}
