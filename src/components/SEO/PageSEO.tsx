import siteMetadata from "@/data/siteMetadata";

import { CommonSEO } from "@/components/SEO/CommonSEO";

import { ISEO } from "@/types/ISEO";

export const PageSEO = ({ title, description }: Partial<ISEO>) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType='website'
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  );
};
