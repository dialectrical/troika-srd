import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import { StyledTypography } from "./styles/StyledTypography";

export const GetBackgrounds = () => {
  const [backgroundData, setBackgroundData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "background"] {
      number,
      title,
      slug,
      body,
      items,
      skills,
      special
    }`
      )
      .then(data =>
        setBackgroundData(
          data.sort(function(a, b) {
            return a.number - b.number;
          })
        )
      )
      .catch(console.error);
  }, []);

  if (!backgroundData)
    return <StyledTypography variant="h2">Loading...</StyledTypography>;

  return (
    <div>
      {backgroundData &&
        backgroundData.map((background, index) => {
          return (
            <div>
              <StyledTypography variant="h4">
                {background.number}. {background.title}
              </StyledTypography>
              <StyledTypography paragraph>
                <BlockContent
                  blocks={background.body}
                  projectId={sanityClient.clientConfig.projectID}
                  dataset={sanityClient.clientConfig.dataset}
                />
              </StyledTypography>
              <StyledTypography variant="h5">Possessions</StyledTypography>
              <StyledTypography paragraph>
                <BlockContent
                  blocks={background.items}
                  projectId={sanityClient.clientConfig.projectID}
                  dataset={sanityClient.clientConfig.dataset}
                />
              </StyledTypography>
              <StyledTypography variant="h5">Advanced Skills</StyledTypography>
              <StyledTypography paragraph>
                <BlockContent
                  blocks={background.skills}
                  projectId={sanityClient.clientConfig.projectID}
                  dataset={sanityClient.clientConfig.dataset}
                />
              </StyledTypography>
              {background.special ? (
                <StyledTypography variant="h5">Special</StyledTypography>
              ) : (
                ""
              )}
              <StyledTypography paragraph>
                <BlockContent
                  blocks={background.special}
                  projectId={sanityClient.clientConfig.projectID}
                  dataset={sanityClient.clientConfig.dataset}
                />
              </StyledTypography>
            </div>
          );
        })}
    </div>
  );
};
