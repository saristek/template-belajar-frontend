/* eslint-disable react/display-name */
import { LinkButton } from '@dlarroder/playground'
import type { Authors, Blog } from 'contentlayer/generated'
import type { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { coreContent } from '@/lib/utils/contentLayer'

import CustomLink from '@/components/CustomLink'
import Image from '@/components/Image'
import Pre from '@/components/Post/Pre'
import TOCInline from '@/components/Post/TOCInline'

interface IWrappedLayout {
  layout: string
  content: Blog | Authors
  [key: string]: unknown
}


const WrappedLayout: React.FC<IWrappedLayout> = ({ layout, content, ...rest }) => {
  // const Layout = dynamic<Partial<IWrappedLayout>>(
  //   () => {
  //     return import(`@/components/layouts/mdx/${layout}`)
  //   },
  //   { ssr: false }
  // )

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Layout = require(`@/components/layouts/mdx/${layout}`).default

  return <Layout content={content} {...rest} />
}


export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: WrappedLayout,
  LinkButton,
}


const LayoutRenderer = ({ layout, content, ...rest }: IWrappedLayout) => {
  const MDXLayout = useMDXComponent(content.body.code)
  const mainContent = coreContent(content)

  return <MDXLayout layout={layout} content={mainContent} components={components} {...rest} />
}
export default LayoutRenderer