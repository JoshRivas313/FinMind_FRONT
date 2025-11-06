export default {
  	important: true,
	// corePlugins: {
	// 	preflight: false,
	// },
	proteger: true,
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B4D65",
          light: "#51637F",
          dark: "#283646",
          soft: "#3B4D6520",
          
        },
        'verde-lima': '#84cc16', // el verde del indicador
        'sidebar-bg': '#f8fafc',
        'texto-sidebar': '#1e293b',
				accent: '#d32f2f',
				secondary: '#1d72b8',
				default: '#f8f8f8',
				success: '#28c76f',
				textPrimary: '#1E293B',
				textDefault: '#64748b',
      },
            screens: {
				xs: '320px', // Muy pequeños smartphones
				s: '375px', // Smartphones pequeños
				sm: '425px', // Smartphones grandes
				m: '576px', // Dispositivos medianos (tabletas pequeñas, phablets)
				md: '768px', // Tabletas y dispositivos pequeños
				head: '979px', // Tabletas y dispositivos pequeños
				lg: '1024px', // Computadoras portátiles pequeñas y tabletas grandes
				xl: '1280px', // Computadoras portátiles grandes
				'2xl': '1300px', // Monitores pequeños de escritorio
				'custom_screen': '1650px', // Monitores de escritorio estándar
				'3xl': '1920px', // Monitores de escritorio estándar
				'4xl': '2560px', // Monitores grandes
				'5xl': '3840px', // Monitores 4K
        'h-sm': { raw: '(max-height: 640px)' },
        // Media query para altura mayor a 800px
        'h-lg': { raw: '(min-height: 800px)' },
			},
      container: {
        center: true,
      },

       fontFamily: {
        primary: ['Inter', 'sans-serif'],
      },

    },
  },
  plugins: [],
}
