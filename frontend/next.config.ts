import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**", // Mantém o que você já tinha (não recomendado, mas possível com fallback em dev)
			},
			{
				protocol: "https",
				hostname: "github.com",
			},
		],
	},
}

export default nextConfig
