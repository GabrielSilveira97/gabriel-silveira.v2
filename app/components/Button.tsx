import Link from "next/link";

type ButtonProps = {
    label: string;
    link: string
  };
  
  const Button = ({ label, link }: ButtonProps) => {
    return (
      <Link href={link} target="blank" className="botao">
        {label}
      </Link>
    );
  };
  
  export default Button;
  
