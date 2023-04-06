import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description: "Read my thoughts on software development, design, and more."
};

export default function ShopPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Shop</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        This is my Shop page.
      </p>
    </section>
  );
}
