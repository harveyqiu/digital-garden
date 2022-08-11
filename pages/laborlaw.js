import Layout from "../components/Layout";
import { Title1, Title2 } from "../components/Typography";
import styled from "styled-components";

export default function LaborLaw() {
    return (
      <Layout>
        <HeaderContainer>
          <Title1>劳动法</Title1>
          <Title2>
              简明劳动法
          </Title2>
        </HeaderContainer>
        <MainSection>

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