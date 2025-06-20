import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { cubicBezier, motion } from "motion/react";
import Container from "../../../components/Container";
import { appleColors } from "../../../styles/constants/colors";
import AppleBanner from "./components/AppleBanner";
import AppleButton from "./components/AppleButton";
import AppleGnb from "./components/AppleGnb";
import AppleSection from "./components/AppleSection";
import IPhoneMenu from "./components/IPhoneMenu";

const SNavWrapper = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${appleColors.backgroundLight};
`;

const SRibbon = styled.p`
  padding: 16px 0;
  background-color: ${appleColors.background};
  font-size: 13px;
  text-align: center;
  color: ${appleColors.secondary};
`;

const easing = cubicBezier(0.455, 0.03, 0.515, 0.955);

export default function IPhoneMainPage() {
  return (
    <section>
      <header>
        <h3 className="visually-hidden">애플 아이폰 페이지</h3>
        <SNavWrapper>
          <nav>
            <h4 className="visually-hidden">메뉴</h4>
            <Container contentsCss={css({ maxWidth: 1024 })}>
              <AppleGnb />
            </Container>
          </nav>

          <nav>
            <h4 className="visually-hidden">아이폰 메뉴</h4>
            <Container
              contentsCss={css({
                maxWidth: 1024,
                padding: "16px 30px",
              })}
            >
              <motion.div
                initial={{ opacity: 0, translateX: 200 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.3, ease: easing }}
              >
                <IPhoneMenu css={css({ margin: "0 auto" })} />
              </motion.div>
            </Container>
          </nav>
        </SNavWrapper>

        <motion.div
          initial={{ translateY: "-100%" }}
          animate={{ translateY: "0" }}
          transition={{ duration: 1, ease: easing }}
        >
          <SRibbon>
            지금부터 7월 9일까지, 새 iPhone 구입에 사용할 수 있는 보상 판매
            크레딧을 더 많이 받을 수 있습니다.
            <span css={css({ color: appleColors.blueDark })}>
              * iPhone 쇼핑하기
            </span>
          </SRibbon>
        </motion.div>
      </header>

      <AppleSection css={css({ paddingTop: 80 })}>
        <AppleSection.Header title="iPhone" size="big">
          <AppleSection.Description>
            <p>사랑받기 위해 디자인되다.</p>
          </AppleSection.Description>
        </AppleSection.Header>

        <AppleBanner backgroundUrl="https://www.apple.com/kr/iphone/home/images/overview/soip/soip_poster__bxj7ggqms2z6_xlarge.jpg">
          <h2
            css={css({
              width: 456,
              height: 91,
              backgroundImage:
                'url("https://www.apple.com/kr/iphone/home/images/overview/soip/soip_title__c13lvjdxm70i_xlarge.png")',
            })}
          ></h2>
          <AppleBanner.Paragraph text="4K120 슬로 모션, iPhone 16 Pro로 찍다." />

          <AppleBanner.NavGroup>
            <AppleButton as="a" href="apple/iphone">
              비하인드 영상 보기
            </AppleButton>
            <AppleButton as="a" href="apple/iphone" variant="outlined">
              iPhone 16 Pro 살펴보기
            </AppleButton>
          </AppleBanner.NavGroup>
        </AppleBanner>
      </AppleSection>
    </section>
  );
}
