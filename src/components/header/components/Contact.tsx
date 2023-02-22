import Link from "next/link";
import React from "react";

export default function Contact({ telephone }: { telephone: string }) {
  return (
    <Link href="/contact/">{telephone}</Link>
  )
}