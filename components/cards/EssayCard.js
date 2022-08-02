import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import GrowthIcon from "../icons/GrowthIcon";
// import { motion } from "framer-motion";
import { RelativeDate } from "../templates/Dates";

export default function EssayCard({
  slug,
  cover,
  title,
  growthStage,
  date,
  variants,
  id,
}) {
  return (
    <Link key={id} as={`/${slug}`} href={`/${slug}`}>
      <a>
        <StyledEssayCard variants={variants}>
          <h3>{title}</h3>
          <MetadataContainer>
            {growthStage && <span>{growthStage}</span>}
            {growthStage && <GrowthIcon size="14" growthStage={growthStage} />}
            <span>
              <RelativeDate postDate={date} />
            </span>
          </MetadataContainer>
        </StyledEssayCard>
      </a>
    </Link>
  );
}

const MetadataContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    font-family: var(--font-sans);
    font-size: calc(var(--font-size-xs) / 1.08);
    color: var(--color-gray-600);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 400;
    margin-top: 2px;
  }
  svg {
    margin: 0 var(--space-3xs);
  }
`;

const StyledEssayCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-tinted-cream);
  padding: var(--space-s);
  margin: 0 var(--space-2xs) var(--space-2xs) 0;
  border-radius: var(--border-radius-base);
  box-shadow: var(--box-shadow-sm);
  background: var(--color-light-cream);
  transition: all 0.3s ease-in-out;
  color: var(--color-gray-800);
  img {
    width: 100%;
  }
  h3 {
    transition: all 0.3s ease-in-out;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: var(--leading-snug);
    margin: var(--space-2xs) 0;
  }
  &:hover {
    box-shadow: var(--box-shadow-lg);
    transform: scale3d(1.02, 1.02, 1.02);
    h3 {
      color: var(--color-crimson);
    }
  }
`;
