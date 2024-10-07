type Component<Props = Record<string, unknown>> = React.FC<
  React.PropsWithChildren<Props>
>;

type VoidComponent<Props = Record<string, unknown>> = React.FC<Props>;

export type { Component, VoidComponent };
