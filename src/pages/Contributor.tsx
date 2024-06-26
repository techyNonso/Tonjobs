import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrganizationView from "@/components/OrganizationView";
import JobView from "@/components/JobView";
import OpenJobs from "@/components/OpenJobs";
import LeaderBoard from "@/components/LeaderBoard";
import MyTasks from "@/components/MyTasks";
import { useContext } from "react";
import { AuthContext } from "@/App";
import { TonConnectButton } from "@tonconnect/ui-react";

export default function Contributor() {
  const { state, dispatch } = useContext(AuthContext);
  return (
    <div className="h-full flex flex-col gap-4 py-4  px-2">
      <div className="h-[10%]  flex  items-center">
        <div className="h-full w-[90%] flex gap-2 items-center">
          <img
            src="https://avatars.githubusercontent.com/u/30694065?v=4"
            className="w-12 h-12 rounded-full"
          />
          <div className=" flex flex-col h-full justify-center ">
            <Link
              to={`/profile/${"techynonso"}`}
              className="text-green-400 font-semibold text-lg"
            >
              @techynonso
            </Link>
            <p className="flex gap-2">
              <span className="text-gray-400 text-sm font-semibold">Jobs:</span>
              <span className="text-sm font-semibold">10</span>
              <span className="text-gray-400 text-sm font-semibold">
                Claims:
              </span>
              <span className="text-sm font-semibold">10 Tons</span>
            </p>
          </div>
        </div>

        <div className="w-fit h-fit p-3 border rounded-md">
          <Link to="/" className="">
            <FaArrowLeft />
          </Link>
        </div>
      </div>

      {/* org list */}
      <div className="h-[85%]   font-semibold text-foreground  ">
        {state.isLoggedIn && (
          <div className="flex justify-center">
            <TonConnectButton />
          </div>
        )}
        <Tabs defaultValue="jobs" className="h-full">
          <TabsList className=" h-[10%] w-full bg-white rounded-none border-b-2">
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="board">Leader Board</TabsTrigger>
            <TabsTrigger value="MyTasks">Tasks</TabsTrigger>
          </TabsList>
          <TabsContent value="jobs" className="h-[87%]">
            <OpenJobs />{" "}
          </TabsContent>
          <TabsContent value="board" className="h-[87%]">
            <LeaderBoard />
          </TabsContent>
          <TabsContent value="MyTasks" className="h-[87%]">
            <MyTasks />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
