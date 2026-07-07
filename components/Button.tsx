import Link from "next/link";

type ButtonProps = {
  text: string;
  href: string;
};

export default function Button({ text, href }: ButtonProps) {
  return (
    <Link href={href}>
      <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:scale-105 hover:bg-blue-700">
        {text}
      </button>
    </Link>
  );
}