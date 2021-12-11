import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";

import Layout from "../../components/layout";
import { getUsers, getUser } from "../../lib/users";

export async function getServerSideProps(context) {
  console.log(context);
  const response = await getUsers();
  return {
    props: {
      usersData: response,
    },
  };
}

const FourthPost = ({ usersData }) => {
  const [user, setUser] = useState(null);
  const { data } = usersData;

  const handleUserClick = async (userID) => {
    const res = await getUser(userID);
    setUser(res.data);
  };

  return (
    <Layout>
      <Head>
        <title>Fourth Post</title>
      </Head>
      <div>
        <h1>Fourth Post</h1>
        <h2>
          {/* Client side navigation href on link */}
          <Link href="/">
            {/* href on <a> delivers browser navigation which is slower */}
            <a>Back to home</a>
          </Link>
        </h2>
        {/* Image handling */}
        <Image
          src="/images/profile.jpeg"
          height={144}
          width={144}
          alt="Dummy image"
        />
      </div>
      <div>
        {data.map((u) => (
          <li onClick={() => handleUserClick(u.id)} key={u.id}>
            {u.first_name}
          </li>
        ))}
      </div>
      <div>
          {user && user.first_name}
      </div>
    </Layout>
  );
};

export default FourthPost;
