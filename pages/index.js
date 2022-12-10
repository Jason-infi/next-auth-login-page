import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [session, setSession] = useState(false);
  return (
    <div className='grid place-items-center h-full'>
      {session ? <User /> : <Guest />}
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

const User = () => {
  return (
    <>
      <div className=' text-pink-600 text-lg font-medium text-center'>
        <p>User Homepage</p>
      </div>
      <div className='login'>
        <Link href={"/"}>sign out</Link>
      </div>
    </>
  );
};
