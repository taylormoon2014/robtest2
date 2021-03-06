import React from "react";
import styled from "styled-components";


function LAMMIcon() {
  return (
    <LAMMIcon1>
      <GroupContainer>
        <Group19></Group19>
        <Group21></Group21>
      </GroupContainer>
    </LAMMIcon1>
  );
}

const LAMMIcon1 = styled.div`
  position: absolute;
  height: 228px;
  top: 349px;
  left: 204px;
  display: flex;
  align-items: flex-end;
  min-width: 373px;
  transition: all 0.2s ease;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec73a75a67d7b52e19e69a/img/group-16-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;

  &:hover {
    opacity: 0;
  }
`;

const GroupContainer = styled.div`
  width: 373px;
  height: 228px;
  position: relative;
  margin-bottom: 0;
`;

const Group19 = styled.div`
  position: absolute;
  width: 218px;
  height: 218px;
  top: 5px;
  left: 78px;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec73a75a67d7b52e19e69a/img/group-18-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Group21 = styled.div`
  position: absolute;
  width: 373px;
  height: 228px;
  top: 0;
  left: 0;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec73a75a67d7b52e19e69a/img/group-20-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

export default LAMMIcon;
