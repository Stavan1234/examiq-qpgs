/**
 * This utility temporarily overrides CSS custom properties on the root element
 * to replace unsupported `oklch()` colors with `hsl()` equivalents.
 * This ensures that html2canvas can correctly render the styles for PDF export.
 */

// A complete mapping of your theme's oklch() colors to safe HSL values
const hslColorOverrides: Record<string, string> = {
    '--background': 'hsl(0 0% 100%)',
    '--foreground': 'hsl(265 53% 13%)',
    '--card': 'hsl(0 0% 100%)',
    '--card-foreground': 'hsl(265 53% 13%)',
    '--popover': 'hsl(0 0% 100%)',
    '--popover-foreground': 'hsl(265 53% 13%)',
    '--primary': 'hsl(266 54% 21%)',
    '--primary-foreground': 'hsl(248 100% 98%)',
    '--secondary': 'hsl(248 33% 97%)',
    '--secondary-foreground': 'hsl(266 54% 21%)',
    '--muted': 'hsl(248 33% 97%)',
    '--muted-foreground': 'hsl(257 32% 55%)',
    '--accent': 'hsl(248 33% 97%)',
    '--accent-foreground': 'hsl(266 54% 21%)',
    '--destructive': 'hsl(27 96% 58%)',
    '--border': 'hsl(256 20% 93%)',
    '--input': 'hsl(256 20% 93%)',
    '--ring': 'hsl(257 26% 70%)',
    '--chart-1': 'hsl(41 95% 65%)',
    '--chart-2': 'hsl(185 41% 60%)',
    '--chart-3': 'hsl(227 49% 40%)',
    '--chart-4': 'hsl(84 76% 83%)',
    '--chart-5': 'hsl(70 73% 77%)',
    '--sidebar': 'hsl(248 100% 98%)',
    '--sidebar-foreground': 'hsl(265 53% 13%)',
    '--sidebar-primary': 'hsl(266 54% 21%)',
    '--sidebar-primary-foreground': 'hsl(248 100% 98%)',
    '--sidebar-accent': 'hsl(248 33% 97%)',
    '--sidebar-accent-foreground': 'hsl(266 54% 21%)',
    '--sidebar-border': 'hsl(256 20% 93%)',
    '--sidebar-ring': 'hsl(257 26% 70%)',
};

// This function applies the HSL overrides
export function applyPdfColorFix() {
  const root = document.documentElement;
  for (const [key, value] of Object.entries(hslColorOverrides)) {
    root.style.setProperty(key, value);
  }
}

// This function removes the overrides, restoring the original oklch() styles
export function revertPdfColorFix() {
  const root = document.documentElement;
  for (const key of Object.keys(hslColorOverrides)) {
    root.style.removeProperty(key);
  }
}