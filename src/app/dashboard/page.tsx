"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";
import { ConnectKitButton } from "connectkit";

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen dark:bg-gray-900">
      <header className="flex items-center h-16 px-4 border-b bg-white dark:bg-gray-800">
        <Link
          className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
          href="#"
        >
          <span className="text-2xl">👻</span>
          {/* <DollarSignIcon className="w-6 h-6 text-[#BBBDF6]" /> */}
          <span className="text-gray-900 dark:text-gray-100">AmiGHOs</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link className="font-bold text-gray-900 dark:text-gray-100" href="#">
            Dashboard
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Transactions
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Friends
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Settings
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto">
            <ConnectKitButton />
          </div>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
        <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Total Balance
            </h1>
            <p className="text-4xl font-semibold text-[#BBBDF6] dark:text-green-300">
              1,234 GHO
            </p>
          </div>
          <Button className="bg-[#BBBDF6] text-white">Add Expense</Button>
          <Button className="border-[#BBBDF6] text-[#BBBDF6]" variant="outline">
            Settle Debts
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Paid rent</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    Jan 15, 2024
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSignIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    -500 GHO
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Friends</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Meet Patel</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <UserIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    Balance: 100 GHO
                  </span>
                </div>
              </div>
              <div className="text-sm font-semibold">Hemang Nakarani</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <UserIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    Balance: 300 GHO
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Group Expenses</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">
                Dinner at Mehrangarh Fort
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    Jan 10, 2024
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSignIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    -200 GHO
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="h-full w-full max-w-2xl">
            <CardHeader>
              <CardTitle>Expenses and Debts</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart className="aspect-[9/4]" />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function DollarSignIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function LineChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
