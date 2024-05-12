import { ReactComponent as Kreivo } from "../../../components/icons/kreivo.svg";

const nodes = [
  {
    name: "Kreivo",
    url: "wss://kreivo.io/",
  },
  {
    name: "Kippu",
    url: "wss://kreivo.kippu.rocks/",
  },
];

const modules = {
  identity: false,
  assets: true,
  uniques: true,
};

const kreivo = {
  name: "Kreivo",
  icon: <Kreivo />,
  identity: "kusama",
  sub: "kusama",
  value: "kreivo",
  chain: "kusama",
  symbol: "KSM",
  decimals: 12,
  color: "#294940",
  colorSecondary: "#9063cd",
  para: {
    relay: "Kusama",
    id: "2081",
  },
  nodes,
  modules,
  useOnChainBlockData: true,
};

export default kreivo;