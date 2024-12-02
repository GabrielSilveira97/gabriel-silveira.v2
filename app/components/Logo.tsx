type LogoProps = {
    onClick?: () => void; // Define o tipo correto para a prop onClick
  };
  
  const Logo = ({ onClick }: LogoProps) => {
    return (
      <button
        className="logo text-2xl rounded-full"
        onClick={() => onClick && onClick()} // Executa a função somente se estiver definida
      >
        GS
      </button>
    );
  };
  
  export default Logo;
  