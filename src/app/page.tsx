'use client'
import { useEffect, useState } from 'react';
import { Maincontent } from "@/components/component/maincontent";
import Footerbar from "@/components/component/footer";
import Header from "@/components/component/header";

export default function Home() {


  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />
      <Maincontent />
      <Footerbar />
    </main>
  );
}
