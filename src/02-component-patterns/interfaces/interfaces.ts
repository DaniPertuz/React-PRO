import { ReactElement } from 'react';
import { ProductTitleProps } from '../components/ProductTitle';
import { ProductImageProps } from '../components/ProductImage';
import { ProductButtonProps } from '../components/ProductButtons';

export interface ProductProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardProps {
  ({ children, product }: ProductProps): JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Buttons: (Props: ProductButtonProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}