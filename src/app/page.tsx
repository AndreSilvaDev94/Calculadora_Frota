"use client";

import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Route, Fuel, CircleDollarSign } from "lucide-react";

export default function FleetCostCalcPage() {
  const [distance, setDistance] = useState("");
  const [consumption, setConsumption] = useState("");
  const [price, setPrice] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());

  useEffect(() => {
    const distNum = parseFloat(distance);
    const consNum = parseFloat(consumption);
    const priceNum = parseFloat(price);

    if (distNum > 0 && consNum > 0 && priceNum > 0) {
      const cost = (distNum / consNum) * priceNum;
      setTotalCost(cost);
    } else {
      setTotalCost(0);
    }
    setLastUpdateTime(Date.now());
  }, [distance, consumption, price]);

  const formattedCost = useMemo(() => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(totalCost);
  }, [totalCost]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tight text-primary font-headline">
            Calculadora de Frota
          </CardTitle>
          <CardDescription className="text-base">
            Calcule instantaneamente os gastos com combustível da sua frota.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="distance" className="text-sm font-medium">Distância (km)</Label>
              <div className="relative">
                <Route className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="distance"
                  type="number"
                  placeholder="ex: 500"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="pl-10"
                  min="0"
                  aria-label="Distância em quilômetros"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="consumption" className="text-sm font-medium">Consumo de Combustível (km/l)</Label>
              <div className="relative">
                <Fuel className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="consumption"
                  type="number"
                  placeholder="ex: 12"
                  value={consumption}
                  onChange={(e) => setConsumption(e.target.value)}
                  className="pl-10"
                  min="0"
                  aria-label="Consumo de combustível em quilômetros por litro"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="price" className="text-sm font-medium">Preço do Combustível (por litro)</Label>
              <div className="relative">
                <CircleDollarSign className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="price"
                  type="number"
                  placeholder="ex: 5.50"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="pl-10"
                  min="0"
                  step="0.01"
                  aria-label="Preço do combustível por litro"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <p className="text-lg font-medium text-muted-foreground">Custo Total do Combustível</p>
                  <div key={lastUpdateTime} className="animate-in fade-in-0 zoom-in-95 duration-500">
                    <p className="text-5xl font-bold tracking-tighter text-primary font-headline" aria-live="polite">
                      {formattedCost}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
