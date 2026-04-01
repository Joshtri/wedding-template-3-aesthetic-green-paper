import { useState } from "react";
import { Copy, Check } from "lucide-react";
import type { BankAccount, BankCardTheme } from "@/interfaces/bank-account";
import { Text } from "../text";
import { cn } from "@/utils/cn";

interface ThemeConfig {
  bg: string;
  border: string;
  gradient: string;
  textColor: "white" | "default" | "stone";
  textOpacity: string;
  subTextOpacity: string;
  chipGradient: string;
  chipBorder: string;
  decoration: string;
}

const themeConfigs: Record<BankCardTheme, ThemeConfig> = {
  platinum: {
    bg: "bg-stone-900",
    border: "border-stone-700/50",
    gradient: "linear-gradient(135deg, rgb(28 25 23), rgb(68 64 60))",
    textColor: "white",
    textOpacity: "opacity-70",
    subTextOpacity: "opacity-50",
    chipGradient: "linear-gradient(135deg, #FCD34D 0%, #D97706 100%)",
    chipBorder: "border-amber-900/60",
    decoration: "group-hover:bg-amber-500/10",
  },
  gold: {
    bg: "bg-amber-900",
    border: "border-amber-700/50",
    gradient: "linear-gradient(135deg, #78350f 0%, #92400e 50%, #b45309 100%)",
    textColor: "white",
    textOpacity: "opacity-90",
    subTextOpacity: "opacity-60",
    chipGradient: "linear-gradient(135deg, #fef3c7 0%, #fbbf24 100%)",
    chipBorder: "border-amber-400/60",
    decoration: "group-hover:bg-white/10",
  },
  blue: {
    bg: "bg-blue-900",
    border: "border-blue-700/50",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
    textColor: "white",
    textOpacity: "opacity-90",
    subTextOpacity: "opacity-70",
    chipGradient: "linear-gradient(135deg, #FCD34D 0%, #D97706 100%)",
    chipBorder: "border-blue-400/40",
    decoration: "group-hover:bg-white/10",
  },
  silver: {
    bg: "bg-slate-400",
    border: "border-slate-300/50",
    gradient: "linear-gradient(135deg, #475569 0%, #64748b 50%, #94a3b8 100%)",
    textColor: "white",
    textOpacity: "opacity-90",
    subTextOpacity: "opacity-70",
    chipGradient: "linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)",
    chipBorder: "border-slate-200/60",
    decoration: "group-hover:bg-white/20",
  },
  cyan: {
    bg: "bg-cyan-600",
    border: "border-cyan-500/50",
    gradient: "linear-gradient(135deg, #0891b2 0%, #06b6d4 50%, #22d3ee 100%)",
    textColor: "white",
    textOpacity: "opacity-95",
    subTextOpacity: "opacity-75",
    chipGradient: "linear-gradient(135deg, #FCD34D 0%, #D97706 100%)",
    chipBorder: "border-cyan-900/60",
    decoration: "group-hover:bg-cyan-400/20",
  },
};

export const BankCard = ({ account }: { account: BankAccount }) => {
  const [copied, setCopied] = useState(false);
  const theme = account.theme || "platinum";
  const config = themeConfigs[theme];

  const handleCopy = () => {
    navigator.clipboard.writeText(account.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "relative group overflow-hidden rounded-2xl p-6 shadow-xl border transition-all duration-500",
        config.bg,
        config.border
      )}
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpolygon points='50,0 93,25 93,75 50,100 7,75 7,25' fill='rgba(255,255,255,0.05)'/%3E%3C/svg%3E"),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpolygon points='50,0 93,25 93,75 50,100 7,75 7,25' fill='rgba(255,255,255,0.04)' transform='rotate(90 50 50)'/%3E%3C/svg%3E"),
          ${config.gradient}
        `,
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        backgroundPosition:
          "left 40px bottom -20px, right 60px top -30px, center",
        backgroundSize: "120px 120px, 180px 180px, cover",
      }}
    >
      {/* Background decoration */}
      <div className={cn(
        "absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white/5 rounded-full blur-3xl transition-colors duration-500",
        config.decoration
      )} />

      <div className="relative z-10 space-y-6">
        {/* Card Header */}
        <div className="flex justify-between items-start">
          <div className="p-2.5 bg-white/10 rounded-lg backdrop-blur-sm">
            {account.logo}
          </div>
          <div className="text-right">
            <Text
              color={config.textColor}
              size="xs"
              weight="medium"
              className={cn("tracking-[0.2em] uppercase font-oswald", config.textOpacity)}
            >
              {account.bank}
            </Text>
            <Text color={config.textColor} className={cn("text-[9px] font-oswald tracking-widest uppercase", config.subTextOpacity)}>
              DEBIT CARD
            </Text>
          </div>
        </div>

        {/* Chip and Details */}
        <div className="space-y-4">
          {/* Realistic EMV Chip */}
          <div
            className={cn("relative w-16 h-12 rounded-lg shadow-xl border overflow-hidden", config.chipBorder)}
            style={{
              background: config.chipGradient,
              boxShadow:
                "0 8px 16px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-around py-1 px-1 opacity-40">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-full h-px"
                  style={{
                    background:
                      i % 2 === 0
                        ? "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)"
                        : "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-linear-to-b from-white/30 via-transparent to-black/10 pointer-events-none" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Text
                color={config.textColor}
                size="lg"
                weight="medium"
                className="md:text-2xl font-oswald tracking-[0.15em]"
              >
                {account.accountNumber.match(/.{1,4}/g)?.join(" ") ||
                  account.accountNumber}
              </Text>
              <button
                onClick={handleCopy}
                className="p-2 hover:bg-white/10 rounded-full transition-colors relative group/btn"
                title="Salin Nomor Rekening"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className={cn("w-4 h-4 transition-colors", 
                    config.textColor === 'white' ? 'text-white/60 group-hover/btn:text-white' : 'text-stone-600 group-hover/btn:text-stone-900'
                  )} />
                )}
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded">
                    Copied!
                  </span>
                )}
              </button>
            </div>

            <div className={cn("pt-2 border-t", 
              config.textColor === 'white' ? 'border-white/10' : 'border-stone-900/10'
            )}>
              <Text
                color={config.textColor}
                size="xs"
                className={cn("uppercase tracking-[0.2em] font-oswald text-[9px] mb-1", config.subTextOpacity)}
              >
                Account Holder
              </Text>
              <Text
                color={config.textColor}
                size="sm"
                weight="medium"
                className="tracking-widest font-oswald"
              >
                {account.accountName.toUpperCase()}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
