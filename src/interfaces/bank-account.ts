import React from "react";

export type BankCardTheme = 'platinum' | 'gold' | 'blue' | 'silver' | 'cyan';

export interface BankAccount {
    bank: string;
    accountNumber: string;
    accountName: string;
    logo: React.ReactNode;
    theme?: BankCardTheme;
}