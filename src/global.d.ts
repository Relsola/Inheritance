interface IconProps {
  name: string;
  classes?: string;
  style?: React.CSSProperties;
  fill?: string;
  handleClick?: React.MouseEventHandler<SVGSVGElement> | undefined;
}
