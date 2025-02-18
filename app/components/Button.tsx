import Link from "next/link";

type ButtonProps = {
    label: string;
  };
  
  const Button = ({ label }: ButtonProps) => {
    return (
      <Link href={'/CV-Gabriel-Silveira.pdf'} className="botao">
        {label}
      </Link>
    );
  };
  
  export default Button;
  
