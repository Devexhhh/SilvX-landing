import {
    Shield, Lock, Cpu,
    Gem, Trophy, Coins,
    BookOpen, TrendingUp, HelpCircle
} from "lucide-react";

export const dropdownData = {
    "Ecosystem": {
        links: [
            { title: "Vault Partner (Augmont)", desc: "Learn about physical asset backing", icon: Shield },
            { title: "Custodian (Brinks)", desc: "How your silver is kept safe", icon: Lock },
            { title: "FinTech Partners", desc: "The tech enabling daily autopay", icon: Cpu },
        ],
        card: {
            eyebrow: "A NOTE ON OUR SECURE VAULTS",
            title: "From Autopay to Vault: Total Clarity",
            profiles: [
                { name: "Rajiv Menon", role: "VAULT CUSTODIAN", img: "https://i.pravatar.cc/150?u=rajiv" },
                { name: "Tamar Gomez", role: "HEAD OF FINTECH", img: "https://i.pravatar.cc/150?u=tamar" }
            ]
        }
    },
    "The Craftshop": {
        links: [
            { title: "Custom Jewelry", desc: "Turn silver into unique heirlooms", icon: Gem },
            { title: "Silver Artefacts", desc: "Explore statues, pens, and cutlery", icon: Trophy },
            { title: "Minting Options", desc: "See available sizes for pure silver coins", icon: Coins },
        ],
        card: {
            eyebrow: "UNLOCKING INSANE PROFITS",
            title: "Turning Digital Balances to Heirlooms",
            profiles: [
                { name: "Devansh Kumar", role: "MASTER SILVERSMITH", img: "https://i.pravatar.cc/150?u=devansh" },
                { name: "Meera Reddy", role: "MICRO-WEALTH", img: "https://i.pravatar.cc/150?u=meera" }
            ]
        }
    },
    "Resources": {
        links: [
            { title: "User Guide", desc: "Step-by-step for daily auto accumulation", icon: BookOpen },
            { title: "Market Insights", desc: "Analyze recent performance & trends", icon: TrendingUp },
            { title: "FAQ & Support", desc: "Answers to all microinvestment queries", icon: HelpCircle },
        ],
        card: {
            eyebrow: "EDUCATION & COMMUNITY",
            title: "Building Discipline for a Silver Future",
            profiles: [
                { name: "Wiem Gharbi", role: "BEHAVIORAL ECONOMIST", img: "https://i.pravatar.cc/150?u=wiem" },
                { name: "Amit Patel", role: "COMMUNITY LEAD", img: "https://i.pravatar.cc/150?u=amit" }
            ]
        }
    }
};

// data.ts

export const testimonials = [
    {
        company: "EDUCATION",
        quote: "I started with just ₹20 a day. I didn't even notice the money leaving my account, but a year later, I liquidated my digital silver vault to buy a new laptop for my final year. It feels like magic.",
        name: "Rahul Verma",
        title: "ENGINEERING STUDENT",
        // Deep Emerald top-left to Obsidian bottom-right
        bg: "bg-gradient-to-br from-[#064E3B] to-[#020617]",
    },
    {
        company: "EMERGENCY",
        quote: "Running a tea stall means my income fluctuates. Automating ₹50 daily into the God's Metal built an emergency fund I couldn't easily spend. When my shop needed repairs, I took a micro-loan against my silver in 5 minutes without losing my asset. True financial dignity.",
        name: "Sunita Devi",
        title: "SMALL BUSINESS OWNER",
        // Metallic Slate bottom-left to Deep Slate top-right
        bg: "bg-gradient-to-tr from-[#334155] to-[#0F172A]",
    },
    {
        company: "LEGACY",
        quote: "I've been using the auto-pay feature for two years. For my sister's wedding, I didn't have to stress about buying an expensive gift. I simply converted my vault balance into stunning physical jewelry delivered right to our door. The value is unmatched.",
        name: "Amit Patel",
        title: "YOUNG PROFESSIONAL",
        // Primary Emerald top-right to Obsidian bottom-left
        bg: "bg-gradient-to-bl from-[#047857] to-[#020617]",
    },
];
// Add this to your existing data.ts file

export const experts = [
    { name: "Rajiv Menon", role: "Former Head of Precious Metals, Standard Bank" },
    { name: "Meera Reddy", role: "Director of Financial Inclusion & Micro-Wealth" },
    { name: "Arun Prakash", role: "Ex-Director of Vault Operations, Global Logistics" },
    { name: "Dr. Kavita Singh", role: "Behavioral Economist, Micro-Savings" },
    { name: "Devansh Kumar", role: "Master Silversmith & Craftshop Lead" },
];

// Add this to your existing data.ts file

export const faqs = [
    {
        q: "What is SilvX and who is it for?",
        a: "SilvX is a daily silver accumulation platform designed for everyone—especially students, young professionals, and those building their first emergency fund. We automate micro-investments so you can build a physical legacy of the God's Metal without ever feeling the pinch.",
    },
    {
        q: "How does the daily auto-pay actually work?",
        a: "You set a daily limit between ₹10 and ₹500. Through our secure UPI AutoPay integration, this small amount is automatically deducted every day and instantly converted into 99.9% pure digital silver. It's an invisible saving habit that builds your wealth in the background.",
    },
    {
        q: "Can I get the silver delivered to my home?",
        a: "Absolutely. Your digital balance represents real, physical silver. Through The Craftshop, you can convert your accumulated vault balance into physical coins, stunning jewelry, or custom artifacts, and have them securely delivered right to your doorstep.",
    },
    {
        q: "Is my money and silver actually safe?",
        a: "100% safe. Every single digital gram you buy is fully backed by physical silver stored in world-class Brink's vaults by our trusted partner, Augmont. Your assets are fully insured, bank-grade secure, and completely yours.",
    },
    {
        q: "How do the silver-backed microloans work?",
        a: "If an emergency hits, you don't need to sell your hard-earned silver. You can use your accumulated vault balance as collateral to get an instant, low-interest cash loan. You get the liquidity you need today, while your silver keeps appreciating in the vault for tomorrow.",
    },
];