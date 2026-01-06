import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const revalidate = 60;

// Helper to convert blocks to plain text
function toPlainText(blocks: any = []) {
  if (typeof blocks === 'string') return blocks;
  if (!blocks || !Array.isArray(blocks)) return '';
  return blocks
    .map((block: any) => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return block.children.map((child: any) => child.text).join('');
    })
    .join('\n\n');
}

interface PostProps {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    body,
    author->{
      name,
      image,
      bio
    },
    categories[]->{
      title
    },
    estimatedReadTime,
    faqs,
    seo
  }`;

  return client.fetch(query, { slug });
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | Sanjivani Edge",
    };
  }

  return {
    title: post.seo?.metaTitle || `${post.title} | Sanjivani Edge`,
    description: post.seo?.metaDescription || toPlainText(post.excerpt),
    openGraph: {
      images: post.mainImage ? [urlFor(post.mainImage).url()] : [],
    },
  };
}

// Helper to generate IDs for headings
const generateId = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

const ptComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full h-96 my-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={urlFor(value).fit("max").auto("format").url()}
            alt={value.alt || "Post image"}
            fill
            className="object-contain"
          />
        </div>
      );
    },
    table: ({ value }: any) => {
      let parsedRows = [];
      try {
        if (value.rows) {
          parsedRows = JSON.parse(value.rows);
        }
      } catch (e) {
        console.error("Failed to parse table rows", e);
        return null;
      }

      if (parsedRows.length === 0) return null;

      return (
        <div className="my-8">
          {value.caption && (
            <div className="text-center text-sm text-gray-500 mb-2 font-medium">
              {value.caption}
            </div>
          )}
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200 bg-white">
              <thead className="bg-gray-50">
                <tr>
                  {Object.keys(parsedRows[0]).map((key) => (
                    <th
                      key={key}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {parsedRows.map((row: any, idx: number) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100 transition-colors"}>
                    {Object.values(row).map((val: any, i) => (
                      <td
                        key={i}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-600"
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    },
  },
  block: {
    h1: ({ children, value }: any) => (
      <h1 id={generateId(value.children[0].text)} className="scroll-mt-24 text-4xl font-bold text-[#1A1F3D] mt-12 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children, value }: any) => (
      <h2 id={generateId(value.children[0].text)} className="scroll-mt-24 text-3xl font-bold text-[#1A1F3D] mt-10 mb-5 pb-2 border-b border-gray-200">
        {children}
      </h2>
    ),
    h3: ({ children, value }: any) => (
      <h3 id={generateId(value.children[0].text)} className="scroll-mt-24 text-2xl font-bold text-[#1A1F3D] mt-8 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children, value }: any) => (
      <h4 id={generateId(value.children[0].text)} className="scroll-mt-24 text-xl font-bold text-[#1A1F3D] mt-6 mb-3">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg text-[#4A5568] leading-relaxed mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#0175B2] pl-4 italic text-gray-700 my-8 bg-gray-50 py-4 pr-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="text-[#0175B2] hover:underline font-medium hover:text-[#015a8a] transition-colors"
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-[#4A5568]">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-[#4A5568]">{children}</ol>,
  },
};

export default async function BlogPostPage({ params }: PostProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  // Parse faqs if it exists
  let parsedFaqs = [];
  try {
    if (post.faqs) {
      parsedFaqs = JSON.parse(post.faqs);
    }
  } catch (e) {
    console.error("Failed to parse faqs", e);
  }

  // Extract headings for Table of Contents
  const headings = post.body
    ?.filter((block: any) => block._type === "block" && block.style?.startsWith("h"))
    .map((block: any) => ({
      text: block.children?.[0]?.text || "",
      id: generateId(block.children?.[0]?.text || ""),
      level: parseInt(block.style.replace("h", "")),
    }));

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 text-sm text-[#606060]">
            <Link href="/blogs" className="hover:text-[#0175B2] transition-colors font-medium whitespace-nowrap">
              &larr; Back to Blogs
            </Link>
            {post.categories && post.categories.length > 0 && (
              <>
                <span className="hidden sm:inline">•</span>
                <span className="text-[#0175B2] font-semibold bg-[#E6F4FA] px-3 py-1 rounded-full text-xs uppercase tracking-wide whitespace-nowrap">
                  {post.categories[0].title}
                </span>
              </>
            )}
            <span className="hidden sm:inline">•</span>
            <span className="whitespace-nowrap">
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : ""}
            </span>
            {post.estimatedReadTime && (
              <>
                <span className="hidden sm:inline">•</span>
                <span className="whitespace-nowrap">{post.estimatedReadTime} min read</span>
              </>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1F3D] mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>

          {/* <div className="flex justify-end items-center gap-4">
            {post.author?.image && (
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <div className="font-bold text-[#1A1F3D] text-lg">
                {post.author?.name || "Sanjivani Team"}
              </div>
              <div className="text-sm text-[#606060]">
                {post.author?.bio ? (
                  Array.isArray(post.author.bio) ? (
                    <PortableText value={post.author.bio} />
                  ) : (
                    post.author.bio
                  )
                ) : (
                  "Author"
                )}
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Main Image */}
      {post.mainImage && (
        <section className="px-4 mb-4 relative z-10">
          <div className="max-w-6xl mx-auto relative h-[200px] md:h-[600px] rounded-3xl overflow-hidden ">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-contain transition-transform duration-700"
              priority
            />
          </div>
        </section>
      )}

      {/* Content Layout with Sidebar */}
      <section className="px-4 pb-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Table of Contents - Hidden on mobile, sticky on desktop */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 p-6 bg-[#F8FAFC] rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-[#1A1F3D] mb-4 uppercase tracking-wider text-sm">Table of Contents</h3>
              <nav className="space-y-1">
                {headings?.map((heading: any) => (
                  <Link
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block text-sm py-1.5 transition-colors hover:text-[#0175B2] ${
                      heading.level === 1 ? "font-bold text-[#1A1F3D]" :
                      heading.level === 2 ? "font-medium text-[#4A5568] ml-0" :
                      heading.level === 3 ? "text-[#606060] ml-4" :
                      "text-[#606060] ml-6"
                    }`}
                  >
                    {heading.text}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Article Content */}
          <article className="lg:col-span-9 max-w-4xl">
            {/* Mobile TOC */}
            <div className="lg:hidden mb-12 bg-[#F8FAFC] p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-[#1A1F3D] mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                 {headings?.map((heading: any) => (
                  <Link
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block text-sm py-1 hover:text-[#0175B2] ${
                      heading.level > 2 ? "ml-4" : ""
                    }`}
                  >
                    {heading.text}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="prose prose-lg prose-headings:text-[#1A1F3D] prose-p:text-[#4A5568] prose-a:text-[#0175B2] prose-a:font-medium prose-img:rounded-xl max-w-none">
              <PortableText value={post.body} components={ptComponents} />
            </div>

            {/* Render FAQs if data exists */}
            {parsedFaqs.length > 0 && (
              <div className="mt-16 border-t border-gray-200 pt-12">
                <h3 className="text-3xl font-bold text-[#1A1F3D] mb-8">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {parsedFaqs.map((faq: any, idx: number) => (
                    <div key={idx} className="bg-[#F8FAFC] p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-bold text-[#1A1F3D] mb-3">{faq.question}</h4>
                      <p className="text-[#4A5568] leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </section>
    </main>
  );
}
