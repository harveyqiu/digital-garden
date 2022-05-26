import Layout from "../../components/Layout";
import styled from "styled-components";
import { Title1, Title2 } from "../../components/Typography";
import ProseWrapper from "../../components/mdx/ProseWrapper";

export default function ChineseOfficialMedia() {
    return (
      <Layout>
        <HeaderContainer>
            <Title1>Chinese Official Media</Title1>
            <Title2>
                About Chinese Official Media
            </Title2>
        </HeaderContainer>
        <MainSection>
            <ProseWrapper>
                    <div>123</div>
            </ProseWrapper>
        </MainSection>
      </Layout>
    );
  }


const HeaderContainer = styled.div`
  margin: var(--space-xl) auto;
  max-width: 800px;
  @media (max-width: 768px) {
    margin: var(--space-m) 0;
    max-width: 100%;
  }
`;

const MainSection = styled.section`
  margin: var(--space-xl) auto;
  max-width: 800px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;