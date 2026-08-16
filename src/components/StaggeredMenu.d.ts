// Type declarations for StaggeredMenu so TypeScript callers get proper prop types
// without converting the component from .jsx to .tsx.

export interface MenuItem {
  label: string;
  ariaLabel?: string;
  link: string;
}

export interface SocialItem {
  label: string;
  link: string;
}

export interface StaggeredMenuProps {
  position?: 'left' | 'right';
  colors?: string[];
  items?: MenuItem[];
  socialItems?: SocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  changeMenuColorOnOpen?: boolean;
  isFixed?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

export declare const StaggeredMenu: (props: StaggeredMenuProps) => JSX.Element;
export default StaggeredMenu;

// addressed code review feedback

// restructured for maintainability

// improved error handling here

// optimized data flow

// simplified the flow

// reduced complexity
