import React from "react";
import "./LinkCard.css";

type Props = {
  icon: React.ReactNode;
  title: string;
  url?: string;
  color?: string;
  highlight?: boolean;
};

const LinkCard: React.FC<Props> = ({ icon, title, url,color,highlight }) => {
  
  const cardStyle: React.CSSProperties = {
    backgroundColor: highlight ? color || "#ff4757" : "#fff",
    color: highlight ? "#fff" : color || "#111",
    boxShadow: highlight
      ? "0 4px 15px rgba(255, 71, 87, 0.4)"
      : "0 2px 6px rgba(0, 0, 0, 0.05)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    fontWeight: 500,
  };
  
  const content = (
    <div className="link-card" style={cardStyle}>
      <div className="icon">{icon}</div>
      <span className="text"> {title}</span>
    </div>
  );

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {content}
    </a>
  ) : (
    content
  );
};

export default LinkCard;
