import StarIcon from "@mui/icons-material/Star";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import MonitorIcon from "@mui/icons-material/Monitor";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import MouseIcon from "@mui/icons-material/Mouse";

import { ICategory } from "../../entities/sharedTypes";

const topCategories: Array<ICategory> = [
    { Icon: StarIcon, name: "Popular Products" },
    { Icon: AutoAwesomeIcon, name: "Trending Products" },
    { Icon: PhonelinkIcon, name: "All Products" },
];
const categories: Array<ICategory> = [
    {
        Icon: HeadphonesIcon,
        name: "Headphones",
        nestedCategories: [
            { Icon: FiberManualRecordIcon, name: "Logitech" },
            { Icon: FiberManualRecordIcon, name: "Apple" },
            { Icon: FiberManualRecordIcon, name: "Xiaomi" },
        ],
    },
    {
        Icon: PhoneIphoneIcon,
        name: "Phones",
        nestedCategories: [
            { Icon: FiberManualRecordIcon, name: "Xiaomi" },
            { Icon: FiberManualRecordIcon, name: "Apple" },
            { Icon: FiberManualRecordIcon, name: "Samsung" },
        ],
    },
    {
        Icon: LaptopMacIcon,
        name: "Laptops",
        nestedCategories: [
            { Icon: FiberManualRecordIcon, name: "Lenovo" },
            { Icon: FiberManualRecordIcon, name: "Acer" },
            { Icon: FiberManualRecordIcon, name: "Apple" },
        ],
    },
    {
        Icon: MonitorIcon,
        name: "Monitors",
        nestedCategories: [
            { Icon: FiberManualRecordIcon, name: "MSI" },
            { Icon: FiberManualRecordIcon, name: "Samsung" },
            { Icon: FiberManualRecordIcon, name: "Xiaomi" },
        ],
    },
    {
        Icon: KeyboardIcon,
        name: "Keyboards",
        nestedCategories: [
            { Icon: FiberManualRecordIcon, name: "Hator" },
            { Icon: FiberManualRecordIcon, name: "Dark Project" },
            { Icon: FiberManualRecordIcon, name: "Logitech" },
        ],
    },
    {
        Icon: MouseIcon,
        name: "Mice",
        nestedCategories: [
            { Icon: FiberManualRecordIcon, name: "Logitech" },
            { Icon: FiberManualRecordIcon, name: "Hator" },
            { Icon: FiberManualRecordIcon, name: "Razer" },
        ],
    },
];

export { topCategories, categories };
