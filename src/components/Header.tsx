"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import React from "react";

function Header() {
  const { user } = useUser();

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      {/* Top row */}
      <div>
        <Link
          href="/"
          className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
        >
          Shopr
        </Link>

        <Form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input type="text" name="query" />
        </Form>
      </div>
      Header
    </header>
  );
}

export default Header;
