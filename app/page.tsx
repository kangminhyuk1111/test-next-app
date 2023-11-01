
import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";

export default function Home() {
  return (
    <main>
        <h1>hello world</h1>
        <Link href={'/users'}>href</Link>
        <ProductCard />
    </main>
  )
}
