import React from "react";
//import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import AiInterviewImg from "@/public/AiInterview.jpg";
import contentgeneratorImg from "@/public/contentgenerator.png";
//import wordanalyticsImg from "@/public/wordanalytics.png";
import xyzImg from "@/public/xyz.jpeg";
import abcImg from "@/public/abc.jpeg";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Schooling",
    location: "Vatsalya Public School",
    description:
      "I have completed my Intermediate from PCM with an aggregate of 86% and Class Xth with 95%.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Undergraduate",
    location: "ABES Engineering College, Ghaziabad",
    description:
      "Currently I am a final-year student pursuing B.tech from Computer Science Stream with specialization in Data Science  Where i have excelled many of the techincal tools and skills.",
    icon:  React.createElement(LuGraduationCap),
    date: "2021- 2025",
  },
  {
    title: "Research Intern",
    location: "IIIT Delhi",
    description:
      "I have worked as a Intern at IIIT Delhi where I had researched on the topic of following - Simulated signal-to-noise ratio (SNR) distributions using Poisson and Uniform distributions for multiple access points (4 LiFi, 1 WiFi).Developed machine learning models to predict optimal access point allocation and estimate throughput based on SNR and user distribution.",
    icon: React.createElement(FaReact),
    date: "Aug 2024 - Sept 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Sorting Visualizer",
    description:
      "This is a sorting visualizer which will help the user to visualize the sorting algorithms like bubble sort, selection sort, insertion sort, quick sort and merge sort.",
    tags: ["JavaScript", "React", "CSS"],
    imageUrl: xyzImg,
   
  
  },
  {
    title: "Brightness Control with hand detection",
    description:
      "This is a brightness control system which will help the user to control the brightness of the screen with the help of hand detection.",
    tags: ["Python", "Machine Learning", "OPEN - CV"],
    imageUrl: abcImg,
  },
  /*{
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },*/
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "BootStrap",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Supabase",
  "Express",
  "PostgreSQL",
  "Python",
  "FireBase",
  "Framer Motion",
  "GSAP",
  "Machine Learning",
  "OpenCV",
  "Data Science",
] as const;
