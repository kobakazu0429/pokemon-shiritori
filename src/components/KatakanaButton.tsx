import React from "react";
import styled from "styled-components";

interface IProps {
  text: string;
  count: number;
}

export default ({ text, count }: IProps) => (
  <Wrapper>
    <Text>{text}</Text>
    <Count>{count}</Count>
  </Wrapper>
);

const Wrapper = styled.div`
  display: inline-block;
  height: 50px;
  font-size: 25px;
  line-height: 50px;
  background: #eaeef1;
  text-decoration: none;
  margin: 1em;
  border: 1px solid;
`;

const Text = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-right: 1px solid;
`;

const Count = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;
