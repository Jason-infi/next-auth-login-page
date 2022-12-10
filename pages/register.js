import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import Link from "next/link";

const register = () => {
  return (
    <Layout>
      <section className='w-2/3 flex flex-col justify-evenly text-center gap-10'>
        <div className=' text-3xl font-bold'>
          <h1 className='text-pink-400 tracking-wider'>Register</h1>
        </div>
        {/*form */}
        <form action='' className='form'>
          <div className={styles.formInput}>
            <input
              type='username'
              name='username'
              placeholder='USERNAME'
              className={styles.inputText}
            />
          </div>
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
          <div className={styles.formInput}>
            <input
              type='cpassword'
              name='cpassword'
              placeholder='CONFIRM PASSWORD'
              className={styles.inputText}
            />
          </div>
          {/* login buttons */}
          <div className={`${styles.loginButtons} mt-6`}>
            <button
              type='submit'
              className={`${styles.loginButton} bg-gradient-to-r from-pink-300 to-pink-200 text-white`}
            >
              sign up
            </button>
          </div>
        </form>
        <div>
          <p>
            already have an account?
            <Link href='/login' className='text-pink-400'>
              {" "}
              login
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default register;
