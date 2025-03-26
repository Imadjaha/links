import { useEffect, useState } from "react";

const Footer: React.FC<{}> = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    
      <div className="pt-lg-10 pt-5 footer">
        <p>Designed and developed by Code CrunchTik with ❤️</p>
        <p>{`© ${year}. All rights reserved `}</p>
      </div>
    
  );
};

export default Footer;
