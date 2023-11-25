export type AddOn = {
  key: string;
  title: string;
  description: string;
  price: number;
};

export const addons: AddOn[] = [
  {
    key: "online-service",
    title: "Online Service",
    description: "Access to multiplayer games",
    price: 1,
  },
  {
    key: "large-storage",
    title: "Large Storage",
    description: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    key: "customizable-profile",
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    price: 2,
  },
];
