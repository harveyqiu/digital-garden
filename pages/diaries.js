import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import { Title2 } from "../components/Typography";
import { DIARIES_PATH, diaryFilePaths } from "../utils/mdxUtils";
import Header from "../components/Header";
import TitleWithCount from "../components/TitleWithCount";
import Calendar from "../components/unique/Calendar";


export default function Diaries({ diaries, updated_dates }) {
  return (
    <>
      <Header title="Diaries by Harvey Qiu" />
      <Layout>
        <header style={{ marginBottom: "var(--space-xl)" }}>
          <TitleWithCount posts={diaries}>Diaries</TitleWithCount>
          <Title2>
            Harvey's Personal Life Summary
          </Title2>
        </header>
        <Calendar updateDates={updated_dates} />
      </Layout>
    </>
  );
}

// Fetches the data for the page.

export function getStaticProps() {
  // Get all note posts
  let diaries = diaryFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(DIARIES_PATH, filePath));
    const { content, data } = matter(source);
    const slug = filePath.replace(/\.mdx$/, "");

    return {
      content,
      data,
      slug,
      filePath,
    };
  });

  // Sort notes by date
  const sortedDiaries = diaries.sort((a, b) => {
    return new Date(b.data.updated) - new Date(a.data.updated);
  });
  diaries = sortedDiaries;

  const updated_dates = diaries.map((diary) => {
    return diary.data.updated
  })

  return { props: { diaries, updated_dates } };
}
