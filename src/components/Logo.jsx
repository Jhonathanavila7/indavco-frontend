import logoImage from '../assets/logo.png';

const Logo = ({ className = "", size = "normal" }) => {
  const sizes = {
  small: "h-20",
  normal: "h-24",
  large: "h-34"
};

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImage} 
        alt="Indavco Systems" 
        className={`${sizes[size]} w-auto`}
      />
    </div>
  );
};

export default Logo;