import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { breakpoints } from "../utils/breakpoints";
import styled from "styled-components";
import { NextSeo } from "next-seo";
import generateRSSFeed from "../utils/generateRSSFeed";
import generateDiaryRSSFeed from "../utils/generateDiaryRSSFeed";
// Components
import { Spacer } from "../components/Spacer";
import { Title1, Title2, SmallTitle2 } from "../components/Typography";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Layout from "../components/Layout";
import {
  essayFilePaths,
  ESSAYS_PATH,
  noteFilePaths,
  diaryFilePaths,
  DIARIES_PATH,
  NOTES_PATH,
  projectFilePaths,
  PROJECTS_PATH,
} from "../utils/mdxUtils";
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Index({
  sortedEssays: essays,
  sortedNotes: notes,
  sortedProjects: projects,
}) {
  // React intersection observer hook. The 'InView' value is true when the element is in view, and false when it's not. We need to assign the ref property to the element we want to monitor.

  const collectionAnimation = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    // <NextSeo>
    <>
      <Header title="Harvey Qiu" />
      <Layout>
        <header
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-m)",
          }}
        >
          <Title1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            style={{
              marginTop: "var(--space-m)",
            }}
          >
            Harvey writes posts about <br></br> failures and mistakes,<br></br>ups and downs.
          </Title1>
          <SmallTitle2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Currently Law School Student, Always Learner and Tech Hobbist
          </SmallTitle2>
        </header>
        <Spacer size="large" />
        <GardenSection
          variants={collectionAnimation}
          initial="hidden"
          animate="visible"
        >
          <section style={{ gridArea: "essays" }}>
            <Link href="/essays">
              <a href="/essays">
                <SectionHeader>
                  Essays
                  <ArrowRightIcon width="18" height="18" />
                </SectionHeader>
              </a>
            </Link>
            <Subheader>
              longform narrative writing
            </Subheader>
          </section>
          <section style={{ gridArea: "notes" }}>
            <Link href="/notes">
              <a href="/notes">
                <SectionHeader>
                  Notes
                  <ArrowRightIcon width="18" height="18" />
                </SectionHeader>
              </a>
            </Link>
            <Subheader>
              Loose notes on things I don’t entirely understand yet.
            </Subheader>
          </section>
          <section style={{ gridArea: "diaries" }}>
            <Link href="/diaries">
              <a href="/diaries">
                <SectionHeader>
                  Diaries
                  <ArrowRightIcon width="18" height="18" />
                </SectionHeader>
              </a>
            </Link>
            <Subheader>
              Harvey's Personal Life Summary
            </Subheader>
          </section>
          <section style={{ gridArea: "library" }}>
            <Link href="/library">
              <a href="/library">
                <SectionHeader>
                  Library
                  <ArrowRightIcon width="18" height="18" />
                </SectionHeader>
              </a>
            </Link>
            <Subheader>
              Books I’ve read.
            </Subheader>
          </section>
        </GardenSection>
      </Layout>
    </>
  );
}

// Styled Components

const ReadmoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-weight: 400;
  svg {
    transition: color 0.3s ease-in-out, margin-left 0.2s ease-in-out;
    position: relative;
    top: 1px;
    margin-left: var(--space-3xs);
  }
  &:hover {
    transition: color 0.3s ease-in-out, margin-left 0.2s ease-in-out;
    color: var(--color-bright-crimson);
    cursor: pointer;
    svg {
      margin-left: var(--space-2xs);
      color: var(--color-sea-blue);
    }
  }
`;

const IndexNoteCard = styled.div`
  display: flex;
  padding: var(--space-xs) 0 1.2rem;
  border-bottom: 1px solid var(--color-tinted-cream);
  transition: all 0.3s ease-in-out;
  svg {
    position: relative;
    top: 5px;
    flex-shrink: 0;
  }
  h3 {
    color: var(--color-gray-800);
    transition: all 0.3s ease-in-out;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: var(--leading-snug);
    margin-left: var(--space-xs);
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    border-bottom: 1px solid var(--color-sea-blue);
    h3 {
      color: var(--color-crimson);
    }
    transform: scale3d(1.02, 1.02, 1.02);
  }
`;

const GardenSection = styled(motion.section)`
  margin: var(--space-xl) 0 var(--space-s);
  display: grid;
  grid-gap: var(--space-xl);
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "essays notes"
    "diaries library";
  @media ${breakpoints.mediaMD} {
    grid-gap: var(--space-s);
  }
  @media ${breakpoints.mediaSM} {
    grid-template-columns: 1fr;
    grid-gap: var(--space-l);
    grid-template-rows: auto;
    grid-template-areas: "essays" "notes" "diaries" "library";
  }
`;

const SectionHeader = styled.h3`
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-gray-800);
  display: flex;
  align-items: center;
  margin-bottom: var(--space-3xs);
  svg {
    transition: color 0.3s ease-in-out, margin-left 0.2s ease-in-out;
    position: relative;
    top: 0px;
    margin-left: var(--space-3xs);
  }
  &:hover {
    transition: color 0.3s ease-in-out, margin-left 0.2s ease-in-out;
    color: var(--color-bright-crimson);
    cursor: pointer;
    svg {
      margin-left: var(--space-2xs);
      color: var(--color-sea-blue);
    }
  }
`;

const Subheader = styled.p`
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  font-weight: 300;
  color: var(--color-gray-800);
  margin-bottom: var(--space-m);
`;

// Fetches the data for the page.

export function getStaticProps() {
  // Get all essay posts
  let essays = essayFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(ESSAYS_PATH, filePath));
    const { content, data } = matter(source);
    const slug = filePath.replace(/\.mdx$/, "");

    return {
      content,
      data,
      slug,
      filePath,
    };
  });

  // Filter essays for featured property
  const filteredEssays = essays
    .filter((essay) => essay.data.featured === true)
    .slice(0, 4);
  // Sort filtered essays by date
  const sortedEssays = filteredEssays.sort((a, b) => {
    return new Date(b.data.updated) - new Date(a.data.updated);
  });

  // Get all note posts
  let notes = noteFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(NOTES_PATH, filePath));
    const { content, data } = matter(source);
    const slug = filePath.replace(/\.mdx?$/, "");

    return {
      content,
      data,
      slug,
      filePath,
    };
  });

  // Sort notes in reverse order by date
  const sortedNotes = notes.sort((a, b) => {
    return new Date(b.data.updated) - new Date(a.data.updated);
  });

  let diaries = diaryFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(DIARIES_PATH, filePath));
    const { content, data } = matter(source);
    const slug = filePath.replace(/\.mdx?$/, "");

    return {
      content,
      data,
      slug,
      filePath,
    };
  })

  let projects = projectFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath));
    const { content, data } = matter(source);
    const slug = filePath.replace(/\.mdx?$/, "");

    return {
      content,
      data,
      slug,
      filePath,
    };
  });


  // Filter projects for featured property
  // const filteredProjects = projects
  //     .filter((project) => project.data.featured === true)
  //     .slice(0, 4);
  // Sort filtered essays by date
  const sortedProjects = projects.slice(0, 4).sort((a, b) => {
    return new Date(b.data.updated) - new Date(a.data.updated);
  });

  const allPosts = [...essays, ...notes, ...projects];

  // Generate RSS Feed
  generateRSSFeed(allPosts);
  generateDiaryRSSFeed(diaries)

  return {
    props: { sortedEssays, sortedNotes, sortedProjects},
  };
}
