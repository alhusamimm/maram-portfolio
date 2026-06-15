import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Portfolio from "@/pages/Portfolio";
import AcademicPage from "@/pages/AcademicPage";
import CoursePage from "@/pages/CoursePage";
import DeepXposePage from "@/pages/DeepXposePage";
import { useTheme } from "@/hooks/useTheme";

function App() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="App min-h-screen bg-[#00132d] text-[#E5E7EB] font-body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/academic" element={<AcademicPage />} />
          <Route path="/academic/:slug" element={<CoursePage />} />
          <Route path="/project/deepxpose" element={<DeepXposePage />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        theme={isDark ? "dark" : "light"}
        position="bottom-right"
        toastOptions={{
          style: isDark
            ? {
                background: "rgba(0, 30, 69, 0.95)",
                border: "1px solid rgba(125, 211, 252, 0.3)",
                color: "#E5E7EB",
                backdropFilter: "blur(12px)",
              }
            : {
                background: "rgba(255, 255, 255, 0.98)",
                border: "1px solid rgba(0, 45, 103, 0.15)",
                color: "#0B1B36",
                backdropFilter: "blur(12px)",
                boxShadow: "0 10px 30px rgba(0, 45, 103, 0.15)",
              },
        }}
      />
    </div>
  );
}

export default App;
