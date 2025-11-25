"use client";

import { Download, Eye, FileText } from "lucide-react";
import { useState } from "react";

export default function BillingInsurance({ billingInfo, onUpdate }) {
  const [selectedPayment, setSelectedPayment] = useState(null);

  // PDF View in new tab
  const viewPdf = (pdfData) => {
    const win = window.open();
    win.document.write(`
      <html>
        <head><title>Payment Receipt</title></head>
        <body style="margin:0;">
          <embed width="100%" height="100%" src="${pdfData}" type="application/pdf" />
        </body>
      </html>
    `);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-[var(--shadowCard)]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[var(--textDark)]">
          Payment History
        </h2>
      </div>

      {/* Payment Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <p className="text-sm text-green-600 mb-1">Total Paid</p>
          <p className="text-2xl font-bold text-green-700">$1,250.00</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-600 mb-1">Pending Payments</p>
          <p className="text-2xl font-bold text-blue-700">$350.50</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Total Transactions</p>
          <p className="text-2xl font-bold text-gray-700">{billingInfo.recentClaims.length}</p>
        </div>
      </div>

      {/* Payment History */}
      <div>
        <h3 className="font-semibold mb-4 text-[var(--textDark)]">All Payments</h3>
        <div className="space-y-3">
          {billingInfo.recentClaims.map((payment) => (
            <div key={payment.id} className="p-4 border border-[var(--borderLight)] rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FileText className="text-[var(--brandColor)]" size={20} />
                  <div>
                    <p className="font-semibold text-[var(--textDark)]">{payment.service}</p>
                    <p className="text-sm text-[var(--textLight)]">{payment.date}</p>
                    <p className={`text-sm font-medium ${
                      payment.status === "Paid" ? "text-green-600" : 
                      payment.status === "Pending" ? "text-orange-600" : "text-red-600"
                    }`}>
                      {payment.status}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className={`text-lg font-bold ${
                    payment.amount.startsWith('-') ? "text-green-600" : "text-red-600"
                  }`}>
                    {payment.amount}
                  </span>
                  
                  <div className="flex gap-2">
                    {/* View PDF Button */}
                    <button
                      onClick={() => viewPdf(payment.receiptPdf)}
                      className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm hover:bg-blue-200 transition-colors"
                    >
                      <Eye size={16} />
                      View
                    </button>

                    {/* Download PDF Button */}
                    <a
                      href={payment.receiptPdf}
                      download={`payment_receipt_${payment.date}.pdf`}
                      className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-2 rounded-lg text-sm hover:bg-green-200 transition-colors"
                    >
                      <Download size={16} />
                      Download
                    </a>
                  </div>
                </div>
              </div>

              {/* Payment Details - Show when expanded */}
              {selectedPayment === payment.id && (
                <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Transaction ID:</span>
                      <p className="font-medium">{payment.transactionId}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Payment Method:</span>
                      <p className="font-medium">{payment.paymentMethod}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Service Provider:</span>
                      <p className="font-medium">{payment.provider}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Invoice Number:</span>
                      <p className="font-medium">{payment.invoiceNumber}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}