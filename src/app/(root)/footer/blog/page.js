"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaBookOpen,
  FaCalendarDays,
  FaClock,
  FaChartBar,
  FaLightbulb,
  FaMicrochip,
  FaTrophy,
} from "react-icons/fa6";
import Container from "../../../../../components/Container";

/* =========================================================
   IMAGE
========================================================= */

function BlogImage({ article }) {
  return (
    <div className="relative h-[240px] w-full overflow-hidden rounded-t-2xl bg-gray-200">
      <img
        src={`https://picsum.photos/seed/${article.imageSeed}/1200/700`}
        alt={article.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#e21b23] shadow-md">
        {article.category}
      </div>
    </div>
  );
}

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  {
    title: "Best Products",
    articles: "115 Articles",
    icon: FaTrophy,
    href: "/blog?category=best-products",
  },
  {
    title: "Comparisons",
    articles: "35 Articles",
    icon: FaChartBar,
    href: "/blog?category=comparisons",
  },
  {
    title: "Buying Guides",
    articles: "63 Articles",
    icon: FaBookOpen,
    href: "/blog?category=buying-guides",
  },
  {
    title: "Tech Trends",
    articles: "71 Articles",
    icon: FaLightbulb,
    href: "/blog?category=tech-trends",
  },
];

/* =========================================================
   FEATURE ARTICLES
========================================================= */

const featureArticles = [
  {
    title:
      "HSC Approved Calculator Models in Bangladesh: Detailed Review, Features & Buying Guide",
    category: "Best Products",
    date: "22 Jul 2026",
    readTime: "5 Min. Read",
    description:
      "Find board-approved calculators for your HSC exams. Learn which models you can use in the hall.",
    imageSeed: "hsc-calculator-bangladesh",
    slug: "hsc-approved-calculator-models-in-bangladesh",
  },
  {
    title: "AC Buying Guide: How to Choose the Best Air Conditioner",
    category: "Buying Guides",
    date: "31 Mar 2026",
    readTime: "7 Min. Read",
    description:
      "The ultimate AC buying guide for Bangladesh. Tips for finding the best air conditioner!",
    imageSeed: "air-conditioner-buying-guide",
    slug: "ac-buying-guide",
  },
  {
    title: "Best Mini Fan in Bangladesh",
    category: "Best Products",
    date: "30 Apr 2026",
    readTime: "8 Min. Read",
    description:
      "Find the best mini fan in Bangladesh for 2026. Stay cool with top portable and rechargeable fans.",
    imageSeed: "mini-fan-bangladesh",
    slug: "best-mini-fan-in-bangladesh",
  },
  {
    title: "Laptop Buying Guide: Things to Consider When Choosing a Laptop",
    category: "Buying Guides",
    date: "24 Jun 2026",
    readTime: "14 Min. Read",
    description:
      "Your ultimate laptop buying guide 2026: smart, future-ready, and tailored to your needs.",
    imageSeed: "laptop-buying-guide",
    slug: "laptop-buying-guide",
  },
  {
    title: "Best Charger Fans in Bangladesh for Summer Power Cuts",
    category: "Best Products",
    date: "26 May 2026",
    readTime: "6 Min. Read",
    description:
      "Find the best charger fan in Bangladesh for 2026. Compare top rechargeable fans for power cuts.",
    imageSeed: "charger-fan-summer",
    slug: "best-charger-fans-in-bangladesh",
  },
  {
    title: "Top 5 Best Camera Phones in Bangladesh",
    category: "Best Products",
    date: "19 Aug 2026",
    readTime: "9 Min. Read",
    description:
      "A list of best camera phones in Bangladesh for 2026, showcasing features and photography capabilities.",
    imageSeed: "camera-phone-bangladesh",
    slug: "top-5-best-camera-phones-in-bangladesh",
  },
];

/* =========================================================
   LATEST ARTICLES
========================================================= */

