import Layout from "../components/Layout";
import { Title1, Title2, SmallCaps } from "../components/Typography";
import Header from "../components/Header";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";
import { RelativeDate } from "../components/templates/Dates";

export default function About() {
  return (
    <>
      <Header title="About Harvey Qiu" />
      <Layout>
        <HeaderSection>
          <SmallCaps>About</SmallCaps>
          <Title1>Harvey Qiu</Title1>
          <Title2>Currently Law School Student, Tech hobbist</Title2>
        </HeaderSection>
        <StyledMain>
          <section className="intro">
            <div>
              <SmallCaps>A Little Context</SmallCaps>
              <p>平平无奇的法学院学生一枚，喜欢一些其他法学生不感兴趣的东西：比如科技、编程。</p>
              <p>法律方面比较好奇数据法学以及竞争法学，但偶尔看下商法学。</p>
              <p>自学的编程，会写一点Python、HTML、JavaScript（但掌握程度并不高，平常主要靠copy & paste），但完全不懂网页设计。曾经在某家公司做Web全栈开发实习生。</p>
              <p>曾经会使用Premiere、FinalCut剪辑视频（现在更倾向于使用免费的Davinci Resolve），会使用AfterEffects套模板。</p>
              <p>喜欢鼓弄各种新的App或服务，喜欢折腾自己。</p>
              <p>看美剧、英剧和韩剧，但偶尔看国产综艺。同时喜欢后摇、摇滚和民谣，是个音痴。</p>
              <p>mbti测出来过intp和istp。是天蝎座。</p>
              <p>不想告诉你我的社交媒体。</p>
              <p>新闻主要看路透社、财新、南方周末。</p>
              <p>我的政治坐标系是 <a href="https://www.idrlabs.com/cn/political-coordinates/1/13.9/1/19.4/result.php">13.9% 左派, 19.4% 自由主义者</a>。</p>
              <p>你可以通过harveyqiu1110@outlook.com联系我。</p>
            </div>
          </section>
          <Divider />
        </StyledMain>
      </Layout>
    </>
  );
}

const Divider = styled.hr`
  margin: var(--space-3xl) 0;
  height: 2px;
  background-color: var(--color-salmon);
  border: none;
  width: 20%;
  @media ${breakpoints.mediaSM} {
    margin: var(--space-xl) 0;
  }
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: var(--space-m);
  margin: var(--space-xl) 0;
`;

const HeaderSection = styled.header`
  margin: var(--space-m) auto 0;
  ${SmallCaps} {
    margin-bottom: var(--space-3xs);
    color: var(--color-gray-600);
  }
  h1 {
    margin-bottom: var(--space-s);
  }
  h2 {
    color: var(--color-gray-800);
  }
`;

const StyledMain = styled.main`
  margin-top: var(--space-xs);
  padding: var(--space-xl) 0;
  width: 100%;
  @media ${breakpoints.mediaSM} {
    padding: var(--space-l) var(--space-xs);
  }
  img {
    border-radius: 4px;
  }
  h2 {
    margin-bottom: var(--space-s);
  }
  p {
    line-height: var(--leading-loose);
    max-width: 52ch;
  }
  p:not(:last-of-type) {
    margin-bottom: var(--space-s);
  }
  section.intro {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: var(--space-l);
    align-items: flex-start;
    ${SmallCaps}:not(:first-of-type) {
      margin-top: var(--space-xl);
      color: var(--color-gray-900);
    }
    ${SmallCaps}::before {
      content: "";
      display: inline-block;
      width: 20px;
      clear: both;
      height: 20px;
      margin-right: -1.5rem;
      background-image: url("/images/leaf-icon.svg");
      background-size: contain;
      background-repeat: no-repeat;
      position: relative;
      top: 4px;
      right: 2.25rem;
    }
    @media ${breakpoints.mediaSM} {
      grid-template-columns: 1fr;
      gap: var(--space-m);
      flex-direction: column;
    }
  }
  section.talks {
    div.images {
      margin-top: var(--space-l);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, auto));
      gap: var(--space-s);
    }
  }
`;

function TalkCard({ title, host, date, url, key }) {
  return (
    <a key={key} href={url}>
      <StyledTalkCard>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "var(--space-xs)",
            }}
          >
            {/* <LeafIcon width="20" height="20" /> */}
            <svg
              fill="var(--color-sea-blue"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
              viewBox="0 0 3 20"
              width="3"
              height="20"
            >
              <rect width="3" height="20" />
            </svg>
            <h3>{title}</h3>
          </div>
          <span className="host">{host}</span>
          <span className="date">
            <RelativeDate postDate={date} />
          </span>
        </div>
      </StyledTalkCard>
    </a>
  );
}

const StyledTalkCard = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: var(--border-radius-base);
  border: 1px solid var(--color-cream);
  transition: all 0.3s ease-in-out;
  h3 {
    color: var(--color-gray-800);
    transition: all 0.3s ease-in-out;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: var(--leading-snug);
    margin-bottom: var(--space-3xs);
    transition: all 0.3s ease-in-out;
  }
  svg {
    display: inline-block;
    position: relative;
    top: 6px;
    flex-shrink: 0;
    transition: all 0.3s ease-in-out;
  }
  div {
    display: flex;
    flex-direction: column;
    span.host {
      color: var(--color-gray-600);
      font-family: var(--font-sans);
      font-size: var(--font-size-sm);
      margin: 0 0 var(--space-3xs) 1.3rem;
      transition: all 0.3s ease-in-out;
    }
    span.date {
      font-family: var(--font-sans);
      font-size: calc(var(--font-size-xs) / 1.08);
      color: var(--color-gray-600);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 400;
      margin: 0 0 var(--space-3xs) 1.3rem;
      transition: all 0.3s ease-in-out;
    }
  }
  &:hover {
    h3 {
      color: var(--color-bright-crimson);
      transform: translateX(8px);
    }
    span {
      transform: translateX(8px);
    }
    svg {
      transform: scaleX(3.5) translateX(1px);
    }
  }
`;
