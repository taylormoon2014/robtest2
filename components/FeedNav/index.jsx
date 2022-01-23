import React from "react";
import styled from "styled-components";


function FeedNav() {
  return (
    <FeedNav1>
      <OverlapGroup1>
        <Group32></Group32>
        <Path87 src="https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec70f659085a627177a19b/img/path-87@1x.png" />
        <Group34></Group34>
      </OverlapGroup1>
    </FeedNav1>
  );
}

const FeedNav1 = styled.div`
  position: absolute;
  height: 69px;
  top: 2820px;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 196px;
  transition: all 0.2s ease;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec70f659085a627177a19b/img/group-29@1x.png);
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;

  &:hover {
    transform: translate(128px, 0);
  }
`;

const OverlapGroup1 = styled.div`
  width: 196px;
  height: 69px;
  position: relative;
`;

const Group32 = styled.div`
  position: absolute;
  width: 31px;
  height: 38px;
  top: 15px;
  left: 139px;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec7824522f5ce924c00f62/img/group-31-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Path87 = styled.img`
  position: absolute;
  width: 12px;
  height: 18px;
  top: 25px;
  left: 20px;
  object-fit: cover;
`;

const Group34 = styled.div`
  position: absolute;
  width: 196px;
  height: 69px;
  top: 0;
  left: 0;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec70f659085a627177a19b/img/group-33@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

export default FeedNav;
