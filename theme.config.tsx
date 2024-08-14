import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Benlab" />
      <meta property="og:description" content="Let's learn together" />
      <link rel="icon" type="image/png" href="/images/logo.png" />
    </>
  ),
  logo: (
    <span>
      <Image
        className="rounded-full"
        src="/images/logo.png"
        alt="logo"
        height={50}
        width={50}
        style={{ borderRadius: "50%", display: "inline-block" }}
      />{" "}
      <b>BENLAB'S WORKSHOPS</b>
    </span>
  ),
  project: {
    link: "https://github.com/phamtrongngh/aws-workshops",
  },
  docsRepositoryBase: "https://github.com/phamtrongngh/aws-workshops",
  footer: {
    text: "",
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: "Give feedback",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Benlab's Workshops",
    };
  },
};

export default config;
