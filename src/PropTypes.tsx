export interface ITouchProps {
  disabled?: boolean;
  activeClassName?: string;
  activeStyle?: any;
  onTouchStart?: Function;
  onTouchEnd?: Function;
  onTouchCancel?: Function;
  onMouseDown?: Function;
  onMouseUp?: Function;
}

export interface ITouchState {
  active: boolean;
}
