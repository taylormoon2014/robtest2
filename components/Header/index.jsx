import React from "react";
import Group2 from "../Group2";
import styled from "styled-components";


function Header() {
  return (
    <Header1>
      <Group5>
        <OverlapGroup5>
          <Group2 />
          <Path7 src="https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec70f659085a627177a19b/img/path-14@1x.png" />
          <Group4></Group4>
        </OverlapGroup5>
        <Rectangle958></Rectangle958>
      </Group5>
    </Header1>
  );
}

const Header1 = styled.div`
  position: absolute;
  width: 429px;
  height: 109px;
  top: 0;
  left: 127px;
  display: flex;
`;

const Group5 = styled.div`
  flex: 1;
  width: 429px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const OverlapGroup5 = styled.div`
  width: 429px;
  height: 100px;
  position: relative;
  background-color: var(--midnight-blue);
`;

const Path7 = styled.img`
  position: absolute;
  width: 3px;
  height: 5px;
  top: 72px;
  left: 199px;
  object-fit: cover;
`;

const Group4 = styled.div`
  position: absolute;
  width: 155px;
  height: 49px;
  top: 28px;
  left: 199px;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec70f659085a627177a19b/img/group-3@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Rectangle958 = styled.div`
  width: 428px;
  height: 9px;
  background-color: var(--bright-sun);
`;

export default Header;
