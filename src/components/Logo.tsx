import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="TOP GRADE logo" width={150} height={1} />
    </Link>
  );
}
