import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { SiTiktok } from "react-icons/si";
import LinkCard from "./components/LinkCard";
import Profile, { SocialLink } from "./components/Profile";
import Footer from "./components/Footer";
import "./App.css";
import coverImage from "./assets/codecrunchtikpic.png";

const socials: SocialLink[] = [
  {
    icon: <LiaLinkedinIn size={24} />,
    url: "https://www.linkedin.com/in/aimad-bouchouaf/",
  },
  {
    icon: <FaGithub size={24} />,
    url: "https://github.com/Imadjaha/coding-short",
    color: "red",
  },
  {
    icon: <FaInstagram size={24} />,
    url: "https://www.instagram.com/codecrunchtik/#",
  },
  {
    icon: <SiTiktok size={24} />,
    url: "https://www.tiktok.com/@codecrunchtik?_t=zn-8snqjwixbl0&_r=1",
  },
  {
    icon: <FaYoutube size={24} />,
    url: "https://www.youtube.com/@codecrunchtik",
  },
  {
    icon: <FaGithub size={24} />,
    url: "https://github.com/Imadjaha",
  },
];

function App() {
  return (
    <div className="container">
      <Profile
        image={coverImage}
        title="Code CrunchTik"
        description="🌟 Enhance Your Coding Skills ✨"
        socials={socials}
      />
      <div className="links">
        <LinkCard
          icon={<FaGithub size={40} />}
          title="Source Code"
          url={socials[1].url}
          
          highlight={true}
        />

        <LinkCard
          icon={<SiTiktok size={40} />}
          title="Tiktok"
          url={socials[3].url}
        />
        <LinkCard
          icon={<FaYoutube size={40} />}
          title="YouTube Channel"
          url={socials[4].url}
          color="red"
        />
        <LinkCard
          icon={<FaInstagram size={40} />}
          title="Instagram"
          url={socials[2].url}
          color="darkred"
        />
        <LinkCard
          icon={<FaGithub size={40} />}
          title="Connect with me on GitHub"
          url={socials[5].url}
        />
        <LinkCard
          icon={<LiaLinkedinIn size={40} />}
          title="Connect with me on Linkedin"
          url={socials[0].url}
          color="blue-300"
          
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
