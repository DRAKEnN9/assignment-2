"use client";

import { Card } from "@/components/ui/card";
import { Eye, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface StoryCardProps {
  imageUrl: string;
  views: number;
  title: string;
  category: string[];
  date: string;
  status: "Published" | "Draft" | "Created";
  onView: () => void;
  onMenu: () => void;
}

export function StoryCard({
  imageUrl,
  views,
  title,
  category,
  date,
  status,
  onView,
  onMenu,
}: StoryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const statusStyles = {
    Published: "bg-green-100 text-green-700",
    Draft: "bg-gray-100 text-slate-400",
    Created: "bg-sky-100 text-blue-400",
  }[status];

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []); // Empty dependency array remains

  return (
    <Card
      ref={cardRef}
      className={`relative sm:w-full h-[500px] rounded-[10px] p-0 overflow-hidden group 
        transition-all duration-500 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        } hover:-translate-y-2 shadow-lg hover:shadow-2xl`}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105 transform-gpu"
      />

      {/* Top indicators */}
      <div className="absolute top-3 right-3 flex items-center gap-2">
        <div
          className={`flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-sm transition-all duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          } group-hover:bg-white`}
        >
          <Eye size={16} className="text-indigo-950" />
          <span className="text-xs ml-1 font-medium text-gray-800">
            {views.toLocaleString()}
          </span>
        </div>
        <div
          className={`flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-sm transition-all duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/icons/status-up.svg"
            alt="Trend"
            width={16}
            height={16}
          />
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3 transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        } group-hover:from-black/100`}
      >
        <h3 className="text-white text-2xl font-semibold leading-snug">
          {title}
        </h3>

        <div className="mt-1 flex items-center text-sm text-gray-200">
          <span className="font-semibold">{category}</span>
          <span className="px-1">&bull;</span>
          <span className="text-gray-400">{date}</span>
          <span
            className={`ml-auto inline-block px-5 py-3 text-xs font-semibold rounded-sm ${statusStyles}`}
          >
            {status}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={onView}
            className="flex-1 bg-[#E8E8FF] text-[#4B4BFF] text-sm font-medium py-4 rounded-lg transition-transform duration-200 hover:scale-[1.02]"
          >
            View
          </button>
          <button
            onClick={onMenu}
            className="p-2 bg-white bg-opacity-90 rounded-lg hover:bg-opacity-100 transition-all duration-200 hover:rotate-12"
          >
            <MoreHorizontal size={36} className="text-gray-700" />
          </button>
        </div>
      </div>
    </Card>
  );
}
