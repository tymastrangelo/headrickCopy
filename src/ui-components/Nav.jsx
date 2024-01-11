/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Nav(props) {
  const { overrides, ...rest } = props;
  const frameThreeTwoOneOnClick = useNavigateAction({ type: "url", url: "/" });
  const frameOnClick = useNavigateAction({ type: "url", url: "/new" });
  const OnClick = useNavigateAction({ type: "url", url: "/" });
  return (
    <Flex
      gap="48px"
      direction="row"
      width="320px"
      height="60px"
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(229,229,229,1)"
      {...getOverrideProps(overrides, "Nav")}
      {...rest}
    >
      <Image
        width="40px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="48px"
        direction="row"
        width="100px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        onClick={() => {
          frameThreeTwoOneOnClick();
        }}
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Projects"
          {...getOverrideProps(overrides, "text")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="24px"
        justifyContent="space-between"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        onClick={() => {
          frameOnClick();
        }}
        {...getOverrideProps(overrides, "Frame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.09px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="➕"
          onClick={() => {
            OnClick();
          }}
          {...getOverrideProps(overrides, "\u2795")}
        ></Text>
      </Flex>
    </Flex>
  );
}
