"use client";
import { Button } from "@/components/ui/button";
import { GrDropbox } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import OrganizationView from "@/components/OrganizationView";
import JobView from "@/components/JobView";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useContext, useState } from "react";
import { AuthContext, JobContext } from "@/App";
import { useTonClient } from "@/hooks/useTonClient";
import { useTonConnect } from "@/hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import { useOrganisationContract } from "@/hooks/useOrgContract";

export default function Organization() {
  const { state, dispatch } = useContext(AuthContext);
  const { jobState, jobDispatch } = useContext(JobContext);

  const [amt, setAmt] = useState<number>(0);
  const { network } = useTonConnect();
  const { addRepo } = useOrganisationContract();
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  console.log(jobState);
  const deposit = async () => {};

  return (
    <div className=" h-full  flex flex-col  bg-baseGround">
      <div className="h-[35%] w-full  flex flex-col gap-10 justify-center items-center ">
        <div className=" flex w-fit gap-4 h-fit">
          <div className="flex flex-col gap-3 justify-between text-sm font-semibold text-white">
            <p className="text-neutral-400">Balance</p>
            <p>1.25 TON</p>
          </div>
          <div className="flex flex-col gap-3 justify-between text-sm font-semibold text-white">
            <p className="text-neutral-400">Allocated</p>
            <p>1.25 TON</p>
          </div>
        </div>
        <div className="flex gap-2">
          {state.isLoggedIn && <TonConnectButton />}
          <Button>
            {network
              ? network === CHAIN.MAINNET
                ? "mainnet"
                : "testnet"
              : "N/A"}
          </Button>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"sm"}>Deposit</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Deposit Ton</DialogTitle>
              <DialogDescription>
                Add to your Ton account balance
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 items-center gap-4">
                <Input
                  id="name"
                  // defaultValue="Pedro Duarte"
                  value={amt}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setAmt(Number(e.target.value))
                  }
                  className=""
                  placeholder="Enter amount"
                  type="number"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={deposit} type="submit">
                  Deposit
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div
        defaultValue="jobs"
        className="h-[65%] bg-background  rounded-tr-2xl rounded-tl-2xl"
      >
        {!jobState.isJobSelected && (
          <div className="h-[13%] flex items-center bg-gray-100 justify-center font-semibold text-sm rounded-tr-2xl rounded-tl-2xl">
            Jobs
          </div>
        )}

        {jobState.isJobSelected && (
          <div className="h-[13%] flex items-center bg-gray-100 justify-center font-semibold text-sm rounded-tr-2xl rounded-tl-2xl">
            Issues
          </div>
        )}

        {!jobState.isJobSelected && (
          <div className="h-[87%]">
            <OrganizationView />
          </div>
        )}

        {jobState.isJobSelected && (
          <div className="h-[87%]">
            <JobView />
          </div>
        )}
      </div>
    </div>
  );
}
