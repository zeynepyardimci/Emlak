import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Listing = {
  id: string;
  title: string;
  location: string;
  roomCount: string;
  description: string;
  price: number;
  images: string[];
};

type Filters = {
  minPrice?: number;
  maxPrice?: number;
};

type ListingContextType = {
  listings: Listing[];
  filteredListings: Listing[];
  setFilters: (filters: Filters) => void;
  getListingById: (id: string) => Listing | undefined;
  addListing: (listing: Listing) => void;
  deleteListing: (id: string) => void;
};

export const initialListings: Listing[] = [
  {
    id: "1",
    title: "3+1 Satılık Daire",
    location: "Amasya / Şeyhcui",
    roomCount: "3 oda 1 salon",
    description: "Geniş ve ferah...",
    price: 500000,
    images: [
      "/images/ilan1_1.jpg",
      "/images/ilan1_2.jpg",
      "/images/ilan1_3.jpg",
    ],
  },
  {
    id: "2",
    title: "2+1 Kiralık Daire",
    location: "Amasya / İstasyon Caddesi",
    roomCount: "2 oda 1 salon",
    description: "Bina asansörlü, odalar 110 m^2 genişliğinde ve daire 5.katta bulunmaktadır.",
    price: 2600000,
    images: [
      "/images/ilan2_1.jpg",
      "/images/ilan2_2.jpg",
      "/images/ilan2_3.jpg",
      "/images/ilan2_4.jpg",
    ],
  },
  {
    id: "3",
    title: "1+1 Kiralık Daire",
    location: "Amasya / Şeyhcui",
    roomCount: "1 oda 1 salon",
    description: "Odalar 50 m^2 genişliğindedir.",
    price: 9000,
    images: [
      "/images/ilan3_1.jpg",
      "/images/ilan3_2.jpg",
      "/images/ilan3_3.jpg",
    ],
  },
  {
    id: "4",
    title: "3+1 Satılık Daire",
    location: "Amasya / Vizyon Park Site",
    roomCount: "3 oda 1 salon",
    description: "Odalar 150 m^2 genişliğinde, dairemiz 3.kat ve F blokta yer almakta.",
    price: 5250000,
    images: [
      "/images/ilan4_1.jpg",
      "/images/ilan4_2.jpg",
      "/images/ilan4_3.jpg",
      "/images/ilan4_4.jpg",
      "/images/ilan4_5.jpg",
      "/images/ilan4_6.jpg",
    ],
  },
  {
    id: "5",
    title: "2+1 Satılık Daire",
    location: "Amasya / Şeyhcui",
    roomCount: "2 oda 1 salon",
    description: "Odalar 120 m^2 genişliğinde, dairemiz 4.kat ve yenidir(sıfırdır).",
    price: 7500000,
    images: [
      "/images/ilan5_1.png",
      "/images/ilan5_2.png",
      "/images/ilan5_3.png",
      "/images/ilan5_4.png",
      "/images/ilan5_5.png",
    ],
  },
  {
    id: "6",
    title: "2+1 Kiralık Daire",
    location: "Amasya / Şeyhcui",
    roomCount: "2 oda 1 salon",
    description: "Odalar 100 m^2 genişliğinde, sıfır daire ve 1.katta bulunmaktadır.",
    price: 14000,
    images: [
      "/images/ilan6_1.png",
      "/images/ilan6_2.png",
      "/images/ilan6_3.png",
      "/images/ilan6_4.png",
      "/images/ilan6_5.png",
      "/images/ilan6_6.png",
    ],
  },
];

export const ListingContext = createContext<ListingContextType | undefined>(undefined);

export const ListingProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilterState] = useState<Filters>({});

  // localStorage'tan verileri al, yoksa initialListings kullan
  const storedListings = localStorage.getItem("listings");
  const [listings, setListings] = useState<Listing[]>(
    storedListings ? JSON.parse(storedListings) : initialListings
  );

  // listings değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("listings", JSON.stringify(listings));
  }, [listings]);

  const setFilters = (newFilters: Filters) => {
    setFilterState(newFilters);
  };

  const addListing = (listing: Listing) => {
    setListings((prev) => [...prev, listing]);
  };

  const deleteListing = (id: string) => {
    setListings((prev) => prev.filter((listing) => listing.id !== id));
  };

  const filteredListings = listings.filter((item) => {
    const minFiyatUygun = !filters.minPrice || item.price >= filters.minPrice;
    const maxFiyatUygun = !filters.maxPrice || item.price <= filters.maxPrice;
    return minFiyatUygun && maxFiyatUygun;
  });

  const getListingById = (id: string) => listings.find((ilan) => ilan.id === id);

  return (
    <ListingContext.Provider
      value={{
        listings,
        filteredListings,
        setFilters,
        getListingById,
        addListing,
        deleteListing,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
};

export function useListing() {
  const context = useContext(ListingContext);
  if (!context) throw new Error("useListing must be used within ListingProvider");
  return context;
}
