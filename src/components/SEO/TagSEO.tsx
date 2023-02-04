import Head from "next/head";
import { usePathname } from "next/navigation";

import siteMetadata from "@/data/siteMetadata";

import { CommonSEO } from "@/components/SEO/CommonSEO";

import { ISEO } from "@/types/ISEO";

export const TagSEO = ({ title, description }: Partial<ISEO>) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const pathname = usePathname();
  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        ogType='website'
        ogImage={ogImageUrl}
        twImage={twImageUrl}
      />
      <Head>
        <link
          rel='alternate'
          type='application/rss+xml'
          title={`${description} - RSS feed`}
          href={`${siteMetadata.siteUrl}${pathname}/feed.xml`}
        />
      </Head>
    </>
  );
};