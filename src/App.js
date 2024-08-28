import { useEffect, useState } from "react";
import "./App.css";
import TempModal from "./components/modals/TempModal";
import Layout from "./components/layout/Layout";
import Card from "./components/card/Card";
import Hero from "./components/hero/Hero";
import Section from "./components/section/Section";
import sect10 from "./assets/sect10.png"
import sect11 from "./assets/sect11.png"
import sect12 from "./assets/sect12.png"
import sect20 from "./assets/sect20.png"
import sect21 from "./assets/sect21.png"
import sect22 from "./assets/sect22.png"
import sect23 from "./assets/sect23.png"
import sect30 from "./assets/sect30.png"
import sect31 from "./assets/sect31.png"
import sect32 from "./assets/sect32.png"
import sect40 from "./assets/sect40.png"
import sect41 from "./assets/sect41.png"
import sect42 from "./assets/sect42.png"
function App() {
  const [open, setOpen] = useState(true);
// adding comments
  useEffect(() => {
    // Show the modal after 1 second
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Layout>
      <Hero />
      <Section title="Popular Tracks" showAllLink="/">
        <div className="card-grid">
          <Card
            image={sect10}
            title="Asylum"
            subtitle="Artist Name"
            size="large"
          />
          <Card
            image={sect11}
            title="Higher"
            subtitle="Artist Name"
            size="large"
          />
          <Card
            image={sect12}
            title="Humble"
            subtitle="Artist Name"
            size="large"
          />
          <Card
            image={sect12}
            title="Unavailable"
            subtitle="Artist Name"
            size="large"
          />
        </div>
      </Section>

      <Section title="Recommended Tracks" showAllLink="/">
        <div className="card-grid">
          <Card
            image={sect20}
            title="To Last"
            subtitle="Artist Name"
            size="medium"
          />
          <Card
            image={sect21}
            title="Tshwala Bam"
            subtitle="Artist Name"
            size="medium"
          />
          <Card
            image={sect22}
            title="Dumebi"
            subtitle="Artist Name"
            size="medium"
          />
          <Card
            image={sect23}
            title="No Dey Form"
            subtitle="Artist Name"
            size="medium"
          />
          <Card
            image={sect23}
            title="Organise"
            subtitle="Artist Name"
            size="medium"
          />
        </div>
      </Section>

      <Section title="My Playlists" showAllLink="/">
        <div className="card-grid">
          <Card
            image={sect30}
            title="Amapiano Vybz"
            subtitle="Playlist Subtitle"
            size="large"
          />
          <Card
            image={sect31}
            title="Nigeria's Finest"
            subtitle="Playlist Subtitle"
            size="large"
          />
          <Card
            image={sect32}
            title="Afrobeats"
            subtitle="Playlist Subtitle"
            size="large"
          />
          <Card
            image={sect32}
            title="Old School Africa"
            subtitle="Playlist Subtitle"
            size="large"
          />
        </div>
      </Section>

      <Section title="Nigerian Charts" showAllLink="/">
        <div className="card-grid">
          <Card
            image={sect40}
            title="Higher"
            subtitle="Artist Name"
            size="small"
          />
          <Card
            image={sect41}
            title="Higher"
            subtitle="Artist Name"
            size="small"
          />
          <Card
            image={sect42}
            title="Higher"
            subtitle="Artist Name"
            size="small"
          />
          <Card
            image={sect41}
            title="Higher"
            subtitle="Artist Name"
            size="small"
          />
          <Card
            image={sect40}
            title="Higher"
            subtitle="Artist Name"
            size="small"
          />
        </div>
      </Section>
      {/* <TempModal open={open} handleClose={() => setOpen(false)} /> */}
    </Layout>
  );
}

export default App;
