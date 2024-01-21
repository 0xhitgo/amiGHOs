"use client";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();
  return (
    <div className="bg-white text-gray-900">
      <nav className="flex justify-between items-center py-4 px-8 bg-[#f8f9fa]">
        <h1 className="text-xl font-semibold">Settle Smart</h1>
        {/* <ConnectKitButton /> */}
        <Button
          onClick={() => router.push("/dashboard", { scroll: false })}
          className="bg-[#BBBDF6] text-white"
        >
          Join Now!
        </Button>
      </nav>
      <header className="flex flex-col items-center justify-center py-12 bg-blue-100">
        <h2 className="text-6xl font-bold text-[#6e7093]">AmiGHOs</h2>
        <img
          alt="Decorative image"
          className="mt-4"
          height="200"
          src="./amiGHOs.png"
          style={{
            aspectRatio: "600/200",
            objectFit: "cover",
          }}
          width="600"
        />
      </header>
      <section className="px-8 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold mb-4">What is AMiGHOs?</h3>
          <p className="text-lg mb-8">
            AMiGHOs is a heightened experience of financial camaraderie. Track,
            split, and pool funds for group outings and larger expenses, all
            whilst smartly accruing interest on due amounts.
            {/* Imagine a universe where you and your buddies tackle the gnarliest of
          bills, powered by the invincible blockchain. Welcome to AmiGHOs – it’s
          that universe. */}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-[#BBBDF6] text-white">
              <CardContent>
                <PiggyBankIcon className="text-white h-12 w-12 mt-2" />
                <h4 className="text-lg font-medium mt-2">Smart Interest</h4>
                <p className="text-sm">Grow money even while owing</p>
              </CardContent>
            </Card>
            <Card className="bg-[#BBBDF6] text-white">
              <CardContent>
                <CloudSunIcon className="text-white h-12 w-12 mt-2" />
                <h4 className="text-lg font-medium mt-2">Pre-Pool Funds</h4>
                <p className="text-sm">No more waiting for sunnier days</p>
              </CardContent>
            </Card>
            <Card className="bg-[#BBBDF6] text-white">
              <CardContent>
                <CalculatorIcon className="text-white h-12 w-12 mt-2" />
                <h4 className="text-lg font-medium mt-2">Ease Calculations</h4>
                <p className="text-sm">Automatic splitting makes life easy</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section>
        <Queries />
      </section>
    </div>
  );
}

function CalculatorIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
  );
}

function CloudSunIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 2v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M20 12h2" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
    </svg>
  );
}

function PiggyBankIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
      <path d="M2 9v1c0 1.1.9 2 2 2h1" />
      <path d="M16 11h0" />
    </svg>
  );
}

function Queries() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Queries, Answered
        </h2>
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <dt className="text-lg leading-6 font-medium text-gray-900">
              How secure and private is AmiGHOS?
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              As secure as a blockchain fortress can be, and as private as your
              secret diary. You&apos;re in safe hands!
            </dd>
          </div>
          <div>
            <dt className="text-lg leading-6 font-medium text-gray-900">
              Why should I use AmiGHOS?
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              Because why not? Track, manage, and accrue; a complete finance
              solution right here!
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
