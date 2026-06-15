import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ScrollToHash } from "./components/ScrollToHash";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { SportsRoastCaseStudyPage } from "./pages/SportsRoastCaseStudyPage";

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="projects/sports-roast" element={<SportsRoastCaseStudyPage />} />
        </Route>
      </Routes>
    </>
  );
}
