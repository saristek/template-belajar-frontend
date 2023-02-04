import { Blog } from "contentlayer/generated"

import { CoreContent } from "@/lib/utils/contentLayer"

export interface IPostCard {
  posts: CoreContent<Blog>[]
  showTags?: boolean
}