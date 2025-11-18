"use client";

import { CreditCard, FileText, Download, Eye, AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function BillingInsurance({ billingInfo, onUpdate }) {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState("");

  const handlePayment = () => {
    if (paymentAmount) {
      const newBalance = parseFloat(billingInfo.outstandingBalance.replace('$', '')) - parseFloat(paymentAmount);
      onUpdate({
        ...billingInfo,
        outstandingBalance: `$${newBalance.toFixed(2)}`,
        recentClaims: [
          ...billingInfo.recentClaims,
          {
            id: Date.now(),
            date: new Date().toISOString().split('T')[0],
            service: "Payment",
            amount: `-$${paymentAmount}`,
            status: "Paid"
          }
        ]
      });
      setPaymentAmount("");
      setShowPaymentForm(false);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Paid": return <CheckCircle className="text-green-500" size={16} />;
      case "Pending": return <AlertCircle className="text-orange-500" size={16} />;
      case "Denied": return <AlertCircle className="text-red-500" size={16} />;
      default: return <FileText className="text-gray-500" size={16} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Paid": return "bg-green-100 text-green-600";
      case "Pending": return "bg-orange-100 text-orange-600";
      case "Denied": return "bg-red-100 text-red-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[var(--textDark)]">
          Billing & Insurance
        </h2>
        <button
          onClick={() => setShowPaymentForm(true)}
          className="flex items-center gap-2 bg-[var(--brandColor)] text-white px-4 py-2 rounded-lg hover:bg-[var(--brandColorDark)]"
        >
          <CreditCard size={18} />
          Make Payment
        </button>
      </div>

      {/* Insurance Information */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-[var(--textDark)]">Insurance Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-blue-50 rounded-lg">
          <div>
            <p className="text-sm text-[var(--textLight)]">Provider</p>
            <p className="font-semibold">{billingInfo.insuranceProvider}</p>
          </div>
          <div>
            <p className="text-sm text-[var(--textLight)]">Policy Number</p>
            <p className="font-semibold">{billingInfo.policyNumber}</p>
          </div>
          <div>
            <p className="text-sm text-[var(--textLight)]">Group Number</p>
            <p className="font-semibold">{billingInfo.groupNumber}</p>
          </div>
          <div>
            <p className="text-sm text-[var(--textLight)]">Copay</p>
            <p className="font-semibold">{billingInfo.copay}</p>
          </div>
        </div>
      </div>

      {/* Deductible Information */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-[var(--textDark)]">Deductible Progress</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Individual Deductible</span>
              <span>{billingInfo.deductible.met} / {billingInfo.deductible.individual}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[var(--brandColor)] h-2 rounded-full" 
                style={{ width: '70%' }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Family Deductible</span>
              <span>{billingInfo.deductible.met} / {billingInfo.deductible.family}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full" 
                style={{ width: '23%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Outstanding Balance */}
      <div className="mb-6 p-4 bg-red-50 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-[var(--textLight)]">Outstanding Balance</p>
            <p className="text-2xl font-bold text-red-600">{billingInfo.outstandingBalance}</p>
          </div>
          <button className="text-red-600 hover:text-red-800 text-sm font-semibold">
            View Details
          </button>
        </div>
      </div>

      {/* Payment Form */}
      {showPaymentForm && (
        <div className="mb-6 p-4 border border-[var(--borderLight)] rounded-lg bg-[var(--bgLight)]">
          <h3 className="font-semibold mb-3">Make a Payment</h3>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Amount</label>
              <input
                type="number"
                placeholder="Enter amount"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                className="w-full border border-[var(--borderLight)] rounded-lg px-3 py-2"
              />
            </div>
            <button
              onClick={handlePayment}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Pay Now
            </button>
            <button
              onClick={() => setShowPaymentForm(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Recent Claims */}
      <div>
        <h3 className="font-semibold mb-3 text-[var(--textDark)]">Recent Claims</h3>
        <div className="space-y-3">
          {billingInfo.recentClaims.map((claim) => (
            <div key={claim.id} className="flex justify-between items-center p-3 border border-[var(--borderLight)] rounded-lg">
              <div className="flex items-center gap-3">
                {getStatusIcon(claim.status)}
                <div>
                  <p className="font-semibold text-[var(--textDark)]">{claim.service}</p>
                  <p className="text-sm text-[var(--textLight)]">{claim.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(claim.status)}`}>
                  {claim.status}
                </span>
                <span className="font-semibold">{claim.amount}</span>
                <div className="flex gap-1">
                  <button className="text-blue-600 hover:text-blue-800 p-1">
                    <Eye size={16} />
                  </button>
                  <button className="text-green-600 hover:text-green-800 p-1">
                    <Download size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}