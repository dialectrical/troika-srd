import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import { StyledTypography } from "./styles/StyledTypography";

export const BackgroundPage = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug] {
      number,
      title,
      slug,
      body,
      items,
      skills
    }`,
        { slug }
      )
      .then(data => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData)
    return <StyledTypography variant="h2">Loading...</StyledTypography>;

  return (
    <div>
      <StyledTypography variant="h2">
        {postData.number}. {postData.title}
      </StyledTypography>
      <StyledTypography paragraph>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectID}
          dataset={sanityClient.clientConfig.dataset}
        />
      </StyledTypography>
      <StyledTypography variant="h3">Possessions</StyledTypography>
      <StyledTypography paragraph>
        <BlockContent
          blocks={postData.items}
          projectId={sanityClient.clientConfig.projectID}
          dataset={sanityClient.clientConfig.dataset}
        />
      </StyledTypography>
      <StyledTypography variant="h3">Advanced Skills</StyledTypography>
      <StyledTypography paragraph>
        <BlockContent
          blocks={postData.skills}
          projectId={sanityClient.clientConfig.projectID}
          dataset={sanityClient.clientConfig.dataset}
        />
      </StyledTypography>
    </div>
  );
};
