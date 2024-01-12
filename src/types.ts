export interface CompatibilityItem {
  title: string;
  icon: string; // Puede ser una ruta a una imagen o un nombre de ícono
  url: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}
