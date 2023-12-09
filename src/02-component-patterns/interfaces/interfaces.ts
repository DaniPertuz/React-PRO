import { ReactElement } from 'react';

export interface ProductProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardProps {
  ({ children, product }: ProductProps): JSX.Element;
  Image: ({ img }: { img?: string; }) => JSX.Element;
  Title: ({ title }: { title?: string; }) => JSX.Element;
  Buttons: () => JSX.Element;
}