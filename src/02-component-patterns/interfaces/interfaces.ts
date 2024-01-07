// import { ReactElement } from 'react';
import { ProductTitleProps } from '../components/ProductTitle';
import { ProductImageProps } from '../components/ProductImage';
import { ProductButtonProps } from '../components/ProductButtons';

export interface ProductProps {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
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
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
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

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}