const latestArticles = [
  {
    title: "Top 8 Best Phones Under 40000 in Bangladesh 2026",
    category: "Best Products",
    date: "24 Sep 2026",
    readTime: "9 Min. Read",
    description:
      "Confused about the best phone under 40000 in Bangladesh? Here are our top 8 picks for 2026.",
    imageSeed: "phones-under-40000",
    slug: "best-phones-under-40000-in-bangladesh-2026",
  },
  {
    title: "The Best Foldable Phones to Buy in 2026: Ultimate Buying Guide",
    category: "Best Products",
    date: "17 Sep 2026",
    readTime: "8 Min. Read",
    description:
      "Compare the best foldable phones in 2026 and find the right one for your needs in Bangladesh.",
    imageSeed: "foldable-smartphone",
    slug: "best-foldable-phones-to-buy-in-2026",
  },
  {
    title: "AirPods 5 vs AirPods 4: What’s New and Should You Upgrade",
    category: "Comparisons",
    date: "23 Sep 2026",
    readTime: "8 Min. Read",
    description:
      "Apple's AirPods 5 brings ANC to every model. Here's how it compares to AirPods 4.",
    imageSeed: "airpods-comparison",
    slug: "airpods-5-vs-airpods-4",
  },
  {
    title: "Top 10 Best Smart Watches for Ladies",
    category: "Best Products",
    date: "16 Sep 2026",
    readTime: "12 Min. Read",
    description:
      "Find the best ladies smart watches for style, fitness, health, and everyday use.",
    imageSeed: "smart-watch-ladies",
    slug: "top-10-best-smart-watches-for-ladies",
  },
  {
    title:
      "Apple Unveils Watch Series 12 and Ultra 4: Is It Worth Upgrading?",
    category: "Tech Trends",
    date: "11 Sep 2026",
    readTime: "8 Min. Read",
    description:
      "Apple Watch Series 12 and Ultra 4 bring new health, AI, fitness, and battery upgrades.",
    imageSeed: "apple-watch-ultra",
    slug: "apple-watch-series-12-and-ultra-4",
  },
  {
    title: "iPhone 18 Pro vs iPhone 17 Pro: Should You Upgrade?",
    category: "Comparisons",
    date: "23 Sep 2026",
    readTime: "6 Min. Read",
    description:
      "Compare the iPhone 18 Pro and 17 Pro to see if the upgrade is worth it.",
    imageSeed: "iphone-comparison",
    slug: "iphone-18-pro-vs-iphone-17-pro",
  },
  {
    title: "iPad vs Drawing Tablet: Which One Is Better for Digital Art?",
    category: "Comparisons",
    date: "10 Sep 2026",
    readTime: "8 Min. Read",
    description:
      "Compare iPad and drawing tablets to find the best device for digital art, design, and creativity.",
    imageSeed: "ipad-drawing-tablet",
    slug: "ipad-vs-drawing-tablet",
  },
  {
    title:
      "Apple Event 2026: iPhone Duo, iPhone 18 Pro, AI-Powered Siri and More",
    category: "Tech Trends",
    date: "10 Sep 2026",
    readTime: "11 Min. Read",
    description:
      "Apple unveils the iPhone Duo, iPhone 18 Pro, iOS 27 AI, new Watches, AirPods and more.",
    imageSeed: "apple-event",
    slug: "apple-event-2026",
  },
  {
    title:
      "The Complete iPad Guide: Setup, Features, Tips, and Troubleshooting",
    category: "Buying Guides",
    date: "10 Sep 2026",
    readTime: "11 Min. Read",
    description:
      "Learn how to set up, use, and troubleshoot your iPad with this complete 2026 beginner's guide.",
    imageSeed: "ipad-guide",
    slug: "complete-ipad-guide",
  },
  {
    title: "iPhone 18 Pro Launch Date: Apple Sets September 9 Event",
    category: "Tech Trends",
    date: "06 Sep 2026",
    readTime: "5 Min. Read",
    description:
      "Apple’s September 9 event may announce the iPhone 18 Pro, foldable iPhone Ultra, and new Apple devices.",
    imageSeed: "iphone-launch-event",
    slug: "iphone-18-pro-launch-date",
  },
  {
    title:
      "CCTV vs. WiFi Camera: Which Is Better For Home, Office, or Business?",
    category: "Comparisons",
    date: "31 Aug 2026",
    readTime: "10 Min. Read",
    description:
      "CCTV vs. WiFi camera: confused about which fits your home, office, or business? Let's clear it up fast.",
    imageSeed: "cctv-wifi-camera",
    slug: "cctv-vs-wifi-camera",
  },
  {
    title:
      "Best Blood Pressure Monitors for Home Use | Top 5 Easy-to-Use Choices",
    category: "Best Products",
    date: "12 Sep 2026",
    readTime: "11 Min. Read",
    description:
      "Find the best blood pressure monitors in Bangladesh for accurate home checks.",
    imageSeed: "blood-pressure-monitor",
    slug: "best-blood-pressure-monitors",
  },
];

