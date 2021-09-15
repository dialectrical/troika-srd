import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import { StyledTypography } from "./styles/StyledTypography";
import { GetBackgrounds } from "./GetBackgrounds";

export const BackgroundPage = () => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && title == "Character Creation"] {
      title,
      slug,
      body,
    }`
      )
      .then(data => setPostData(data[0]))
      .catch(console.error);
  }, []);

  if (!postData)
    return <StyledTypography variant="h2">Loading...</StyledTypography>;

  return (
    <div>
      <StyledTypography variant="h2">{postData.title}</StyledTypography>
      <StyledTypography paragraph>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectID}
          dataset={sanityClient.clientConfig.dataset}
        />
      </StyledTypography>
      <div>
        <GetBackgrounds />
      </div>
    </div>
  );
};
