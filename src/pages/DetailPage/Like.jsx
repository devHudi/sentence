import { useState } from "react";
import styled from "styled-components";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  font-size: 13pt;
  cursor: pointer;

  & > svg {
    position: relative;
    top: 2px;
  }
`;

const Like = () => {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(Math.floor(Math.random() * 100));

  const toggleActive = () => {
    setActive(!active);
    if (active) setCount(count - 1);
    else setCount(count + 1);
  };

  return (
    <Wrapper onClick={toggleActive}>
      {active ? <AiFillHeart /> : <AiOutlineHeart />} {count}
    </Wrapper>
  );
};

export default Like;
