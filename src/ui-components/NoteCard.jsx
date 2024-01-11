/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Auth } from "@aws-amplify/auth";
import { API } from "aws-amplify";
import { deleteNote } from "../graphql/mutations";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function NoteCard(props) {
  const { note, overrides, ...rest } = props;
  const imageOnClick = useNavigateAction({
    type: "url",
    url: `${"/edit/"}${note?.id}`,
  });
  const frameFourOneNineOneSixFiveTwoOnClick = useNavigateAction({
    type: "url",
    url: `${"/edit/"}${note?.id}`,
  });
  const frameFourOneThreeFiveSixZeroOnClick = async () => {
    const user = await Auth.currentAuthenticatedUser();
    if(user.attributes.email=note.author){
    await API.graphql({
      query: deleteNote.replaceAll("__typename", ""),
      variables: {
        input: {
          id: note?.id,
        },
      },
    });
    frameFourOneThreeFiveSixZeroOnMouseUp(); //MrH
  }
  };
  const frameFourOneThreeFiveSixZeroOnMouseUp = useNavigateAction({
    type: "url",
    url: "/",
  });
  const sitenameOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: note?.description,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NoteCard")}
      {...rest}
    >
      <View
        width="320px"
        height="160px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 322")}
      >
        <Image
          width="320px"
          height="160px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={note?.image}
          onClick={() => {
            imageOnClick();
          }}
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          position="absolute"
          top="131px"
          left="290px"
          padding="0px 0px 0px 0px"
          onClick={() => {
            frameFourOneNineOneSixFiveTwoOnClick();
          }}
          {...getOverrideProps(overrides, "Frame4191652")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="edit"
            {...getOverrideProps(overrides, "MyIcon4191660")}
          ></MyIcon>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="24px"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          position="absolute"
          top="131px"
          left="4px"
          padding="0px 0px 0px 0px"
          onClick={() => {
            frameFourOneThreeFiveSixZeroOnClick();
          }}
          // onMouseUp={() => {
          //   frameFourOneThreeFiveSixZeroOnMouseUp();
          // }}
          {...getOverrideProps(overrides, "Frame413560")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="delete"
            {...getOverrideProps(overrides, "MyIcon413549")}
          ></MyIcon>
        </Flex>
      </View>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="124px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={note?.name}
            onClick={() => {
              sitenameOnClick();
            }}
            {...getOverrideProps(overrides, "site name")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={note?.author}
            {...getOverrideProps(overrides, "author")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
