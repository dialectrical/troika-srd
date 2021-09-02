import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "f06ms0zp",
  dataset: "production",
  useCdn: true
});
