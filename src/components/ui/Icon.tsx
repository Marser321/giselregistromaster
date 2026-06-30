import type { ComponentType } from "react";
import {
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  DollarSign,
  FileText,
  Gift,
  GraduationCap,
  HandCoins,
  Heart,
  Layers,
  Lightbulb,
  LineChart,
  Lock,
  Megaphone,
  Rocket,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Zap,
  type LucideProps,
} from "lucide-react";

/**
 * Registro curado de íconos (tree-shakeable). Las claves son los nombres válidos
 * para usar en site.config.ts (icon: "TrendingUp"). Para añadir uno nuevo:
 * impórtalo arriba y agrégalo a este mapa. Evita importar toda lucide-react
 * (eso infla el bundle ~1 MB).
 */
const registry: Record<string, ComponentType<LucideProps>> = {
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  DollarSign,
  FileText,
  Gift,
  GraduationCap,
  HandCoins,
  Heart,
  Layers,
  Lightbulb,
  LineChart,
  Lock,
  Megaphone,
  Rocket,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Zap,
};

interface IconProps extends LucideProps {
  /** Nombre del ícono (clave del registro de arriba). */
  name: string;
}

/** Renderiza un ícono por nombre desde siteConfig. Fallback: Sparkles. */
export function Icon({ name, ...props }: IconProps) {
  const Cmp = registry[name] ?? Sparkles;
  return <Cmp {...props} />;
}
