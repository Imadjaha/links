import React from "react";
import "./Profile.css";
import "../App.css";

export type SocialLink = {
  icon: React.ReactNode;
  url: string;
  color?: string;
};

type Props = {
  image: string;
  title: string;
  description: string;
  socials?: SocialLink[];
};

const Profile: React.FC<Props> = ({ image, title, description, socials }) => {
  return (
    <div className="container">
      <img src={image} alt={title} className="avatar" />
      <h1 className="title">{title}</h1>
      <p className="subtitle">{description}</p>
      <div className="social-icons">
        {socials &&
          socials.map((social: SocialLink, index: number) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: social.color }}
            >
              {social.icon}
            </a>
          ))}
      </div>
    </div>
  );
};

export default Profile;
