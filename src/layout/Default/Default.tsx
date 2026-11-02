import Head from "next/head";
import { Roboto_Flex } from "next/font/google";
import { ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Header from "@/components/Header";
import { profile } from "@/content/portfolio";

const roboto = Roboto_Flex({ subsets: ["latin"], display: "swap" });

const Default = ({ children }: { children: ReactNode }) => (
  <div className={roboto.className + " site-shell"}>
    <Head>
      <title>Arthus Vinícius — Senior Software Engineer</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="description" content="Senior software engineer based in Brazil. Frontend and product engineering with React, TypeScript and Next.js, backed by experience across APIs, data and cloud infrastructure." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Arthus Vinícius — Senior Software Engineer" />
      <meta property="og:description" content="Selected work, experience and a little about me. Frontend craft and product thinking, from Tocantins, Brazil." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
    </Head>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header />
    <main id="main-content" tabIndex={-1}>{children}</main>
    <footer id="contact" className="site-footer">
      <p className="eyebrow">Have something in mind?</p>
      <h2>Let’s talk.</h2>
      <a className="contact-email text-link" href={"mailto:" + profile.email}>{profile.email}<FiArrowUpRight aria-hidden="true" /></a>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Arthus Vinícius</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#intro">Back to top ↑</a>
        </div>
      </div>
    </footer>
  </div>
);

export default Default;
