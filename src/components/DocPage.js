import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import { StyledTypography } from "./styles/StyledTypography";

export const DocPage = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug] {
      title,
      slug,
      body,
    }`,
        { slug }
      )
      .then(data => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  console.log(postData);

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
    </div>
  );
};
