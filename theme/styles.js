import { mode } from '@chakra-ui/theme-tools';

export const globalStyles = {
	colors: {
		text: {
			50: '#1A1A1A',
			100: '#858585',
			200: '#1A202C',
			300: '#333333',
		},
		brand: {
			100: '#7BAFE0',
			200: '#5B9CD9',
			300: '#468FD4',
			400: '#3182CE',
		},
		gray: {
			700: '#1f2733',
		},
		navy: {
			50: '#d0dcfb',
			100: '#aac0fe',
			200: '#a3b9f8',
			300: '#728fea',
			400: '#3652ba',
			500: '#1b3bbb',
			600: '#24388a',
			600: '#24388a',
			700: '#1b254b',
			800: '#111c44',
			900: '#0b1437',
		},
		slate: {
			50: '#f8fafc',
			100: '#f1f5f9',
			200: '#e2e8f0',
			300: '#cbd5e1',
			400: '#94a3b8',
			500: '#64748b',
			600: '#475569',
			700: '#334155',
			800: '#1e293b',
			900: '#0f172a',
		},
		gray: {
			50: '#f9fafb',
			100: '#f3f4f6',
			200: '#e5e7eb',
			300: '#d1d5db',
			400: '#9ca3af',
			500: '#6b7280',
			600: '#4b5563',
			700: '#374151',
			800: '#1f2937',
			900: '#111827',
		},
		zinc: {
			50: '#fafafa',
			100: '#f4f4f5',
			200: '#e4e4e7',
			300: '#d4d4d8',
			400: '#a1a1aa',
			500: '#71717a',
			600: '#52525b',
			700: '#3f3f46',
			800: '#27272a',
			900: '#18181b',
		},
		neutral: {
			50: '#fafafa',
			100: '#f5f5f5',
			200: '#e5e5e5',
			300: '#d4d4d4',
			400: '#a3a3a3',
			500: '#737373',
			600: '#525252',
			700: '#404040',
			800: '#262626',
			900: '#171717',
		},
		stone: {
			50: '#fafaf9',
			100: '#f5f5f4',
			200: '#e7e5e4',
			300: '#d6d3d1',
			400: '#a8a29e',
			500: '#78716c',
			600: '#57534e',
			700: '#44403c',
			800: '#292524',
			900: '#1c1917',
		},
		sky: {
			50: '#f0f9ff',
			100: '#e0f2fe',
			200: '#bae6fd',
			300: '#7dd3fc',
			400: '#38bdf8',
			500: '#0ea5e9',
			600: '#0284c7',
			700: '#0369a1',
			800: '#075985',
			900: '#0c4a6e',
		},
		blue: {
			50: '#eff6ff',
			100: '#dbeafe',
			200: '#bfdbfe',
			300: '#93c5fd',
			400: '#60a5fa',
			500: '#3b82f6',
			600: '#2563eb',
			700: '#1d4ed8',
			800: '#1e40af',
			900: '#1e3a8a',
		},
		indigo: {
			50: '#eef2ff',
			100: '#e0e7ff',
			200: '#c7d2fe',
			300: '#a5b4fc',
			400: '#818cf8',
			500: '#6366f1',
			600: '#4f46e5',
			700: '#4338ca',
			800: '#3730a3',
			900: '#312e81',
		},
	},
	styles: {
		global: (props) => ({
			body: {
				overflowX: 'hidden',
				bg: mode('#ffffff', '#1B254B')(props),
				fontFamily: 'Poppins, sans-serif',
			},
			html: {
				fontFamily: 'Poppins, sans-serif',
			},
		}),
	},
};
