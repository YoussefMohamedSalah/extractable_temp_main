import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Read my thoughts on software development, design, and more."
};

export default function ContactPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Contact Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        This is my contact page.
      </p>
    </section>
  );
}
