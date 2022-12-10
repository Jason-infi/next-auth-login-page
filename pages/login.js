import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";

const login = () => {
  const handleGoogleSignIn = async () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };
  return (
    <Layout>
      <section className='w-2/3 flex flex-col justify-evenly text-center gap-10'>
        <div className=' text-3xl font-bold'>
          <h1 className='text-pink-400 tracking-wider'>Login</h1>
        </div>
        {/*form */}
        <form action='' className='form'>
          <div className={styles.formInput}>
            <input
              type='email'
              name='email'
              placeholder='EMAIL'
              className={styles.inputText}
            />
          </div>
          <div className={styles.formInput}>
            <input
              type='password'
              name='password'
              placeholder='PASSWORD'
              className={styles.inputText}
            />
          </div>
          {/* login buttons */}
          <div className={`${styles.loginButtons} mt-6`}>
            <button
              type='submit'
              className={`${styles.loginButton} bg-gradient-to-r from-pink-300 to-pink-200 text-white`}
            >
              login
            </button>
            <button className={styles.loginButton} onClick={handleGoogleSignIn}>
              sign in with google
              <Image src={"/assets/google.svg"} height={20} width={20}></Image>
            </button>
            <button type='submit' className={styles.loginButton}>
              sign in with github
              <Image src={"/assets/github.svg"} height={20} width={20}></Image>
            </button>
          </div>
        </form>
        {/* sign up */}
        <div>
          <p>
            don't have an account?
            <Link href='/register' className='text-pink-400'>
              {" "}
              sign up
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default login;
