
export const BUSINESS = {
  name: "TRON INFOTECH",

  owner: "Mahender Kumar",

  phone: "9871911478",

  whatsapp: "919871911478",

  email: "troninfotech@gmail.com",

  address:
    "4527/82, Swatantra Nagar, Narela, Delhi - 110040",

  tagline:
    "Printer, Cartridge & CCTV Camera Solutions",

  description:
    "Professional printer repair, cartridge refilling, CCTV camera installation, repair and servicing, along with new and second-hand printers and CCTV cameras.",
};

export const callLink = `tel:+91${BUSINESS.phone}`;

export const whatsappLink = (
  message: string =
    "Hello TRON INFOTECH, I need service assistance."
): string => {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
};
