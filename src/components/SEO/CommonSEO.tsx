import Head from "next/head";
import { usePathname } from "next/navigation";

import siteMetadata from "@/data/siteMetadata";

import { ISEO } from "@/types/ISEO";

export const CommonSEO = ({
  title,
  description,
  ogType,
  ogImage,
  twImage,
  canonicalUrl,
}: Partial<ISEO>) => {
  const pathname = usePathname();
  return (
    <Head>
      <title>{title}</title>
      <meta name='robots' content='follow, index' />
      <meta name='description' content={description} />
      <meta property='og:url' content={`${siteMetadata.siteUrl}${pathname}`} />
      <meta property='og:type' content={ogType} />
      <meta property='og:site_name' content={siteMetadata.title} />
      <meta property='og:description' content={description} />
      <meta property='og:title' content={title} />
      {ogImage.constructor.name === 'Array' ? (
        ogImage.map(({ url }: { url: string }) => (
          <meta property='og:image' content={url} key={url} />
        ))
      ) : (
        <meta property='og:image' content={ogImage} key={ogImage} />
      )}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={siteMetadata.twitter} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={twImage} />
      <link
        rel='canonical'
        href={
          canonicalUrl ? canonicalUrl : `${siteMetadata.siteUrl}${pathname}`
        }
      />
    </Head>
  );
};