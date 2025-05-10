import Link from "next/link";

type ButtonProps = {
    label: string;
  };
  
  const Button = ({ label }: ButtonProps) => {
    return (
      <Link href={'/cv-gabriel-silveira.pdf'} target="blank" className="botao">
        {label}
      </Link>
    );
  };
  
  export default Button;
  
