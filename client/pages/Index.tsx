import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  Brain,
  Zap,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  const features = [
    {
      icon: Brain,
      title: "LSTM Neural Networks",
      description:
        "Advanced deep learning architecture trained on 5+ years of historical market data for superior predictions.",
    },
    {
      icon: TrendingUp,
      title: "85%+ Accuracy",
      description:
        "Predictive models achieving consistent accuracy rates through hyperparameter optimization and feature engineering.",
    },
    {
      icon: Zap,
      title: "Real-time Analysis",
      description:
        "Instant stock price movement predictions powered by TensorFlow and optimized ML algorithms.",
    },
    {
      icon: BarChart3,
      title: "Technical Insights",
      description:
        "Comprehensive analysis using Pandas, Scikit-learn, and advanced statistical methods for market prediction.",
    },
  ];

  const stats = [
    { number: "85%+", label: "Prediction Accuracy" },
    { number: "5+", label: "Years of Training Data" },
    { number: "1000+", label: "Daily Predictions" },
    { number: "99.9%", label: "Uptime SLA" },
  ];

  const benefits = [
    "Deep learning LSTM architecture for complex pattern recognition",
    "Trained on 5 years of historical market data",
    "Feature engineering with technical indicators",
    "Hyperparameter optimization for peak performance",
    "Real-time predictions and market alerts",
    "Compatible with multiple asset classes",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
          {/* Background gradient effect */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-4xl">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl opacity-40"></div>
          </div>

          <div className="container relative z-10 max-w-screen-2xl">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                </span>
                <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                  AI-Powered Stock Predictions
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                  Stock Price Prediction with{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    LSTM Neural Networks
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                  Harness the power of deep learning to predict stock price
                  movements with 85%+ accuracy. Trained on 5+ years of
                  historical data using TensorFlow, advanced feature
                  engineering, and hyperparameter optimization.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Link to="/predict">
                  <Button
                    className="btn-gradient px-8 h-12 text-base"
                    size="lg"
                  >
                    Start Predicting
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 text-base border-purple-600/30 text-foreground hover:bg-purple-600/5"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-border/40 bg-foreground/2 backdrop-blur">
          <div className="container max-w-screen-2xl py-16 md:py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <p className="text-sm md:text-base text-foreground/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32">
          <div className="container max-w-screen-2xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Advanced ML Technology Stack
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Built with state-of-the-art tools and frameworks for reliable
                stock price predictions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-6 rounded-xl border border-border/40 bg-card hover:border-purple-600/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative space-y-4">
                      <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-purple-600/10 to-blue-600/10 group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-foreground/60 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-32 bg-foreground/2 backdrop-blur">
          <div className="container max-w-screen-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-display font-bold">
                  Why Choose StockLSTM?
                </h2>
                <p className="text-lg text-foreground/60">
                  Our LSTM-based model combines deep learning with financial
                  domain expertise to deliver accurate, reliable stock price
                  predictions.
                </p>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden border border-border/40">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="inline-flex p-4 rounded-lg bg-purple-600/10 backdrop-blur">
                      <BarChart3 className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-foreground/60 font-medium">
                      Advanced Predictive Analytics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 md:py-32">
          <div className="container max-w-screen-2xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Enterprise-Grade Tech Stack
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Built with industry-leading libraries and frameworks
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {[
                "TensorFlow",
                "LSTM",
                "Python",
                "Pandas",
                "Scikit-learn",
                "Matplotlib",
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 md:p-6 rounded-lg border border-border/40 bg-card hover:border-purple-600/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <span className="font-semibold text-foreground/70 group-hover:text-primary transition-colors">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-600/30 rounded-full blur-3xl -mr-48"></div>

          <div className="container relative z-10 max-w-screen-2xl text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Ready to Predict Stock Prices?
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Get started with our advanced LSTM neural network predictor and
              make data-driven investment decisions.
            </p>
            <Link to="/predict">
              <Button className="btn-gradient px-8 h-12 text-base" size="lg">
                Launch Predictor
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
