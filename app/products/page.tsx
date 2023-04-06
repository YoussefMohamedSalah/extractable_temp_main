import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Read my thoughts on software development, design, and more."
};

export default function ProductsPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Products</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        This is my Products page.
      </p>
    </section>
  );
}
