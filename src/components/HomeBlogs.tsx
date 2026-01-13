import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EdgeLinkButton } from "@/components/ui/edge-link-button";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  excerpt: string;
  categories: { title: string }[];
}

async function getRecentPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    categories[]->{
      title
    }
  }`;

  return client.fetch(query);
}

export default async function HomeBlogs() {
  const posts: Post[] = await getRecentPosts();

  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1F3D] mb-4">
              Latest Insights<span className="text-[#FF6B5A]">.</span>
            </h2>
            <p className="text-lg text-[#606060]">
              Stay updated with the latest trends, technologies, and innovations in the digital world.
            </p>
          </div>
          <EdgeLinkButton href="/blogs">View All Blogs</EdgeLinkButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              href={`/blogs/${post.slug.current}`}
              key={post._id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-lg transition-all duration-300 h-full"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                {post.mainImage ? (
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                {post.categories && post.categories.length > 0 && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#0175B2] text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                      {post.categories[0].title}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <div className="mb-3 flex items-center gap-2 text-xs text-[#94A3B8]">
                  <span>
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })
                      : "Recent"}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[#1A1F3D] mb-3 line-clamp-2 group-hover:text-[#0175B2] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-[#606060] text-sm line-clamp-3 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-[#0175B2] font-medium text-sm mt-auto">
                  Read More <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
