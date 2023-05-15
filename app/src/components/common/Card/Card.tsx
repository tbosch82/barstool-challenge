import "./card.css";

interface CardProps {
  children: JSX.Element | JSX.Element[];
}

export const Card = ({ children }: CardProps) => {
  return <div className="card">{children}</div>;
};
