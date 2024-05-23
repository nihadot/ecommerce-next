/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "indian-retailer.s3.ap-south-1.amazonaws.com",
      "img.freepik.com",
      "www.shift4shop.com",
      "encrypted-tbn0.gstatic.com",
      "securecdn.pymnts.com",
      "cdn.openpr.com",
      "st-troy.mncdn.com",
      "static.vecteezy.com",
      "searchspring.com",
      "unsplash.com",
      "stock.adobe.com",
      "as1.ftcdn.net",
      "t3.ftcdn.net"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.istorebangladesh.com",
        port: "",
      },

      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        port: "",
      },

      {
        protocol: "https",
        hostname: "www.startech.com.bd",
        port: "",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
        port: "",
      },

      {
        protocol: "https",
        hostname: "mirzacdns3.s3.ap-south-1.amazonaws.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.hatchwise.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "istorebangladesh",
        port: "",
      },
      {
        protocol: "https",
        hostname: "eratablet.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.startech.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