/* =========================================================
   CATEGORY CARD
========================================================= */

function CategoryCard({ category }) {
  const Icon = category.icon;

  return (
    <Link
      href={category.href}
      className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#e21b23] hover:shadow-lg"
    >
      <div className="flex items-center gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-50 text-xl text-[#e21b23] transition duration-300 group-hover:bg-[#e21b23] group-hover:text-white">
          <Icon />
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#17212b]">
            {category.title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {category.articles}
          </p>
        </div>
      </div>
    </Link>
  );
}

/* =========================================================
   ARTICLE CARD
========================================================= */

function ArticleCard({ article }) {
  return (
    <article className="group rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* IMAGE */}
      <Link href={`/blog/${article.slug}`}>
        <BlogImage article={article} />
      </Link>

      {/* CONTENT */}
      <div className="p-5">
        <div className="mb-3 flex flex-wrap items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <FaCalendarDays className="text-[#e21b23]" />
            {article.date}
          </span>

          <span className="flex items-center gap-1.5">
            <FaClock className="text-[#e21b23]" />
            {article.readTime}
          </span>
        </div>

        <Link href={`/blog/${article.slug}`}>
          <h3 className="line-clamp-2 text-xl font-bold leading-8 text-[#17212b] transition hover:text-[#e21b23]">
            {article.title}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
          {article.description}
        </p>

        <Link
          href={`/blog/${article.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#e21b23] transition-all duration-200 hover:gap-3"
        >
          Read More
          <FaArrowRight />
        </Link>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function BlogPage() {
  return (
    <main className="bg-[#f7f8fa]">
      <Container>
             {/* HERO */}
      <section className="border-b border-gray-200 bg-[#fff">
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-[#e21b23]">
              <FaMicrochip />
              Star Tech Blog
            </div>

            <h1 className="text-3xl font-bold leading-tight text-[#17212b] sm:text-3xl lg:text-4xl">
              Tech Insights, Buying Guides & Reviews
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-500">
              Explore the latest technology news, product reviews,
              comparisons, buying guides and expert insights from the tech
              industry.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto bg-[#fff] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-[#17212b] sm:text-3xl">
            Featured Categories
          </h2>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Read insightful articles from top categories
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              category={category}
            />
          ))}
        </div>
      </section>

      {/* FEATURE ARTICLES */}
      <section className="mx-auto bg-[#fff] px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-[#17212b] sm:text-3xl">
            Feature Articles
          </h2>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Read the latest tech articles by the industry experts!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featureArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
            />
          ))}
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section className="bg-[#fff] py-14">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-7">
            <h2 className="text-2xl font-bold text-[#17212b] sm:text-3xl">
              Latest Article
            </h2>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              Read the latest tech articles by the industry experts!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {latestArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
              />
            ))}
          </div>
        </div>
      </section>
   </Container>
    </main>
  );
}