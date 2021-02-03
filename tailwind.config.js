module.exports = {
    purge: {
    	enabled: true,
    	content: ['./public/**/*.html'],
    },
    theme: {
        colors: {
            yellow: "#ffe500",
            orange: "#f28b27",
            red: "#c429a9",
            blue: "#4445ff",
            green: "#0bf131",
            purple: {
                dark: "#150411",
                DEFAULT: "#150411",
                light: "#281428"
            }
        },
        fontFamily: {
            sans: ['Recoleta', 'sans-serif'],
            alt: ['Recoleta Alt', 'sans-serif'],
            icon: ['Material Design Icons']
        },
        fill: theme => ({
            'purple': theme('colors.purple.light')
        })
    },
	plugins: [
		require('tailwindcss-css-filters')
	]
}
