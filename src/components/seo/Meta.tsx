import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { IMeta } from "./Meta.types";

const Meta: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description ? (
          <>
            <meta name="description" content={description} />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={title} />
            <link rel="icon" href="/union.svg" />
          </>
        ) : (
          <>
            <meta name="robots" content="noindex, nofollow" />
            <link rel="icon" href="/union.svg" />
          </>
        )}
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Meta;
