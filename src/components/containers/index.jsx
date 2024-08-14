import {
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  Typography,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";
import containersData from "../../data/containers.json"

const ContainersTable = () => {
  return (
    <table className="w-full min-w-max table-auto text-left overflow-scroll scrollbar-hidden">
      <thead>
        <tr>
          {containersData.headers.map((head, index) => (
            <th
              key={head}
              className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                {head}{" "}
                {index !== containersData.headers.length - 1 && (
                  <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                )}
              </Typography>
            </th>
          ))}
          <th
              className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                Action
              </Typography>
            </th>
        </tr>
      </thead>
      <tbody>
        {containersData.rows.map(({ id, status, location, updated }, index) => {
          const isLast = index === containersData.rows.length - 1;
          const classes = isLast
            ? "p-4"
            : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={id}>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {id}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {status}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {location}
                </Typography>
              </td>
              <td className={classes}>
                <div className="w-max">
                  <Chip
                    variant="ghost"
                    size="sm"
                    value={status}
                    color={status === "Active" ? "green" : "blue-gray"}
                  />
                </div>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {updated}
                </Typography>
              </td>
              <td className={classes}>
                <Tooltip content="Edit Container">
                  <IconButton variant="text">
                    <PencilIcon className="h-4 w-4" />
                  </IconButton>
                </Tooltip>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ContainersTable;
