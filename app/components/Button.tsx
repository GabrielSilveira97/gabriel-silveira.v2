import Link from "next/link";

type ButtonProps = {
    label: string;
    link: string;
    target: string
  };
  
  const Button = ({ label, link, target }: ButtonProps) => {
    return (
      <Link href={link} target={target} className="botao">
        {label}
      </Link>
    );
  };
  
  export default Button;
  
