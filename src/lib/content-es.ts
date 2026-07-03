import { siteConfig } from "@/lib/content";

export const siteConfigEs = {
  ...siteConfig,
  tagline: "El software que te hace ganar dinero",
  description:
    "Software de operaciones, logística, facturación y costos para Destination Management Companies (DMCs) y operadores turísticos.",
};

export const softwareFeaturesEs = [
  {
    title: "Confiabilidad a prueba de fallos",
    description:
      "Nuestra filosofía: la red nunca puede caerse. BB Soft está diseñado para operaciones ininterrumpidas.",
    icon: "shield",
  },
  {
    title: "Estabilidad de nivel empresarial",
    description:
      "Construido con WinDev, WinDev Mobile y WebDev, plataformas confiables para empresas líderes en todo el mundo.",
    icon: "server",
  },
  {
    title: "Microsoft SQL Server",
    description:
      "Gestión de datos confiable con tecnología empresarial probada en el núcleo.",
    icon: "database",
  },
  {
    title: "Capacidad ilimitada",
    description:
      "Ya sea que reserves 1 pasajero al mes o 1,000,000, BB Soft escala con tu negocio.",
    icon: "scale",
  },
  {
    title: "Operaciones multi-aeropuerto",
    description:
      "Sin límite de aeropuertos. ¿Pasajeros que llegan a un aeropuerto y salen de otro? Está cubierto.",
    icon: "plane",
  },
  {
    title: "Gestión hotelera flexible",
    description:
      "Hoteles prácticamente ilimitados por reserva; pasajeros que se mueven entre propiedades sin problema.",
    icon: "hotel",
  },
  {
    title: "Gestión de excursiones",
    description:
      "Administra tus excursiones propias y las de terceros con control operativo completo.",
    icon: "map",
  },
  {
    title: "Cualquier tipo de viaje redondo",
    description:
      "Reserva viajes redondos de tu empresa, proveedores externos o paquetes Fly & Drive.",
    icon: "route",
  },
  {
    title: "Control financiero completo",
    description:
      "Costos, facturación y control de inventario completos en un solo sistema integrado.",
    icon: "chart",
  },
  {
    title: "Facturación 95% más rápida",
    description:
      "Reduce tu tiempo de facturación en un 95%, literalmente. Recupera horas cada semana.",
    icon: "clock",
  },
  {
    title: "Cuentas por cobrar precisas",
    description:
      "Pagos parciales o completos de facturas con detalle línea por línea de lo pagado y pendiente.",
    icon: "receipt",
  },
  {
    title: "Notas de crédito línea por línea",
    description:
      "Aplica notas de crédito con control granular a nivel de cada partida.",
    icon: "credit",
  },
] as const;

export const pricingHighlightsEs = [
  {
    title: "Sin cargos por funciones",
    description: "Usa todas las funciones del software sin cargos ocultos ni ventas adicionales.",
  },
  {
    title: "Sin cargos por terminal",
    description:
      "Una ubicación o cien: sin cargos por terminales, llaves de software u oficinas multi-ciudad.",
  },
  {
    title: "Soporte gratuito",
    description: "Soporte completo incluido. Sin cargos adicionales, nunca.",
  },
] as const;

export const homeStatsEs = [
  { value: "95%", label: "Reducción en tiempo de facturación" },
  { value: "4×", label: "ROI garantizado en 3 meses" },
  { value: "∞", label: "Pasajeros y ubicaciones soportados" },
  { value: "$0", label: "Cargos extra por soporte" },
] as const;
