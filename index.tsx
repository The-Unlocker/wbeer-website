import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-900 p-6">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold mb-4">🐝 wBEER - Bee Real</h1>
        <p className="text-lg max-w-xl mx-auto">
          A decentralized token born from the ashes of scams — wBEER stands for resilience, honesty, and community. It's not about alcohol — it's about being real. Bee Real.
        </p>
      </header>

      <main className="grid gap-8 max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Why wBEER?</h2>
            <p>
              Many were misled by fake projects — Bee Real offers a second chance. With a fixed supply, visible contract, and fair trading on PancakeSwap, wBEER is about real value.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Verified Token</h2>
            <p>
              Contract: <a href="https://bscscan.com/token/0xb6eb93F78933BC3820a2c508c050703CD7b234f1" className="text-blue-600 underline" target="_blank">0xb6eb93F78933BC3820a2c508c050703CD7b234f1</a>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Trade wBEER</h2>
            <p>
              Available now on <a href="https://pancakeswap.finance/swap?outputCurrency=0xb6eb93F78933BC3820a2c508c050703CD7b234f1" className="text-blue-600 underline" target="_blank">PancakeSwap</a>.
            </p>
            <Button className="mt-4" asChild>
              <a href="https://pancakeswap.finance/swap?outputCurrency=0xb6eb93F78933BC3820a2c508c050703CD7b234f1" target="_blank">
                Swap Now
              </a>
            </Button>
          </CardContent>
        </Card>
      </main>

      <footer className="text-center mt-20 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} wBEER - Bee Real. All rights reserved.
      </footer>
    </div>
  );
}
