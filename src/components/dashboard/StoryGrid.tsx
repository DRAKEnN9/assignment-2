// src/components/dashboard/StoryGrid.tsx
"use client";

import { StoryCard } from "./StoryCard";

const sampleStories = [
  {
    imageUrl: "/images/d146146865a8273af2cbbc88616b1353aee1e51d.jpg",
    views: 428,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: ["BUSINESS"],
    date: "20 Sep 2022",
    status: "Published" as const,
  },
  {
    imageUrl: "/images/946088e41fcf6ae1c41573d1edb5f8df03f55286.jpg",
    views: 428,
    title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    category: ["BUSINESS"],
    date: "20 Sep 2022",
    status: "Created" as const,
  },
  {
    imageUrl: "/images/76f2c230759217edfe5f1a091005f8427421914b.jpg",
    views: 428,
    title: "Teknion wins Gold at 2022 International Design Awards",
    category: ["Politics"],
    date: "20 Sep 2022",
    status: "Draft" as const,
  },
  {
    imageUrl: "/images/8961e90a522b89a6e06ce18044367a842aca9275.jpg",
    views: 428,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: ["BUSINESS"],
    date: "20 Sep 2022",
    status: "Published" as const,
  },
  {
    imageUrl: "/images/50055e068d3e793d787c742e2bf6bd084b39469f (1).jpg",
    views: 428,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: ["BUSINESS"],
    date: "20 Sep 2022",
    status: "Published" as const,
  },
  {
    imageUrl: "/images/e7f0d0f053fb3c59a997fb80d8b633a9081c0d9e.jpg",
    views: 428,
    title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    category: ["BUSINESS"],
    date: "20 Sep 2022",
    status: "Published" as const,
  },
  {
    imageUrl: "/images/e6f2d69706f0253506c9330c8d41d69a81543c7c.jpg",
    views: 428,
    title: "Teknion wins Gold at 2022 International Design Awards",
    category: ["Pilitics"],
    date: "20 Sep 2022",
    status: "Published" as const,
  },
  {
    imageUrl: "/images/50055e068d3e793d787c742e2bf6bd084b39469f (1).jpg",
    views: 428,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: ["BUSINESS"],
    date: "20 Sep 2022",
    status: "Published" as const,
  },
  {
    imageUrl: "/images/e6f2d69706f0253506c9330c8d41d69a81543c7c.jpg",
    views: 428,
    title: "Teknion wins Gold at 2022 International Design Awards",
    category: ["Pilitics"],
    date: "20 Sep 2022",
    status: "Published" as const,
  },
  {
    imageUrl: "/images/50055e068d3e793d787c742e2bf6bd084b39469f (1).jpg",
    views: 428,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: ["BUSINESS"],
    date: "20 Sep 2022",
    status: "Published" as const,
  },
  {
    imageUrl: "/images/50055e068d3e793d787c742e2bf6bd084b39469f (1).jpg",
    views: 428,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: ["BUSINESS"],
    date: "20 Sep 2022",
    status: "Published" as const,
  },
  {
    imageUrl: "/images/e6f2d69706f0253506c9330c8d41d69a81543c7c.jpg",
    views: 428,
    title: "Teknion wins Gold at 2022 International Design Awards",
    category: ["Pilitics"],
    date: "20 Sep 2022",
    status: "Published" as const,
  },
  {
    imageUrl: "/images/50055e068d3e793d787c742e2bf6bd084b39469f (1).jpg",
    views: 428,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: ["BUSINESS"],
    date: "20 Sep 2022",
    status: "Published" as const,
  },
  {
    imageUrl: "/images/50055e068d3e793d787c742e2bf6bd084b39469f (1).jpg",
    views: 428,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: ["BUSINESS"],
    date: "20 Sep 2022",
    status: "Published" as const,
  },
  // …add more items as needed
];

export function StoryGrid() {
  return (
    <div
      className="
        grid 
        md:px-5
        sm:px-0
        grid-cols-[repeat(auto-fit,minmax(340px,1fr))] 
        justify-center 
        gap-6
      "
    >
      {sampleStories.map((s) => (
        <StoryCard
          key={s.title}
          {...s}
          onView={() => {
            console.log("View clicked for:", s.title);
          }}
          onMenu={() => {
            console.log("Menu clicked for:", s.title);
          }}
        />
      ))}
    </div>
  );
}
