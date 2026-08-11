import "./style.scss";

import Hero from "./Hero";
import QuickStat from "./QuickStat";
import ModuleSection from "./ModuleSection";
import WardSection from "./WardSection";

export default function HomePage() {
    return (
        <div className="home-page">
            <Hero />

            <QuickStat />

            <ModuleSection />

            <WardSection />
        </div>
    );
}