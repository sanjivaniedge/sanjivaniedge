import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  excerpt: string;
  author: {
    name: string;
    image: any;
  };
  categories: { title: string }[];
  estimatedReadTime: number;
}

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    author->{
      name,
      image
    },
    categories[]->{
      title
    },
    estimatedReadTime
  }`;

  return client.fetch(query);
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogsPage() {
  const posts: Post[] = await getPosts();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F3D] mb-6">
            Insights & <span className="text-[#FF6B5A]">Updates</span>
          </h1>
          <p className="text-lg text-[#606060] max-w-2xl mx-auto">
            Explore our latest thoughts on technology, innovation, and digital transformation.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  href={`/blogs/${post.slug.current}`}
                  key={post._id}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-lg transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-contain md:object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-6">
                    <div className="flex items-center gap-2 mb-4">
                      {post.categories && post.categories.length > 0 && (
                        <span className="text-xs font-semibold text-[#0175B2] bg-[#E6F4FA] px-2 py-1 rounded-full">
                          {post.categories[0].title}
                        </span>
                      )}
                      <span className="text-xs text-[#94A3B8]">
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })
                          : ""}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-[#1A1F3D] mb-3 line-clamp-2 group-hover:text-[#FF6B5A] transition-colors">
                      {post.title}
                    </h2>

                    <div className="text-[#606060] text-sm line-clamp-3 mb-4 flex-grow">
                      {typeof post.excerpt === "string" ? (
                        post.excerpt
                      ) : (
                        <span className="italic">Click to read more</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0] mt-auto">
                      <div className="flex items-center gap-2">
                        {post.author?.image && (
                          <div className="relative w-8 h-8 rounded-full overflow-hidden">
                            <Image
                              src={urlFor(post.author.image).url()}
                              alt={post.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <span className="text-sm font-medium text-[#1A1F3D]">
                          {post.author?.name || "Sanjivani Team"}
                        </span>
                      </div>
                      {post.estimatedReadTime && (
                        <span className="text-xs text-[#94A3B8]">
                          {post.estimatedReadTime} min read
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E6F4FA] mb-6">
                <svg
                  className="w-8 h-8 text-[#0175B2]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1F3D] mb-2">
                No posts found
              </h3>
              <p className="text-[#606060]">
                We are currently crafting amazing content for you. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
