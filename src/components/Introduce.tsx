import styled from "styled-components";
import person1 from "/assets/person2.png";
import arrow from "/assets/Arrow.png";
import { motion } from "framer-motion";

export default function Introduce() {
  return (
    <motion.div
      animate={{ x: [100, 0] }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <StyledIntroduce>
        <IntroduceWrapper>
          <PersonImageDiv>
            <img src={person1} alt="person" />
            <Arrow src={arrow} alt="arrow" />
            <PersonName>
              Hello! I am <span>davit avtandilashili</span>
            </PersonName>
          </PersonImageDiv>
          <IntroduceText>
            <p>A programmer who</p>
            <h1>if the code works</h1>
            <h2>
              still <span>touches</span> it
            </h2>
            <span>Because there should be no bugs in the code</span>
          </IntroduceText>
        </IntroduceWrapper>
      </StyledIntroduce>
    </motion.div>
  );
}

const StyledIntroduce = styled.div`
  padding: 8.7rem 17rem 0rem;
`;

const IntroduceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const PersonImageDiv = styled.div`
  position: relative;
  border-radius: 431px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #763cac 0%,
    rgba(50, 15, 133, 0) 100%
  );
  width: 385px;
  height: 431px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 180px;
    height: 260px;
    flex-shrink: 0;
    object-fit: cover;
  }
`;

const Arrow = styled.img`
  position: absolute;
  width: 91.782px;
  height: 81.857px;
  top: -10rem;
  right: -2rem;
`;

const PersonName = styled.p`
  position: absolute;
  top: -7rem;
  right: -32rem;
  color: #fff;
  text-align: center;
  font-family: Preahvihear;
  font-size: 1.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: 9.7rem;
  letter-spacing: -0.5px;

  & > span {
    color: #7127ba;
  }
`;

const IntroduceText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  & > p {
    color: #fff;
    font-family: Preahvihear;
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.34px;
    text-decoration-line: underline;
  }

  & > h1 {
    color: #fff;
    font-family: Preahvihear;
    font-size: 5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 126.664%;
    letter-spacing: 1px;
  }

  & > h2 {
    color: #fff;
    font-family: Preahvihear;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 126.664%;
    letter-spacing: 1px;

    & > span {
      color: #7127ba;
    }
  }

  & > span {
    color: #fff;
    font-family: Preahvihear;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.22px;
  }
`;
