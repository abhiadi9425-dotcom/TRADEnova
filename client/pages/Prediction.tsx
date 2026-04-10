import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  ArrowUpRight,
  ArrowDownLeft,
  TrendingUp,
  BarChart3,
  Calendar,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Prediction() {
  const [symbol, setSymbol] = useState("AAPL");
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<{
    symbol: string;
    currentPrice: number;
    predictedPrice: number;
    change: number;
    changePercent: number;
    confidence: number;
    timeframe: string;
  } | null>(null);

  const handlePredict = async () => {
    if (!symbol.trim()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockPrice = parseFloat((Math.random() * 300 + 100).toFixed(2));
      const mockPredicted = parseFloat(
        (mockPrice * (0.95 + Math.random() * 0.1)).toFixed(2),
      );
      const change = mockPredicted - mockPrice;
      const changePercent = (change / mockPrice) * 100;

      setPrediction({
        symbol: symbol.toUpperCase(),
        currentPrice: mockPrice,
        predictedPrice: mockPredicted,
        change: parseFloat(change.toFixed(2)),
        changePercent: parseFloat(changePercent.toFixed(2)),
        confidence: parseFloat((80 + Math.random() * 10).toFixed(1)),
        timeframe: "30 Days",
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-4xl">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="container relative z-10 max-w-screen-2xl">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-display font-bold">
                Stock Price{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Predictor
                </span>
              </h1>
              <p className="text-lg text-foreground/60">
                Enter a stock symbol to get AI-powered price predictions using
                our LSTM neural network model.
              </p>
            </div>
          </div>
        </section>

        {/* Prediction Input Section */}
        <section className="py-12 md:py-16">
          <div className="container max-w-screen-2xl">
            <div className="max-w-2xl mx-auto">
              <Card className="p-8 border border-border/40 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      Stock Symbol
                    </label>
                    <div className="flex gap-3">
                      <Input
                        placeholder="e.g., AAPL, GOOGL, MSFT"
                        value={symbol}
                        onChange={(e) =>
                          setSymbol(e.target.value.toUpperCase())
                        }
                        onKeyPress={(e) => e.key === "Enter" && handlePredict()}
                        className="text-base"
                      />
                      <Button
                        onClick={handlePredict}
                        disabled={isLoading || !symbol.trim()}
                        className="btn-gradient px-8 min-w-fit"
                      >
                        {isLoading ? "Analyzing..." : "Predict"}
                      </Button>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/40">
                    <p className="text-sm text-foreground/60">
                      Try popular stocks: AAPL, GOOGL, MSFT, AMZN, TSLA
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Prediction Results Section */}
        {prediction && (
          <section className="py-12 md:py-16">
            <div className="container max-w-screen-2xl">
              <div className="max-w-2xl mx-auto space-y-6">
                {/* Main Prediction Card */}
                <Card className="relative overflow-hidden border border-border/40 p-8 md:p-12">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>

                  <div className="relative space-y-8">
                    <div>
                      <div className="text-lg font-semibold text-foreground/60 mb-2">
                        {prediction.symbol}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-sm text-foreground/60 mb-2">
                            Current Price
                          </p>
                          <p className="text-3xl font-bold text-primary">
                            ${prediction.currentPrice.toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-foreground/60 mb-2">
                            Predicted Price
                          </p>
                          <p className="text-3xl font-bold text-primary">
                            ${prediction.predictedPrice.toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-foreground/60 mb-2">
                            Price Change
                          </p>
                          <div className="flex items-center gap-2">
                            {prediction.change >= 0 ? (
                              <ArrowUpRight className="w-6 h-6 text-green-600" />
                            ) : (
                              <ArrowDownLeft className="w-6 h-6 text-red-600" />
                            )}
                            <span
                              className={`text-2xl font-bold ${prediction.change >= 0 ? "text-green-600" : "text-red-600"}`}
                            >
                              {prediction.change >= 0 ? "+" : ""}
                              {prediction.change.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/40">
                      <div>
                        <p className="text-sm text-foreground/60 mb-2">
                          Change Percentage
                        </p>
                        <p
                          className={`text-2xl font-bold ${prediction.changePercent >= 0 ? "text-green-600" : "text-red-600"}`}
                        >
                          {prediction.changePercent >= 0 ? "+" : ""}
                          {prediction.changePercent.toFixed(2)}%
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 mb-2">
                          Model Confidence
                        </p>
                        <div className="space-y-2">
                          <p className="text-2xl font-bold text-primary">
                            {prediction.confidence}%
                          </p>
                          <div className="w-full bg-border/40 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                              style={{ width: `${prediction.confidence}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-600/5 border border-purple-600/20 rounded-lg p-4">
                      <p className="text-sm text-foreground/70">
                        <span className="font-semibold">Timeframe:</span>{" "}
                        {prediction.timeframe}
                      </p>
                      <p className="text-xs text-foreground/50 mt-2">
                        Prediction based on LSTM neural network trained on 5+
                        years of historical data
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Info Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 border border-border/40">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-purple-600/10">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">
                          Prediction Details
                        </h3>
                        <p className="text-sm text-foreground/60">
                          This prediction is based on technical indicators,
                          historical patterns, and LSTM deep learning analysis.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border border-border/40">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-blue-600/10">
                        <TrendingUp className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Market Insights</h3>
                        <p className="text-sm text-foreground/60">
                          Monitor market trends and use these predictions as
                          part of your investment research strategy.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Disclaimer */}
                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <span className="font-semibold">Disclaimer:</span> These
                    predictions are generated by an AI model and should not be
                    considered financial advice. Always conduct your own
                    research and consult with a financial advisor before making
                    investment decisions.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        <section className="py-20 md:py-32 bg-foreground/2 backdrop-blur">
          <div className="container max-w-screen-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              How It Works
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "01",
                  title: "Data Collection",
                  description:
                    "Gather 5+ years of historical stock price data with technical indicators",
                },
                {
                  number: "02",
                  title: "LSTM Processing",
                  description:
                    "Process data through LSTM neural network layers for pattern recognition",
                },
                {
                  number: "03",
                  title: "Price Prediction",
                  description:
                    "Generate accurate price predictions with confidence intervals",
                },
              ].map((item, index) => (
                <div key={index} className="space-y-4">
                  <div className="text-4xl font-bold text-purple-600/30">
                    {item.number}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-foreground/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
