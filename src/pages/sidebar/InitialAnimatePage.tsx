import { AnimatePresence } from "motion/react";
import { useState } from "react";
import Button from "../../components/animated/Button";
import HelloBox from "../../components/animated/HelloBox";
import Article from "../../components/Article";
import Section from "../../components/Section";

export default function InitialAnimatePage() {
  const [isVisible, setisVisible] = useState(true);

  return (
    <Section title="기본 동작">
      <Article title="initial-animate">
        <HelloBox />
      </Article>

      <Article title="initial-animate-exit">
        <Button onClick={() => setisVisible((prev) => !prev)}>
          킹받게 {isVisible ? "사라지기" : "나타나기"}
        </Button>

        <AnimatePresence>{isVisible && <HelloBox />}</AnimatePresence>
      </Article>
    </Section>
  );
}
