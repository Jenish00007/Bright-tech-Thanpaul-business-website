import React from "react";

const CancellationPolicy = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#ffbf00", textAlign: "center", fontSize: "2.5rem" }}>
        Cancellation Policy
      </h1>
      <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "#555" }}>
        Last Updated: January 11, 2025
      </p>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{
            color: "#ff9900",
            fontSize: "1.5rem",
            marginBottom: "10px",
            borderBottom: "2px solid #ffdd00",
            paddingBottom: "5px",
          }}
        >
          Introduction
        </h2>
        <p>
          At thanapal jewellers, we value our customers and strive to provide the best
          possible service. This Cancellation Policy outlines the conditions
          under which cancellations can be made and any applicable fees.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{
            color: "#ff9900",
            fontSize: "1.5rem",
            marginBottom: "10px",
            borderBottom: "2px solid #ffdd00",
            paddingBottom: "5px",
          }}
        >
          Cancellation Terms
        </h2>
        <ul style={{ paddingLeft: "20px", color: "ff9900" }}>
          <li>
            Cancellations must be made at least 48 hours before the scheduled
            service or delivery to avoid charges.
          </li>
          <li>
            If a cancellation is made within 48 hours of the scheduled time, a
            cancellation fee of 20% of the total amount will be charged.
          </li>
          <li>No-shows or same-day cancellations are non-refundable.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{
            color: "#ff9900",
            fontSize: "1.5rem",
            marginBottom: "10px",
            borderBottom: "2px solidrgb(208, 0, 255)",
            paddingBottom: "5px",
          }}
        >
          Refund Process
        </h2>
        <p>
          Refunds, if applicable, will be processed within 7-10 business days
          after the cancellation request is approved. Refunds will be made using
          the original payment method.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{
            color: "#ff9900",
            fontSize: "1.5rem",
            marginBottom: "10px",
            borderBottom: "2px solid #ffdd00",
            paddingBottom: "5px",
          }}
        >
          Exceptions
        </h2>
        <p>
          Certain products or services may not be eligible for cancellation or
          refund due to their nature. These will be clearly indicated at the
          time of purchase.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{
            color: "#ff9900",
            fontSize: "1.5rem",
            marginBottom: "10px",
            borderBottom: "2px solid #ffdd00",
            paddingBottom: "5px",
          }}
        >
          Contact Us
        </h2>
        <p>
          If you have any questions or need assistance with cancellations,
          please contact us at:
        </p>
        <p>
          <strong>Email:</strong> cancellations@thanapal jewellers.com
        </p>
        <p>
          <strong>Phone:</strong> +123 456 7890
        </p>
        <p>
          <strong>Address:</strong> 123 thanapal jewellers 
        </p>
      </section>
    </div>
  );
};

export default CancellationPolicy;
