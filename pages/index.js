import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className='grid place-items-center h-full'>
      {session ? <User session={session} /> : <Guest />}
    </div>
  );
}

const Guest = () => {
  return (
    <div className=' text-pink-600 text-lg font-medium text-center'>
      <div className=' text-2xl'>
        <p>Guest Homepage</p>
      </div>
      <div className='login'>
        <Link href={"/login"}>Login</Link>
      </div>
    </div>
  );
};

const User = ({ session }) => {
  return (
    <>
      <div className=' text-pink-600 text-lg font-medium text-center'>
        <p>User Homepage</p>
      </div>
      <div className='user'>
        {session.user.name}
        {session.user.email}
      </div>
      <div className='login'>
        <Link href={"/login"}>sign out</Link>
      </div>
    </>
  );
};
