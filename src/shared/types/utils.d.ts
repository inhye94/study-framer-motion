// PolymorphicComponent
export type AsPropType<T extends React.ElementType> = {
  as?: T;
};

export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = {}
> = AsPropType<T> &
  Props &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Props | "as">;
