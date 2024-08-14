import {
    Card,
    IconButton,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    PowerIcon,
    TruckIcon,
    SwatchIcon,
    MapIcon,
    UserGroupIcon,
  } from "@heroicons/react/24/solid";
  import { MdAutoGraph } from "react-icons/md";
  import { CgUserList } from "react-icons/cg";
  import { LiaMapMarkedAltSolid } from "react-icons/lia";
  import { AiOutlineProduct } from "react-icons/ai";
  import { PiShippingContainer, PiTruckTrailer } from "react-icons/pi";
  





  
  
  
  export function Sidebar() {
    return (
      <Card className="z-[100] h-full p-4 shadow-xl shadow-blue-gray-900/5 bg-blue-gray-100 rounded-none">
        <div className="flex flex-col justify-between h-full">
          <div className="start flex flex-col gap-5">
            <IconButton color="white">
                <MdAutoGraph className="h-5 w-5" />
            </IconButton>
            <IconButton color="white">
                <LiaMapMarkedAltSolid className="h-5 w-5" />
            </IconButton>
            <IconButton color="white">
                <CgUserList className="h-5 w-5" />
            </IconButton>
            <IconButton color="white">
                <AiOutlineProduct className="h-5 w-5" />
            </IconButton>
            <IconButton color="white">
                <PiShippingContainer className="h-5 w-5" />
            </IconButton>
            <IconButton color="white">
                <PiTruckTrailer className="h-5 w-5" />
            </IconButton>
          </div>
          <div className="end flex flex-col gap-5">
            <IconButton color="white">
                <PowerIcon className="h-5 w-5" />
            </IconButton>
          </div>
        </div>
      </Card>
    );
  }
  